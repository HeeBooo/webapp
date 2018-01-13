import React, { PureComponent  } from 'react';
import HomeAd from '~components/HomeAd';

import { getAdData } from '~fetch/home/home';

class Ad extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ? <HomeAd data={this.state.data} />
                    : <div>loading...</div>
                }
            </div>
        )
    }

    componentDidMount() {
        const result = getAdData();
        
        result.then(res => {
            return res.json();
        }).then(json => {
            // console.log(json);
            const data = json;
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        })
    }

}

export default Ad;
