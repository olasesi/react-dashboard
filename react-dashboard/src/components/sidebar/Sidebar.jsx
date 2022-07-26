import React from 'react'
import { LineStyle, Timeline, TrendingUp } from '@material-ui/icons'


import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarwrapper">

<div className="sidebarmenu">
<h3 className="sidebarTitle">Dashboard</h3>

<ul className="sidebarList">
                    <li className=" sidebarListItem active">
<LineStyle className="sidebarIcon"/>
<span>Home</span>
                    </li>
                    <li className="sidebarListItem">
<Timeline className="sidebarIcon"/>
<span>Analytics</span>
                    </li>
                    <li className="sidebarListItem">
<TrendingUp className="sidebarIcon"/>
<span>Sales</span>
                    </li>
                </ul>


               
               


               


               







</div>


        </div>
        
        
    </div>
  )
}
