import React from "react";
import "./message.css";

export class MessageForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newMessage: this.emptyMessage,
        };

        this.titleInputRef = React.createRef();
    }

    emptyMessage = {sender: '', messageText: '', recipient: ''};

    handleFormInputChange = (event) => {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState((prevState) => ({
            newMessage: {...prevState.newMessage, [name]: value},
        }));
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.writeMessage(this.state.newMessage);
        this.resetNewMessage();

    };

    resetNewMessage = () => {
        this.setState({newMessage: this.emptyMessage});
    };

    render(){
        return(
            <>
                <h2>Write new message</h2>
                <form onSubmit={this.handleFormSubmit} className="NewMessage-Form">
                    <input
                        fieldRef={this.titleInputRef}
                        required
                        type="text"
                        name ="sender"
                        onChange={this.handleFormInputChange}
                        value={this.state.newMessage.sender}
                        placeholder="id applier"

                    />
                    <br />
                    <input
                        
                        required
                        type="text"
                        name="messageText"
                        onChange={this.handleFormInputChange}
                        value={this.state.newMessage.messageText}
                        placeholder="Your message here"
                    />
                    <br />
                    <input
                        required
                        type="text"
                        name="recipient"
                        onChange={this.handleFormInputChange}
                        value={this.state.newMessage.recipient}
                        placeholder="recipient"
                    />
                    <button type="submit">Create Conversation</button>
                </form>
                </>
        );
    }

}