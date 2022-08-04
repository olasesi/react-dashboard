import React from 'react'
import './largewidget.css';

export default function Largewidget() {

  const Button = ({type}) => {
return(

  <button className={"widgetbuttonlg " + type}>{type}</button>
)


  }

  return (
    <div className="widgetlargewrapper wrapper-chart">
      <div className="heading">Latest Transaction</div>

<table className="table">
<tr className="table-row-td">
  <th className="table-head-td">Customer</th>
  <th className="table-head-td">Date</th>
  <th className="table-head-td">Amount</th>
  <th className="table-head-td">Status</th>

</tr>

<tr>
<td className="table-image-container">
<img className="table-image" src="https://media-s3-us-east-1.ceros.com/forbes/images/2021/12/06/bbff530cddcb7ed1b79ecee931f9f854/artboard-2-copy-6.jpg" alt=""/>
<span>Olusesi Ahmed</span>
</td>
<td>12 Jun 2021</td>
<td>$20,000</td>
<td><Button type="Approved"/></td>
</tr>

<tr>
<td className="table-image-container">
<img className="table-image" src="https://media-s3-us-east-1.ceros.com/forbes/images/2021/12/06/bbff530cddcb7ed1b79ecee931f9f854/artboard-2-copy-6.jpg" alt=""/>
<span>Olusesi Ahmed</span>
</td>
<td>12 Jun 2021</td>
<td>$20,000</td>
<td><Button type="Declined"/></td>
</tr>

<tr>
<td className="table-image-container">
<img className="table-image" src="https://media-s3-us-east-1.ceros.com/forbes/images/2021/12/06/bbff530cddcb7ed1b79ecee931f9f854/artboard-2-copy-6.jpg" alt=""/>
<span>Olusesi Ahmed</span>
</td>
<td>12 Jun 2021</td>
<td>$20,000</td>
<td><Button type="Pending"/></td>
</tr>

<tr>
<td className="table-image-container">
<img className="table-image" src="https://media-s3-us-east-1.ceros.com/forbes/images/2021/12/06/bbff530cddcb7ed1b79ecee931f9f854/artboard-2-copy-6.jpg" alt=""/>
<span>Olusesi Ahmed</span>
</td>
<td>12 Jun 2021</td>
<td>$20,000</td>
<td><Button type="Pending"/></td>
</tr>
</table>
    </div>
  )
}
