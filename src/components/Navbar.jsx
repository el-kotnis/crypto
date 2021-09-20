import React from 'react'
import {Button,Menu,Typography,Avatar} from 'antd'
import {Link} from 'react-router-dom'
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutLined, MenuOutlined} from '@ant-design/icons/lib/icons'
import icon from '../images/cryptologo.png'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">Kryptosphere</Link>
                </Typography.Title>
                {/* <Button className="menu-control-container">

                </Button>*/}
            </div>
        </div>
    )
}

export default Navbar
