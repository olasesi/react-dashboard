import React from 'react';
import './home.css';
import Featuresinfo from '../../components/featuresinfo/Featuresinfo';
import Chart from '../../components/chart/Chart';
import  {userData} from '../../dummyData';
import Smallwidget from '../../components/smallwidget/Smallwidget';
import Largewidget from '../../components/largewidget/Largewidget';

export default function Home() {
  return (
    <div className="home">
    <Featuresinfo/>
    <Chart data={userData} title="User analytics" grid dataKey="Active user"/>
    <div className="widgetcontainer">
      <Smallwidget/>
      <Largewidget/>
    </div>
    </div>
  )
}
