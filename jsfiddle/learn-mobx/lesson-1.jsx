const {observable, computed} = mobx;
const {observer} = mobxReact;
const {Component} = React;

@observer
class Counter extends Component {
    @observable count = 0;

    render() {
        return (
            <div>
                Counter: {this.count} <br />
                <button onClick={this.handleDec}>-</button>
                <button onClick={this.handleInc}>+</button>
            </div>
        )
    }

    handleDec = () => {
                this.count--;
    }

    handleInc = () => {
        this.count++;
    }
}
ReactDOM.render(<Counter />, document.getElementById('mount'));
