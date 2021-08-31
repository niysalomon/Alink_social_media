import './Rightbar.css';
import {Users} from '../../dammyData';
import Online from '../Online/Online';

export default function Rightbar({ user }) {    
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const HomeRightbar= () => {
    return (
        <>
                <div className="rightbarContainer">
                   <img src="/assets/posts/birthday.jpeg" alt="no Image" className="rightImg"/>
                   <span className="rightText"><b>Sir Clement</b>and <b>3 other friends</b> have a birth day</span>
                </div>
                <img src="/assets/posts/11.jpg" alt="" className="rightbarAds" />
                <h4 className="rightbarTitle">Online friends </h4>
                <ul className="rightbarFriendsList">
                    {/* { Users.map((u)=> (
                        <Online key={u.id} user={u} />
                    ))}                    */}
                </ul>           
        </>
    )
}
const ProfileRightbar = () =>{
    return(
        <>
        <h4 className="rightbarTitle">  </h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                <span className="rightbarinfoKey">City:</span>
                <span className="rightbarinfovalue">{user.city}</span>
                </div>
            <div className="rightbarInfoItem">
                <span className="rightbarinfoKey">Professional:</span>
                <span className="rightbarinfovalue">{user.proffession}</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarinfoKey">Martial Status:</span>
                <span className="rightbarinfovalue">{user.m_status}</span>
            </div>
            <h4 className="rightBarFriends"> User Friends </h4>
            <div className="rightbarFollowings">
                <div className="rightBarFollowing">
                    <img src={`${PF}posts/4.jpg`} alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
                <div className="rightBarFollowing">
                    <img src={`${PF}posts/8.jpg`} alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
                <div className="rightBarFollowing">
                    <img src={`${PF}posts/4.jpg`} alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
                <div className="rightBarFollowing">
                    <img src={`${PF}posts/1.jpg`} alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
                <div className="rightBarFollowing">
                    <img src={`${PF}posts/4.jpg`} alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
                <div className="rightBarFollowing">
                    <img src={`${PF}posts/10.jpg`} alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
            </div>
        </div>
        </>
    )}
    return (
        <div className="rightbar">
        <div className="rightbarWrapper">
      <ProfileRightbar/>
      <HomeRightbar /> 
       </div>
       </div>
    )}
