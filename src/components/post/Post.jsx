import './post.css';
import {MoreVert} from '@material-ui/icons'

function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                 <div className="topLeft">
                    <img className="topProfileImag" src="/assets/1.jpg" alter=""/>
                    <span className="postUsername">Niyigira Salomon</span>
                    <span className="postDate">10min ago</span>                     
                 </div>
                  <div className="topRight">
                    <MoreVert />
                </div>
               </div> 
                <div className="postCenter">
                    <span className="postText"> Hey there this is my post!!!</span>
                    <img className="postImg"  src="/assets/6.jpg" alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" />
                        <img src="assets/heart.png" alt="" className="heartIcon" /> 
                        <span className="postLikecounter">11 people like it</span>
                    </div>
                    <div className="postCommentText">
                        12 comments
                    </div>
                </div> 

                
            </div>
            
        </div>
    )
}

export default Post
