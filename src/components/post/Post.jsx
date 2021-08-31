import './post.css';
import {MoreVert} from '@material-ui/icons';
import { Users } from '../../dammyData';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

function  Post({post}) { 
    const [like, SetLike] = useState(post.likes.length)
    const [isLiked, SetIsLiked] = useState(false)    
    const [user,setusers] = useState({});
    const handlelike=()=>{
        SetLike(isLiked? like-1 : like+1)
        SetIsLiked(!isLiked)
       } 
    useEffect(() => {
    const fetchUsers = async ()=>{
    const res = await axios.get(`/users?userId=${post.userId}`);
    setusers(res.data);
     };
     fetchUsers()
    },[post.userId]);    
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                 <div className="topLeft">
                     <Link style={{textDecoration:"none"}} to={`profile/${user.username}`}>
                    <img className="topProfileImag" src={user.profilePicture || PF+"user.png"}alter=""/>
                    </Link>
                    <span className="postUsername">{user.username} </span>                    
                    <span className="postDate">{format(post.createdAt)}</span>                     
                 </div>
                  <div className="topRight">
                    <MoreVert />
                </div>
               </div> 
                <div className="postCenter">
                    <span className="postText"> {post.desc}</span>
                    <img className="postImg"  src={PF+post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} alt="" onClick={handlelike} className="likeIcon" />
                        <img src={`${PF}heart.png`} alt=""  onClick={handlelike} className="heartIcon" /> 
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
