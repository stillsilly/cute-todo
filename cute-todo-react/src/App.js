import React, {Component} from 'react';
import './App.scss';
import './home.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            activeCount: 0  // 这个值是在render函数里算出来的，需要在state里声明一个吗，现在写的这个没有用到
        };
    }

    render() {
        const todoList = this.state.todoList
        const activeCount = todoList.filter((item) => {
            return !item.isCompleted
        }).length
        const list = todoList.map((item, index) => {
            return (
                <li className="todo-item">
                    <input className="complete-checkbox" type="checkbox" checked={item.isCompleted}/>
                    <input className="item-text" type="text" value={item.name}/>
                    <button className="btn-delete">删除</button>
                </li>
            )
        })
        return (
            <div className="page-wrapper page-wrapper-home">
                <h1 className="page-title">代办事项</h1>
                <div className="section-main">
                    <div className="row-input">
                        <input className="input-todo" type="text" placeholder="添加代办事项，回车可保存"/>
                        <button className="btn-confirm">确定</button>
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
