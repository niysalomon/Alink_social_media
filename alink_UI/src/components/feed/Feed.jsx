import './feed.css';
import{ useEffect, useState } from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import {Posts} from '../../dammyData';
import axios from 'axios';
 
function Feed({username}) {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
     const fetch_data = async ()=>{
    const res =username?
     await axios.get("/posts/profile/"+username)
     : await axios.get("posts/timeline/61110196927d680208ffecc0")   
     
    setPosts(res.data)
     };
     fetch_data()
    },[]);
    return (
        <div className="feed">
            <div className="feedbarWrapper">
                <Share />
                 {posts.map((p)=>(                    
                <Post key={p._id} post={p}/> 
                ))} 
            </div>            
        </div>
    )
}
export default Feed