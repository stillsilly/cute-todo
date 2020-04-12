import React, {Component} from 'react';
import './App.scss';
import './home.scss';

class App extends Component {
    render() {
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
                        <li className="todo-item">
                            <input className="complete-checkbox" type="checkbox"/>
                            <input className="item-text" type="text" value="吃饭饭"/>
                            <button className="btn-delete">删除</button>
                        </li>
                        <li className="todo-item">
                            <input className="complete-checkbox" type="checkbox"/>
                            <input className="item-text" type="text" value="喝水"/>
                            <button className="btn-delete">删除</button>
                        </li>
                        <li className="todo-item">
                            <input className="complete-checkbox" type="checkbox"/>
                            <input className="item-text" type="text" value="看书"/>
                            <button className="btn-delete">删除</button>
                        </li>
                        <li className="todo-item">
                            <input className="complete-checkbox" type="checkbox"/>
                            <input className="item-text" type="text" value="运动"/>
                            <button className="btn-delete">删除</button>
                        </li>
                    </ol>
                    <div className="row-bottom">
                            <span className="info-count">
                            还剩 <span className="num">3</span> 项未完成
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
