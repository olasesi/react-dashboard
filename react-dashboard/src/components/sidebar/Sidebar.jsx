import React from 'react'
import { LineStyle, Timeline, TrendingUp, Money, TrendingDown, Payment, AccountBalance, VerifiedUser, Settings} from '@material-ui/icons'


import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar border sides-2">
        <div className="sidebarwrapper">

<div className="sidebarmenu">
<div className="image">
<img className="sidebarImage" src="https://media-s3-us-east-1.ceros.com/forbes/images/2021/12/06/bbff530cddcb7ed1b79ecee931f9f854/artboard-2-copy-6.jpg" alt=""/>
<span className="imageTitle">Web Developer</span>
<span className="">Olusesi Ahmed</span>
</div>

<h3 className="sidebarTitle">Dashboard</h3>

<ul className="sidebarList">
                    <li className=" sidebarListItem active">
<LineStyle className="sidebarIcon neon primary"/>
<span className="name">Home</span>
                    </li>
                    <li className="sidebarListItem">
<Timeline className="sidebarIcon neon secondary"/>
<span className="name">Analytics</span>
                    </li>
                    <li className="sidebarListItem">
<TrendingUp className="sidebarIcon neon tertiary"/>
<span className="name">Sales</span>
                    </li>

                    <li className=" sidebarListItem active">
<Money className="sidebarIcon neon primary"/>
<span className="name">Point of Sale</span>
                    </li>
                    <li className="sidebarListItem">
<TrendingDown className="sidebarIcon neon secondary"/>
<span className="name">Trending Down</span>
                    </li>
                    <li className="sidebarListItem">
<Payment className="sidebarIcon neon tertiary"/>
<span className="name">Payment</span>
                    </li>

<li className=" sidebarListItem active">
<AccountBalance className="sidebarIcon neon primary"/>
<span className="name">Account Balance</span>
                    </li>
                    <li className="sidebarListItem">
<VerifiedUser className="sidebarIcon neon secondary"/>
<span className="name">Users</span>
                    </li>
                    <li className="sidebarListItem">
<Settings className="sidebarIcon neon tertiary"/>
<span className="name">Settings</span>
                    </li>




</ul>




    
               


               


               







</div>


        </div>
        
        
    </div>
  )
}
