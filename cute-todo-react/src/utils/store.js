const defaultTodoList = [{
    name: '吃饭',
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
}]

export default {
    save(data) {
        if (data) {
            localStorage.setItem('todoList', JSON.stringify(data));
        }
    },
    get() {
        let data = localStorage.getItem('todoList');
        if (!data) {
            return defaultTodoList
        }
        return (data && JSON.parse(data)) || [];
    }
}