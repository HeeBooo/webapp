import React, { PureComponent } from 'react';

import './style.scss';

class SearchInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    };

    render() {
        return (
            <input
                className="search-input"
                type="text"
                placeholder="请输入关键字"
                value={this.state.value}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
            />
        );
    };

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        });
    };

    // 采用约束性组件而不是直接操作dom
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    };

    handleKeyUp = (e) => {
        if (e.keyCode !== 13) {
            return;
        };

        this.props.enterHandle(this.state.value);
    };
};

export default SearchInput;
