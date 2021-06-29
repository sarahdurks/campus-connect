import "./online.css";

const Online = () => {
    return (
        <div className="online">
            <div className="friend">
                <div className="imgContainer">
                    {/* placeholder if we want user image */}
                    {/* <img className="onlineImg"src="" alt=""/> */}
                    <div className="onlineBadge"></div>
                </div>
                <span className="friendName">Chris Olson</span>
            </div>
        </div>
    )
}

export default Online