import React from 'react';

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    componentDidMount() {
        console.log('Компонент был добавлен в DOM');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Компонент был обновлен');
        console.log('Старое состояние:', prevState);
        console.log('Новое состояние:', this.state);
    }

    componentWillUnmount() {
        console.log('Компонент будет удален из DOM');
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.handleTextChange} />
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default Inputs;
