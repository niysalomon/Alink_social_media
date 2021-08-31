import './closeFriends.css';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function CloseFriends({user}) {
    return (
        <li className="sidebarfriends">
                        <img src={PF+user.profilePicture} alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">{user.username}</span>
                    </li>  
    )
}
