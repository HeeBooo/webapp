import React, { PureComponent  } from 'react';
import './style.scss';

class LoginComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }
    render() {
        return (
            <div className="login-container">
                <div className="input1-container phone-container">
                    <i className="icon-tablet"></i>
                    <input 
                        type="text" 
                        placeholder="请输入手机号" 
                        onChange={this.changeHandle}
                        value={this.state.username}
                        maxLength="11"
                    />
                </div>
                <div className="input1-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="请输入验证码" />
                </div>
                <button className="btn-login" onClick={this.clickHandle}>登录</button>
            </div>
        )
    };

    changeHandle = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    clickHandle = () => {
        const username = this.state.phone;
        const loginHandle = this.props.loginHandle;

        loginHandle(username);
    }
};


export default LoginComponent;
