import { useState } from 'react';
import '../App.css';
import './login.css';
function LoginPg() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="loginbox">
            <div style={{ fontSize: '20px', fontWeight: '700' }}>Welcome to the most aweseome todo app ever</div>
            <div className='loginFields'>
                <input className='credsInput' placeholder='username' value={username} onChange={target => setUsername(target.value)}></input>
                <input className='credsInput' placeholder='password' value={password} onChange={target => setPassword(target.value)}></input>
            </div>
            <div className='loginButFields'>
                <button className='logButtons'>Login</button>
                <button className='logButtons'>Sign up</button>
            </div>
            <div className='loginButFields'>
                <button className='logButtons'>Gmail</button>
                <button className='logButtons'>Facebook</button>
            </div>
        </div>
    );
}

export default LoginPg;