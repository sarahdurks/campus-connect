import "./messenger.css"
import Conversation from "../../components/Conversation/Conversation";

const Messenger = () => {
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
                    box
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnline">
                    online
                </div>
            </div>
        </div>
    )
}

export default Messenger
