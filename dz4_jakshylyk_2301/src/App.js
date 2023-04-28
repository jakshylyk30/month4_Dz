import './App.css';
import {useState} from "react";
import Swal from "sweetalert2";
import 'animate.css';

function App() {
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [fullname, setFullname] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const handlick = (e) => {
        e.preventDefault()
        const obj = {
            Surname: surname,
            name,
            fullname,
            number,
            email
        }
        console.log(obj)
        Swal.fire({
            title: ` Surname: ${surname},
            Name: ${name},
            FullName ${fullname},
            Number: ${number},
            Email: ${email}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

    }

  return (
    <div className="App">
        <div className="registration">
            <h1>Регистрация</h1>
            <form onSubmit={handlick} action="">
                <label htmlFor="surname">
                    Surname:
                    <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" id='surname'/>
                </label>
                <br/>
                <label htmlFor="name">
                    name:
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"/>
                </label>
                <br/>
                <label htmlFor="fullname">
                    fullname:
                    <input value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" id='fullname'/>
                </label>
                <br/>
                <label htmlFor="email">
                    email:
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email'/>
                </label>
                <br/>
                <label htmlFor="tel">
                    tel:
                    <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" id='tel'/>
                </label>
                <br/>
                <input type="submit"/>
            </form>
            <h2>Surname: {surname}</h2>
            <h2>name: {name}</h2>
            <h2>fullname: {fullname}</h2>
            <h2>email: {email}</h2>
            <h2>tel: {number}</h2>
        </div>
    </div>
  );
}

export default App;
