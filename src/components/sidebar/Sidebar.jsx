import './sidebar.css';
import {RssFeed,HelpOutline,WorkOutline,Event,School,Chat, PlayCircleFilledOutlined, Group, Bookmark} from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarItemtext">Feed</span>
                    </li>
                    <li className="sidebarItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarItemtext">Chat</span>
                    </li>
                    <li className="sidebarItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarItemtext">Video</span>
                    </li>  
                    <li className="sidebarItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarItemtext">Groups</span>
                    </li> 
                    <li className="sidebarItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarItemtext">Bookmarks</span>
                    </li> 
                    <li className="sidebarItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarItemtext">Questions</span>
                    </li> <li className="sidebarItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarItemtext">Jobs</span>
                    </li> <li className="sidebarItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarItemtext">Events</span>
                    </li> <li className="sidebarItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarItemtext">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarhr"/>
                <ul className="sidebarFriendsList">
                    <li className="sidebarfriends">
                        <img src="assets/8.jpg" alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">Sa clement</span>
                    </li>
                    <li className="sidebarfriends">
                        <img src="assets/8.jpg" alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">Kalori Rwanga</span>
                    </li>
                    <li className="sidebarfriends">
                        <img src="assets/8.jpg" alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">Sa clement</span>
                    </li>
                    <li className="sidebarfriends">
                        <img src="assets/8.jpg" alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">Sa clement</span>
                    </li>
                    <li className="sidebarfriends">
                        <img src="assets/8.jpg" alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">Sa clement</span>
                    </li>
                    <li className="sidebarfriends">
                        <img src="assets/8.jpg" alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">Sa clement</span>
                    </li>
                    <li className="sidebarfriends">
                        <img src="assets/8.jpg" alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">Sa clement</span>
                    </li><li className="sidebarfriends">
                        <img src="assets/8.jpg" alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">Sa clement</span>
                    </li><li className="sidebarfriends">
                        <img src="assets/8.jpg" alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">Sa clement</span>
                    </li><li className="sidebarfriends">
                        <img src="assets/8.jpg" alt="wait" className="sidebarImg"/>
                        <span className="sidebarFriendName">Sa clement</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar
