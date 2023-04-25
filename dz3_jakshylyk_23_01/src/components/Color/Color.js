import React, { Component } from "react";

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {this.setState((prevState) => ({color: !prevState.color}))};


    render() {
        return (
            <>
                <div className="par">
                    <button
                        style={{ background: this.state.color ? "red" : "blue" }}
                        onClick={this.handleClick}
                    >
                        {this.state.color ? "red" : "blue"}
                    </button>
                    <button
                        style={{ background: this.state.color ? "blue" : "red" }}
                        onClick={this.handleClick}
                    >
                        {this.state.color ? "blue" : "red"}
                    </button>
                </div>
            </>
        );
    }
}

export default Color;