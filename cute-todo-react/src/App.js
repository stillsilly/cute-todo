import React, {Component} from 'react';
import './App.scss';
import './home.scss';
import Store from './utils/store'
import Utils from './utils/utils'

console.log(Store)
console.log(Utils)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoInput: '',
            currentStatus: 'all',
            statusList: [{
                id: 1,
                name: '全部',
                status: 'all',
            }, {
                id: 2,
                name: '未完成',
                status: 'active',
            }, {
                id: 3,
                name: '已完成',
                status: 'completed',
            }],
            todoList: Store.get(),
            activeCount: 0  // 我需要一个类似 vue 里 computed 的东西，自动根据 todoList 的变化计算 activeCount，现在初始渲染、新增、删除、切换完成状态都要算一遍，有点烦 @todo
        };

    }

    handleEnterAddInput(e) {
        if (e.keyCode === 13) {
            this.addTodo()
        }
    }

    addTodo() {
        if (!this.state.todoInput.trim()) {
            return
        }
        const activeCount = this.state.todoList.filter((item) => {
            return !item.isCompleted
        }).length
        // 不能用 length + 2，删除几个后，再添加，会有重复的
        let id = Utils.getUniqueId()
        // 不能直接push
        this.setState({
            todoList: this.state.todoList.concat({
                name: this.state.todoInput.trim(),
                id,
                isCompleted: false,
            }),
            todoInput: '',
            activeCount: activeCount + 1
        })
        this.save()
    }

    toggleCompleteTodo(e, index) {
        const todoList = this.state.todoList.slice()
        todoList[index].isCompleted = e.target.checked
        const activeCount = todoList.filter((item) => {
            return !item.isCompleted
        }).length
        this.setState({
            todoList,
            activeCount
        })
        this.save()
    }

    handleChangeTodoItem(e, index) {
        const todoList = this.state.todoList.slice()
        todoList[index].name = (e.target.value || '').trim()
        const activeCount = todoList.filter((item) => {
            return !item.isCompleted
        }).length
        this.setState({
            todoList,
            activeCount
        })
        this.save()
    }

    handleEnterTodoItemInput(e) {
        if (e.keyCode === 13) {
            e.target.blur()
        }
    }

    handleClickDeleteBtn(index) {
        const todoList = this.state.todoList.slice()
        todoList.splice(index, 1)
        const activeCount = todoList.filter((item) => {
            return !item.isCompleted
        }).length
        this.setState({
            todoList,
            activeCount
        })
        this.save()
    }

    handleChangeStatus(status) {
        this.setState({
            currentStatus: status
        })
    }

    clearCompletedItems() {
        const todoList = this.state.todoList.filter((item) => {
            return !item.isCompleted
        })
        this.setState({
            todoList
        })
        this.save()
    }

    save() {
        // 这个要怎么办  setState 不能保证会立马更新值，那我也拿不到最新的 先暂时凑合 setTimeout 一下
        setTimeout(() => {
            Store.save(this.state.todoList)
        })

    }

    render() {
        const todoList = this.state.todoList
        const activeCount = this.state.todoList.filter((item) => {
            return !item.isCompleted
        }).length
        const statusBtnList = this.state.statusList.map((item) => {
            return (
                <button key={item.id}
                        className={`btn-filter ${item.status === this.state.currentStatus ? 'btn-filter_active' : ''}`}
                        onClick={() => this.handleChangeStatus(item.status)}>{item.name}</button>
            )
        })
        const currentTodoList = todoList.filter((item) => {
            return this.state.currentStatus === 'all' || (this.state.currentStatus === 'active' && !item.isCompleted) || (this.state.currentStatus === 'completed' && item.isCompleted)

        })
        const list = currentTodoList.map((item, index) => {
            return (
                <li className="todo-item" key={item.id}>
                    <input className="complete-checkbox"
                           type="checkbox"
                           checked={item.isCompleted}
                           onChange={(e) => this.toggleCompleteTodo(e, index)}/>
                    <input className="item-text"
                           type="text"
                           value={item.name}
                           onChange={(e) => this.handleChangeTodoItem(e, index)}
                           onKeyUp={e => this.handleEnterTodoItemInput(e)}
                    />
                    <button className="btn-delete" onClick={() => this.handleClickDeleteBtn(index)}>删除</button>
                </li>
            )
        })

        return (
            <div className="page-wrapper page-wrapper-home">
                <h1 className="page-title">代办事项</h1>
                <div className="section-main">
                    <div className="row-input">
                        <input className="input-todo" type="text" placeholder="添加代办事项，回车可保存"
                               value={this.state.todoInput}
                               onChange={e => this.setState({todoInput: e.target.value})}
                               onKeyUp={e => this.handleEnterAddInput(e)}
                        />
                        <button className="btn-confirm"
                                onClick={() => this.addTodo()}
                        >确定
                        </button>
                    </div>
                    <div className="row-operate">
                        <div className="filter-btn-list">
                            {statusBtnList}
                        </div>
                        <button className="btn-delete-completed" onClick={() => this.clearCompletedItems()}>清空已完成
                        </button>
                    </div>
                    <ol className="todo-list">
                        {list}
                    </ol>
                    <div className="row-bottom">
                        <span className="info-count">还剩
                            <span className="num"> {activeCount} </span>项未完成
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
