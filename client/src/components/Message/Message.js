import "./message.css";

const Message = (user) => {
    return (
        <div className={user ? "message user" : "message"}>
            <div className="messageTop">
                {/* image placeholder in case we want to include
                <img 
                    className="messageImg"
                    src=""
                    alt=""
                /> */}
                <p className="messageText">Hello there! I'm Megan. This is a message</p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    )
}

export default Message
