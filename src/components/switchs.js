import React from 'react'
import { connect } from 'react-redux'
import { Switch ,message} from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export const Switches = (props) => {
    const [Checked, setChecked] = React.useState(true)
    function onChange(){
        setChecked(!Checked)
        Checked ? message.info("decive turned off"):message.info("decive turned on")
    }
    return (
        <div>
            <h4>Turn on/off</h4>
         <Switch
         onChange={onChange}
         checked={Checked}
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked
    />   
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Switches)
