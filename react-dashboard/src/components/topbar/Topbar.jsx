import React from 'react';
import './topbar.css';
import {  Menu, NotificationsNone, Add, Email, Apps } from '@material-ui/icons';
import { TextField, Button } from '@material-ui/core';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
     
         <div className="logo">DASHBOARD LOGO</div>
        
        <div className="search-buttons-icons">
            
            <div className="box-menu-text">
       
        <TextField className="textfield" id="outlined-basic" label="Search" variant="outlined" />
        </div>


<div className="box-menu-text">

<Button className="neon button" variant="contained" endIcon={<Add />}>
  Create
</Button>

<Apps className="icons neon apps"/>
<span className="bubble">2</span>
<Email className="icons neon email"/>
<span className="bubble">3</span>
<NotificationsNone className="icons neon notification"/>
   <div><img className="avartar" src="https://media-s3-us-east-1.ceros.com/forbes/images/2021/12/06/bbff530cddcb7ed1b79ecee931f9f854/artboard-2-copy-6.jpg" alt=""/></div>
</div>

        </div>
      </div>
    </div>
  )
}
