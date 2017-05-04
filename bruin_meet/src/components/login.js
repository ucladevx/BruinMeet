import React, {
    Component
}
from 'react';
import '../styles/login.css';

class Login extends Component {
    render() {
        return (
            < div className = 'container' >
            <h2>Don't miss out</h2>
            <h3>Get Started</h3>
            < input type = "" placeholder = "Name"/>
            < input type = "" placeholder = "Your UCLA Email"/>
            < input type = "" placeholder = "Password"/>
            
            < a className = 'login'
            onClick = {
                this.props.onLogin
            } >
            < p className = 'button'>Sign Up!< /p> < /a> < /div> 
        )
    }
}
// POST: signup/email, 
export default Login;
