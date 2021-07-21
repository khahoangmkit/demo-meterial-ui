import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: undefined,
    }
  }

  componentDidMount() {
    // this.setState({count: 1});
    console.log("componentDidMount")
  }

  componentDidUpdate(prevProps) {

  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const {num, name, age} = this.props;
    return(
      <>
        {/*<div onClick={() => this.setState({count: 3})}>OnClick Chidren</div>*/}
        {/*<div>Dem: {this.state.count}</div>*/}
        <div>Props: {num}, age: {age}, name: {name}</div>
      </>
    )
  }
}

export default Counter;