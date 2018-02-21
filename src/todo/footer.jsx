import '../assets/styles/footer.styl'
export default {
    data() {
        return {
            author:"Js"
        }
    },
    render() {
        return (
            <div id="footer">
                <span>By {this.author}</span>
            </div>
        )
    }
}