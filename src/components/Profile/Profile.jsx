import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import {useEffect,useState} from 'react';
import axios from 'axios'
import './profile.css';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Profile() {    
    const [user,setUsers] = useState([]); 

    useEffect(() => {
        const fetchUsers = async ()=>{
       const res = await axios.get(`/users?kaloli`)
       setUsers(res.data) 
        };
        fetchUsers()
       },[]);
   

    return (
        <>
           <Topbar/>
           <div className="profile">
           <Sidebar />
           <div className="profileRight">
           <div className="prifileTop">
               <div className="profileCover">
            <img className="profileCoverImg" src={`${PF}posts/cover.jpg`}/>
            <img className="profileUserImg" src={`${PF}posts/1.jpg`}/>
            </div>
            <div className="profileInfO">
                <h4 className="profileUser">{user.username}</h4>
                <span className="profileDesc">{user.desc}</span>
            </div>
           </div>
           <div className="profileBottom">
           <Feed username={user.username}/>
           <Rightbar user={user} />
           </div>
           </div>
           </div>

        </>
    )
}
