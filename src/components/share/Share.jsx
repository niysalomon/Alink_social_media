import './share.css';
import {EmojiEmotions, Label, PermMedia, Room} from '@material-ui/icons'

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImage" src="/assets/posts/1.jpg" alt="No image" />
                    <input className="shareInput" placeholder="What is in your mind" />
                </div>
                <hr className="sharehr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareImage" />
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareImage" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareImage" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareImage" />
                            <span className="shareOptionText">Feelings</span>

                        </div>
                        <button className="shareButton">Share</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Share
