import React, { useState, useEffect } from 'react';
import { Area , Line } from '@ant-design/charts';
import { Switch ,Empty} from 'antd';
import { connect } from 'react-redux';
import {chartDataAction} from  "../store/actions/chart"
function Test(props) {
  const [type,setType] = useState(false)
  const [data,setData]= useState([])
  const [isempty, setIsEmpty]= useState(true)
useEffect(()=>{
  props.chart()
  console.log(props.data);
  setData(props.data)
  console.log(data);
  data.length == 0 ? null : setIsEmpty(false)
})

  function onChange(checked) {
    
    setType(checked)
    
  }
  console.log(props.data);
  var config = {
    data: data,
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
  return (
  <div>
  { isempty? <Empty/> :
  type ? <Area {...config} /> : <Line {...config} />}
  
  <Switch  onChange={onChange} checkedChildren="Area" unCheckedChildren="Line" />
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


