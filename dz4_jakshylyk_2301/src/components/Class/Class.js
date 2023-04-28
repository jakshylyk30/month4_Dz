import React from 'react';
import Swal from 'sweetalert2';
import 'animate.css';

class Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            name: '',
            fullname: '',
            number: '',
            email: ''
        };
        this.handlick = this.handlick.bind(this);
    }

    handlick(e) {
        e.preventDefault();
        const obj = {
            Surname: this.state.surname,
            name: this.state.name,
            fullname: this.state.fullname,
            number: this.state.number,
            email: this.state.email
        };
        console.log(obj);
        Swal.fire({
            title: ` Surname: ${this.state.surname},
        Name: ${this.state.name},
        FullName ${this.state.fullname},
        Number: ${this.state.number},
        Email: ${this.state.email}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }

    render() {
        return (
            <div className="App">
                <div className="registration">
                    <h1>Регистрация</h1>
                    <form onSubmit={this.handlick} action="">
                        <label htmlFor="surname">
                            Surname:
                            <input
                                value={this.state.surname}
                                onChange={(e) => this.setState({ surname: e.target.value })}
                                type="text"
                                id="surname"
                            />
                        </label>
                        <br />
                        <label htmlFor="name">
                            name:
                            <input
                                value={this.state.name}
                                onChange={(e) => this.setState({ name: e.target.value })}
                                type="text"
                            />
                        </label>
                        <br />
                        <label htmlFor="fullname">
                            fullname:
                            <input
                                value={this.state.fullname}
                                onChange={(e) => this.setState({ fullname: e.target.value })}
                                type="text"
                                id="fullname"
                            />
                        </label>
                        <br />
                        <label htmlFor="email">
                            email:
                            <input
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                                type="email"
                                id="email"
                            />
                        </label>
                        <br />
                        <label htmlFor="tel">
                            tel:
                            <input
                                value={this.state.number}
                                onChange={(e) => this.setState({ number: e.target.value })}
                                type="number"
                                id="tel"
                            />
                        </label>
                        <br />
                        <input type="submit" />
                    </form>
                    <h2>Surname: {this.state.surname}</h2>
                    <h2>name: {this.state.name}</h2>
                    <h2>fullname: {this.state.fullname}</h2>
                    <h2>email: {this.state.email}</h2>
                    <h2>tel: {this.state.number}</h2>
                </div>
            </div>
        );
    }
}

export default Class;
