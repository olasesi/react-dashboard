import './featuresinfo.css';
import { ArrowDownward,ArrowUpward, Loyalty, VerifiedUserTwoTone, Receipt } from '@material-ui/icons';


export default function Featuresinfo() {
  return (
    <div className="featuresinfo">


<div className="infowrapper primary-box">
  <div className="content-left">
    <div className="heading">SALES</div>
    <div className="price">$10,000</div>
    <div className="container-change"><span className="change">-1.5%</span><ArrowDownward/></div>
    <div className="extra-text">(30 days)</div>
  </div>
  <div className="content-right">
    <div className=''><Loyalty className="icon-general neon icon-primary"/></div>
  </div>
</div>

<div className="infowrapper secondary-box">
  <div className="content-left">
    <div className="heading">Customers</div>
    <div className="price">$150,000</div>
    <div className="container-change"><span className="change positive">+1.5%</span><ArrowUpward/></div>
    <div className="extra-text">(30 days)</div>
  </div>
  <div className="content-right">
    <div className=''><VerifiedUserTwoTone className="icon-general neon icon-secondary"/></div>
  </div>
</div>

<div className="infowrapper tertiary-box">
  <div className="content-left">
    <div className="heading">Orders</div>
    <div className="price">$10,000</div>
    <div className="container-change"><span className="change">-1.5%</span><ArrowDownward/></div>
    <div className="extra-text">(30 days)</div>
  </div>
  <div className="content-right">
    <div><Receipt className="icon-general neon icon-tertiary"/></div>
  </div>
</div>





    </div>
  )
}
