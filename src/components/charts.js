import React from 'react'
import { connect } from 'react-redux'
import { Area , Line ,Liquid,Column,Gauge} from '@ant-design/charts';

export const Charts = (props) => {
  
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
    switch (props.typeChart) {
        case "line":
            return (
                <div>
                    <Line {...config} autoFit={props.autoFit} width={props.width} height={props.height} />
  
                </div>
            )
            break;
        case "column":
            return (
                <div>
                    <Column {...config} autoFit={props.autoFit} width={props.width} height={props.height} /> 
                </div>
            )
        break;
        case "area":
            return (
                <div>
                   <Area {...config} autoFit={props.autoFit} width={props.width} height={props.height} />  
                </div>
            )
        break;

        default:
            return (
                <div>
                    
                </div>
            )
            break;
    }
    
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts)
