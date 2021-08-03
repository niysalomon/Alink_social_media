import React, { Component } from 'react';

import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import './profile.css';


export default function Profile() {
    return (
        <>
           <Topbar/>
           <div className="profile">
           <Sidebar />
           <div className="profileRight">
           <div className="prifileTop">
               <div className="profileCover">
            <img className="profileCoverImg" src="assets/cover.jpg"/>
            <img className="profileUserImg" src="assets/1.jpg"/>
            </div>
            <div className="profileInfO">
                <h4 className="profileUser">NIYIGIRA Salomon</h4>
                <span className="profileDesc">hello there am using Alink</span>
            </div>
           </div>
           <div className="profileBottom">
           <Feed />
           <Rightbar />
           </div>
           </div>
           </div>

           </>
    )
}
