import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, text: '' };
    }

    componentDidMount() {
        console.log('Компонент был добавлен в DOM');
    }

    componentDidUpdate() {
        console.log('Компонент был обновлен');
    }

    componentWillUnmount() {
        console.log('Компонент будет удален из DOM');
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
        this.setState({ text: 'Updating' });
    }

    render() {
        return (
            <div>
                <h1>Счетчик: {this.state.count}   {this.state.text}</h1>
                <button onClick={this.incrementCount}>Увеличить</button>
            </div>
        );
    }
}

export default Counter;
