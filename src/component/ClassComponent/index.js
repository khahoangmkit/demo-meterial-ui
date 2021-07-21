import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    }
  }

  componentWillUnmount() {
    console.log('omponent Will Un Mount')
  }

  componentDidUpdate(prevProps) {
    console.log('omponent DidUpdate');
  }

  componentDidMount() {
    console.log('Component Did Mount')
  }

  render() {
    return(
      <div>
        Class Component {this.state.num}
        <button onClick={() => this.setState({num: this.state.num + 1 })}>Increate</button>
      </div>
    )
  }
}

export default ClassComponent;