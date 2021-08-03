import './post.css';
import {MoreVert} from '@material-ui/icons';
import { Users } from '../../dammyData';
import {useState} from 'react';


function  Post({post}) { 
    const [like, SetLike] = useState(post.like)
    const [isLiked, SetIsLiked] = useState(false)
    const handlelike=()=>{
        SetLike(isLiked? like-1 : like+1)
        SetIsLiked(!isLiked)

    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                 <div className="topLeft">
                    <img className="topProfileImag" src={Users.filter((u) => u.id === post.userId)[0].profilePicture}alter=""/>
                    <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date} min ago</span>                     
                 </div>
                  <div className="topRight">
                    <MoreVert />
                </div>
               </div> 
                <div className="postCenter">
                    <span className="postText"> {post.desc}</span>
                    <img className="postImg"  src={post.photos} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" onClick={handlelike} className="likeIcon" />
                        <img src="assets/heart.png" alt=""  onClick={handlelike} className="heartIcon" /> 
                        <span className="postLikecounter">{like} people like it</span>
                    </div>
                    <div className="postCommentText">
                        {post.comment} comments
                    </div>
                </div> 

                
            </div>
            
        </div>
    )
}

export default Post
