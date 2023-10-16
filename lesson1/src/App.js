import './App.css';
import { Component } from 'react';
import React from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {disabled: false};
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps()");
    return null;
  }
  componentDidMount(){
    console.log("componentDidMount()");
  }
  componentWillUnmount(){
    console.log("componentWillUnmount()");
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate()");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate()");
    return null;
  }
  componentDidUpdate(){
    console.log("componentDidUpdate()");
  }

  render () {
    console.log("render()");
    return (
  <>
    <div className="App">
    <form onSubmit={(event) => {alert('Вы внесли: ' + this.state.value); event.preventDefault()}}>
      <label>
         Внести данные:
        <input id="input" type="text" value={this.state.value} onChange={(event)=> {this.setState({value: event.target.value});
        event.target.value.toLowerCase() === 'реакт' ? this.setState({disabled: true}) : this.setState({disabled: false})}} />
      </label>
      <input type="submit" value="Отправить" disabled={this.state.disabled}/>
      <input type="button" value="Фокус" onClick={() => { document.querySelector("#input").focus() }}/>
    </form>
    <p>Имя: {this.props.name}</p>
    <p>Возраст: {this.props.age}</p>
    <NumberList />
    </div>
    <Post/>
    <Name/>
  </>
    );
  }
}

App.defaultProps = {name: "Tom", age: 22};
function NumberList(props) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listItems = numbers.map((number) =>
  <li key={number.toString()}>
  {number}
  </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
function Name(){
  return <h1>Hi react</h1>
}
function Post(){
  return (
      <div>
        <h1>Heading...</h1>
        <p>post content</p>
      </div>
  )
}
export default App;
