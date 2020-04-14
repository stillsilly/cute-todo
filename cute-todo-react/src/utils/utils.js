export default {
    getUniqueId() {
        return (new Date().getTime() + Math.random() * 10000).toFixed(0)
    }
}