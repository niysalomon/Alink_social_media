import './online.css';  
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Online({user}) {
    return ( 
            <li className="rightbarFriend">
                        <div className="rightbarImgProfileContainer">
                            <img src={PF+user.profilePicture} alt="no image" className="rightbarProfilImg" />
                            <spn className="RightbarOnline"></spn>
                        </div> 
                            <span className="rightbarUsername">{user.username}</span>                         
                    </li>       
    )
}
 

