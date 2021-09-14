import React, { useState, useEffect } from 'react';
import { Area , Line ,Liquid,Column,Gauge} from '@ant-design/charts';
import { Switch ,Empty,Select} from 'antd';
import { connect } from 'react-redux';
import {chartDataAction} from  "../store/actions/chart"
import { Row, Col } from 'antd';
import TableData from "./table";


const { Option } = Select;
function Dashboard3(props) {
  const [type,setType] = useState(false)
  const [Value,setValue]= useState()
  const [isempty, setIsEmpty]= useState(true)
useEffect(()=>{
  props.chart()
  console.log(("helllooooo"));
  document.title="Dashboard3"

}, [])
function handleChangeSelect(value) {
  console.log(`selected ${value}`);

  setValue(value)
}


  function onChange(checked) {
    
    setType(checked)
    
  }
  console.log(props.data);
  var config = {
    data: props.data,
    xField: 'year',
    yField: 'value',
    
    xAxis: {
      range: [0, 1],
      
    },
    
    smooth: true,
    theme: 'light',
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };
  var config1 = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  var config2 = {
    percent: 0.75,
    
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    axis: {
      label: {
        formatter: function formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: { count: 3 },
    },
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return 'Rate: '.concat((percent * 100).toFixed(0), '%');
        },
        style: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 12,
        },
      },
    },
  };
  return (
  <div>
    <Row>
    <Col span={6}>
    <Column {...config} autoFit={false} width={200} height={150} /> 
    </Col>
    <Col span={6} >

  <Area {...config} autoFit={false} width={200} height={150} /> 
  </Col>
  <Col span={6}>

  <Line {...config} autoFit={false} width={200} height={150} />
  </Col>
  <Col span={6}>
  <Gauge {...config2} autoFit={true} width={200} height={150} />

  </Col>


  </Row>
  <br/>
  <br/>
  <br/>


    <Row>
    <Col span={15} >
    
    <Area {...config}  /> 


  </Col>
  <Col span={7} offset={2}>
    <TableData />
  </Col>

  <Select defaultValue="area" style={{ width: 120 }} onChange={handleChangeSelect}>
      <Option value="line">Line</Option>
      <Option value="area">Area</Option>
      
      <Option value="columns">Columns</Option>
    </Select>
  </Row>

  </div>
  );
};


const mapStateToProps = state => {
  return{
    data: state.chart.data
  }
}
const mapDispatchToProps = dispatch =>
{
  return {
    chart: () => dispatch(chartDataAction())
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps)(Dashboard3);


