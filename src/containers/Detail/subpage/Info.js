import React, { PureComponent  } from 'react';
import DetailInfo from '~components/DetailInfo';
import { getInforData } from '~fetch/detail/detail';

class Info extends PureComponent {
    constructor(props) {
        super(props);
        this.state= {
            data: false, // 注意这初始化不能写为{}
            id: this.props.id
        }
    };

    render() {
        const data = this.state.data;
        return (
            <div>
                {
                    data
                    ? <DetailInfo data={data} />
                    : <div>loading...</div>
                }
            </div>
        )
    };

    componentDidMount() {
        const id = this.state.id;
        const result = getInforData(id);
        
        result.then(res => {
            if (res.status === 200) {
                return res.json();
            }
        }).then(json => {
            const data = json;
            this.setState({
                data: data
            })
        }).catch(function(error) {
            console.log(`There has been a problem: ${error.message}`);
        });
    };
};

export default Info;
