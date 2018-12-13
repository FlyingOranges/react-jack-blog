import React, {Component} from 'react';
import './App.css';
// import ToDoApp from './components/todo/ToDoApp';
import Index from './pages/index/Index';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: 'Mark',
        }
    }

    render() {
        return (
            <Index name={'Rose'} sex={'women'}/>
        );
    }

    handleClick() {
        this.setState({'name': 'Zuck'});
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

}

export default App;