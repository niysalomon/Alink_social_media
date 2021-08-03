import './closeFriends.css';

export default function CloseFriends({user}) {
    return (
        <li className="sidebarfriends">
                        <img src={user.profilePicture} alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">{user.username}</span>
                    </li>  
    )
}
