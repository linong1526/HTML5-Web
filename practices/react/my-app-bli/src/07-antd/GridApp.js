import React, { Component } from 'react'
import { Col, Row } from 'antd';
const style = {
  background: '#0092ff',
  padding: '8px 0',
};
export default class GridApp extends Component {
  render() {
    return (
      <div>
        GridApp
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </div>
    )
  }
}
