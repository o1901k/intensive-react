import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
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
    <div className="App">
    <form onSubmit={(event) => {alert('Вы внесли: ' + this.state.value); event.preventDefault()}}>
      <label>
         Внести данные:
        <input type="text" value={this.state.value} onChange={(event)=> {this.setState({value: event.target.value})}} />
      </label>
      <input type="submit" value="Отправить" />
    </form>
    <p>Имя: {this.props.name}</p>
    <p>Возраст: {this.props.age}</p>
    </div>
    );
  }
}

App.defaultProps = {name: "Tom", age: 22};
export default App;
