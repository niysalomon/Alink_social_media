import './online.css'; 

export default function Online({user}) {
    return ( 
            <li className="rightbarFriend">
                        <div className="rightbarImgProfileContainer">
                            <img src={user.profilePicture} alt="no image" className="rightbarProfilImg" />
                            <spn className="RightbarOnline"></spn>
                        </div> 
                            <span className="rightbarUsername">{user.username}</span>                         
                    </li>       
    )
}
 

