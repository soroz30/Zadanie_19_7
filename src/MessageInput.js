import React from 'react';
import MessageInputContainer from './MessageInputContainer';

class MessageInput extends React.Component {
    state = {
        value: ''
    }

    onChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    };

    handleSubmit = () => {
        this.props.addComment(this.state.value);
        this.setState({
            value: '',
        });
    };

    render() {
        return (
            <div>
                <input
                    onChange={this.onChange}
                    value={this.state.value}
                    type='text'
                />
                <button
                    onClick={this.handleSubmit}
                    type='submit'
                >
                    New Comment
                </button>
            </div>
        )
    }
}

export default MessageInput;