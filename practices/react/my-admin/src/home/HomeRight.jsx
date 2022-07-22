import {Component} from 'react'
import { Button, Col, Row, Statistic } from 'antd';
import {getUserNum,getProNum} from '../request'
 
class HomeRight extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        // 发送请求获取用户总数量
        getUserNum().then(res => {
            // console.log(res);
            this.setState(state => {
                return {
                    ...state,
                    userNum: res.data
                }
            })
        })

        // 发送请求获取商品总数量
        getProNum().then(res => {
            this.setState(state => {
                return {
                    ...state,
                    proNum: res.data
                }
            })
        })
    }
    render() {
        return (
            <Row gutter={16}>
                <Col span={12}>
                <Statistic title="用户总数量" value={this.state.userNum} />
                </Col>
                <Col span={12}>
                <Statistic title="商品总数量" value={this.state.proNum} />
                </Col>
            </Row>
        )
    }
}

export default HomeRight