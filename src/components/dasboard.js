import React, { useState, useEffect } from 'react';
import {Gauge} from '@ant-design/charts';
import { Switch ,Empty,Select,Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import {chartDataAction} from  "../store/actions/chart"
import { Row, Col } from 'antd';
import TableData from "./table";
import Charts from './charts';
import { SliderCustom } from './slider';
import Switches from './switchs';

const { Option } = Select;
function Test(props) {
  const [type,setType] = useState(false)
  const [Value,setValue]= useState("area")
  const [isempty, setIsEmpty]= useState(true)
useEffect(()=>{
  props.chart()
}, [])
function handleChangeSelect(value) {
  setValue(value)
}


function onChange(checked) {    
    setType(checked)
  }
  
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
    <Charts data={props.data} typeChart="column" autoFit={false} width={200} height={150} /> 
    </Col>
    <Col span={6} >

    <Charts data={props.data} typeChart="area" autoFit={false} width={200} height={150} /> 
  </Col>
  <Col span={6}>

  <Charts data={props.data} typeChart="line" autoFit={false} width={200} height={150} /> 
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
    
    <Charts data={props.data} typeChart={Value} />

  </Col>
  <Col span={7} offset={2}>
    <TableData />
  </Col>

  <Select defaultValue="area" style={{ width: 120 }} onChange={handleChangeSelect}>
      <Option value="line">Line</Option>
      <Option value="area">Area</Option>
      <Option value="column">Columns</Option>
    </Select>
  </Row>
    <br/><br/>
    <Row>
      <Col span={12} >
      <SliderCustom  />
      </Col>
      <Col span={5} offset={2}>
      <Switches  />
      </Col>
      
      
    </Row>
    <br/><br/>

    <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large">
          Download Log
        </Button>
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
  mapDispatchToProps)(Test);


