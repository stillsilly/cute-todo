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
                        <button className="btn-toggle-collapse">收起</button>
                        <input type="text" placeholder="添加代办事项，回车可保存"/>
                        <button>确定</button>
                    </div>
                    <ol className="todo-list">
                        <li className="todo-item">
                            <input type="checkbox"/>
                            <span>吃饭饭</span>
                            <button>删除</button>
                        </li>
                        <li className="todo-item">
                            <input type="checkbox"/>
                            <span>喝水</span>
                            <button>删除</button>
                        </li>
                        <li className="todo-item">
                            <input type="checkbox"/>
                            <span>看书</span>
                            <button>删除</button>
                        </li>
                        <li className="todo-item">
                            <input type="checkbox"/>
                            <span>运动</span>
                            <button>删除</button>
                        </li>
                    </ol>
                    <div className="row-bottom">
                <span className="info-count">
                    还剩 <span className="num">3</span> 项未完成
                </span>
                        <ul className="filter-btn-list">
                            <button className="btn-filter-all">全部</button>
                            <button className="btn-filter-active">未完成</button>
                            <button className="btn-filter-completed">已完成</button>
                        </ul>
                        <button className="btn-delete-completed">清空已完成</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
