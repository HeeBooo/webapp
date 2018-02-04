import React, { PureComponent } from 'react';
import { getImage } from '~static/js/common';
import './style.scss';

// 无状态组件可以直接使用函数形式创建
class Item extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            commentState: 1, // 0未评价,1评价中,2已经评价
            comment: '' // 评论的值
        }
    };
    render() {
        const data = this.props.data;
        return (
            <div className="order-list-item">
                <div className="item-img">
                    <img src={getImage(data.img)} alt="{data.title}" />
                </div>
                <div className="item-content">
                    <span>商户: {data.title}</span>
                    <span>数量: {data.count}</span>
                    <span>价格: ￥{data.price}</span>
                </div>
                <div className="item-comment">
                    {
                        this.state.commentState === 0
                            ? <button className="btn" onClick={this.showComment}>评价</button>
                            :
                            this.state.commentState === 1
                                // 评价中
                                ? ''
                                // 已经评价
                                : <button className="btn unseleted-btn">已评价</button>
                    }
                </div>
                {
                    this.state.commentState === 1
                        ?
                        <div className="comment-text-container">
                            <textarea
                                placeholder="请输入评价"
                                onChange={this.textareaChange}
                                value={this.state.comment}
                            >
                            </textarea>
                            <button className="btn" onClick={this.submitHandle}>提交</button>
                            <button className="btn unseleted-btn" onClick={this.hideComment}>取消</button>
                        </div>
                        : ''
                }
            </div>
        );
    };

    componentDidMount() {
        // 更新评价状态
        this.setState({
            commentState: this.props.data.commentState
        });
    };

    // 将状态改为1，显示评价框
    showComment = () => {
        this.setState({
            commentState: 1
        });
    };

    // 将状态改为0，隐藏评价框，清空值
    hideComment = () => {
        this.setState({
            commentState: 0,
            comment: ''
        });
    };

    // 处理提交
    submitHandle = () => {
        const id = this.props.data.id;
        const submitComment = this.props.submitComment;
        const comment = this.state.comment;
        
         // 如果输入的值是空格则不提交
         if (!comment.trim()) {
            return
         }

        // 提交评论内容
        submitComment(id, comment, this.commentOk);
    };

    // 上传后清空值，将状态改为3已评价 
    commentOk = () => {
        this.setState({
            commentState: 2,
            comment: ''
        });
    };

    // 约束textarea
    textareaChange = e => {
        this.setState({
            comment: e.target.value
        });
    };
};

export default Item;
