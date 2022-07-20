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
<Email className="icons neon email"/>
<NotificationsNone className="icons neon notification"/>
   
</div>

        </div>
      </div>
    </div>
  )
}
