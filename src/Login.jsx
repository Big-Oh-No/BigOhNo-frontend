// to save user inputs
import React, {useState} from "react";

// create component
export const Login = () => {
    // add the state
    const[email, setEmail] = useState('');
    const[pw, setPw] = useState('');

    // when user submits form
    const handleSubmit = () => {
        console.log(email);
        
    }
    
    return(
        <div>
            <form >
                <label for="email">email</label>
                <input value={email} type="email" placeholder="Enter your email" id="email" name="email"/>
                <label for="password">password</label>
                <input value={password} type="password" placeholder="Enter your password" id="password" name="passoword"/>
                <button>Login</button>
            </form>
        </div>
    )
}