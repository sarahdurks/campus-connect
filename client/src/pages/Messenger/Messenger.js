import "./messenger.css"
import Conversation from "../../components/Conversation/Conversation";
import Message from "../../components/Message/Message";
import Online from "../../components/Online/Online"

const Messenger = (user) => {
    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input className="chatMenuInput" placeholder="Search for Friends" type="text"/>
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="messagesHere">
                        <Message />
                        <Message user={true} />
                        <Message />
                        <Message />
                        <Message user={true} />
                        <Message user={true} />
                        <Message user={true} />
                        <Message user={true} />
                        <Message user={true} />
                        <Message user={true} />
                        <Message user={true} />
                        <Message user={true} />
                        <Message user={true} />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="messageInput"placeholder="Write Your Message"></textarea>
                        <button className="submit">Send</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnline">
                    <Online />
                </div>
            </div>
        </div>
    )
}

export default Messenger
