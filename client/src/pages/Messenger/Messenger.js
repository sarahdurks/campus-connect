import "./messenger.css"

const Messenger = () => {
    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input className="chatMenuInput" placeholder="Search for Friends" type="text"/>
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
