import './Topbar.css';
import {Search,Person,Chat,Notifications} from '@material-ui/icons';
import {Link} from 'react-router-dom';

 
function Topbar() {
    return (
        <div className="topbarCoontainer">
            <div className="topbarLeft">
                <div className="log">Alink</div>
            </div>
            <div className="topbarCenter">
                <div className="topbarSearch">
                <Search />
                <input type="text" placeholder="Search any Person Photo and video" className="inputSearch" />
            </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                <div className="topbarLink">
                   <Link to='/Profile'>Homepage</Link> </div>
                <div className="topbarLink"> Timeline </div>
                </div>
                <div className="topbarIcon">

                    <div className="topbarIconitem">                        
                        <Person  className="searchIcon"/>
                        <span className="topbarIconbadge">1</span>
                    </div>
                    <div className="topbarIconitem">  
                        <Chat />
                        <span className="topbarIconbadge">2</span> 
                    </div>
                    <div className="topbarIconitem">                          
                         <Notifications />                       
                        <span className="topbarIconbadge">3</span>                         
                    </div>

                </div>
                <img src="/assets/1.jpg" alt="No image" className="topbarImg"/>
            </div>
            
        </div>
    )
}
export default Topbar
