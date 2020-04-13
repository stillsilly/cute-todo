import React, {Component} from 'react';
import './App.scss';
import './home.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoInput: '',
            currentType: 'all',  // 一共有三种， all active completed
            todoList: [{
                name: '吃饭饭',
                id: 1,
                isCompleted: false,
            }, {
                name: '喝水',
                id: 2,
                isCompleted: false,
            }, {
                name: '看书',
                id: 3,
                isCompleted: false,
            }, {
                name: '运动',
                id: 4,
                isCompleted: true,
            }],
            activeCount: 0
        };

    }

    handleEnterAddInput(e) {
        if (e.keyCode === 13) {
            this.addTodo()
        }
    }

    addTodo() {
        const activeCount = this.state.todoList.filter((item) => {
            return !item.isCompleted
        }).length
        let id = activeCount + 2
        // 不能直接push
        this.setState({
            todoList: this.state.todoList.concat({
                name: this.state.todoInput,
                id,
                isCompleted: false,
            }),
            todoInput: '',
            activeCount: this.state.activeCount + 1
        })

    }

    completeTodo() {

    }

    handleChangeTodoItem() {

    }

    render() {
        const todoList = this.state.todoList
        const activeCount = this.state.todoList.filter((item) => {
            return !item.isCompleted
        }).length
        const list = todoList.map((item, index) => {
            return (
                <li className="todo-item" key={item.id}>
                    <input className="complete-checkbox" type="checkbox" checked={item.isCompleted}
                           onChange={() => this.completeTodo(index)}/>
                    <input className="item-text"
                           type="text"
                           value={item.name}
                           onChange={() => this.handleChangeTodoItem()}
                    />
                    <button className="btn-delete">删除</button>
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
                        <ul className="filter-btn-list">
                            <button className="btn-filter btn-filter-all btn-filter_active">全部</button>
                            <button className="btn-filter btn-filter-active">未完成</button>
                            <button className="btn-filter btn-filter-completed">已完成</button>
                        </ul>
                        <button className="btn-delete-completed">清空已完成</button>
                    </div>
                    <ol className="todo-list">
                        {list}
                    </ol>
                    <div className="row-bottom">
                            <span className="info-count">
                            还剩 <span className="num">{activeCount}</span> 项未完成
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
