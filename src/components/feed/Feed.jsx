import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import {Posts} from '../../dammyData';

function Feed() {
    return (
        <div className="feed">
            <div className="feedbarWrapper">
                <Share />
                {Posts.map((p)=>(                    
                <Post key={p.id} post={p}/> 
                ))}

            </div>
            
        </div>
    )
}

export default Feed
