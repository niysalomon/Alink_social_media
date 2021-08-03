import './Rightbar.css';
import {Users} from '../../dammyData';
import Online from '../Online/Online';

export default function Rightbar(profile) {
const HomeRightbar= () => {
    return (
        <>
                <div className="rightbarContainer">
                   <img src="/assets/birthday.jpeg" alt="no Image" className="rightImg"/>
                   <span className="rightText"><b>Sir Clement</b>and <b>3 other friends</b> have a birth day</span>
                </div>
                <img src="/assets/11.jpg" alt="" className="rightbarAds" />
                <h4 className="rightbarTitle">Online friends </h4>
                <ul className="rightbarFriendsList">
                    { Users.map((u)=> (
                        <Online key={u.id} user={u} />
                    ))}
                   
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
                <span className="rightbarinfovalue">Kigali</span>
                </div>
            <div className="rightbarInfoItem">
                <span className="rightbarinfoKey">Professional:</span>
                <span className="rightbarinfovalue">Software Engineer</span>
            </div>
            <div className="rightbarInfoItem">
                <span className="rightbarinfoKey">Martial Status:</span>
                <span className="rightbarinfovalue">Proposing</span>
            </div>
            <h4 className="rightBarFriends"> User Friends </h4>
            <div className="rightbarFollowings">
                <div className="rightBarFollowing">
                    <img src="assets/4.jpg" alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="assets/8.jpg" alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="assets/4.jpg" alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="assets/1.jpg" alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="assets/4.jpg" alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
                <div className="rightBarFollowing">
                    <img src="assets/10.jpg" alt="" className="rightBarFollowingImg" />
                    <span className="rightBarFollowingName">Bodaboda melysa</span>
                </div>
            </div>

        </div>
        </>
    )
}

    return (

        <div className="rightbar">
        <div className="rightbarWrapper">
      <ProfileRightbar/>
      <HomeRightbar /> 

       </div>
       </div>
    )}
 
