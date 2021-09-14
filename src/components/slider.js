import React from 'react'
import { connect } from 'react-redux'
import { Slider , InputNumber, Row, Col,message} from 'antd';

export const SliderCustom = (props) => {
  const [Value, setValue] = React.useState(0) 

  const marks = {
    0: '0',
    50:'50',
    100: {
      style: {
        color: 'cyan',
      },
      label: <strong>100</strong>,
    },
  };
    function onChange(value) {
        setValue(value)

      }
      
      function onAfterChange(value) {
        console.log('onAfterChange: ', value);
        setValue(value)
        message.info(`value selected ${value}`)
      }

    return (
        <div>
               
               <Row>
        <Col span={20}>
        <h4>Slider</h4>

          <Slider
            min={1}
            max={100}
            marks={marks}
            onChange={onChange}
            onAfterChange={onAfterChange}

            value={typeof Value === 'number' ? Value : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={100}
            style={{ margin: '0 16px' }}
            value={Value}
            onChange={onChange}
          />
        </Col>
      </Row>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderCustom)
