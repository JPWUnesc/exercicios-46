import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Investment.css';

export default class Investment extends Component {

  state = {
    investment: 1,
    months: 1,
    value: 1
  }

  constructor(props){
    super(props);
    this.changeInvestment = this.changeInvestment.bind(this);
    this.changeMonth = this.changeMonth.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  changeInvestment(event) {
    let value = event.target.value;
    if(value <= 0){
      value = 1;
    }

    let total = this.state.months * value;

    this.setState({investment: Number(value), value: Number(total)});
  }

  changeMonth(event) {
    let value = event.target.value;
    if(value <= 0){
      value = 1;
    }

    let total = value * this.state.investment;

    this.setState({months: Number(value), value: Number(total)});
  }

  changeValue(event) {
    let value = event.target.value;
    if(value <= 0){
      value = 1;
    }

    let investment = value / this.state.months;

    this.setState({value: Number(value), investment: Number(investment)});
  }

  render() {
    return (
      <Container>
        <Row className='main-row'>
          <Col>
            <Row> 
              <label htmlFor="investment">Investimento</label>
              <input type="number" value={this.state.investment} onChange={this.changeInvestment} className="form-control" id="investment" placeholder="1000"></input>
            </Row>
            <Row>
              <label htmlFor="month">Meses</label>
              <input type="number" value={this.state.months}  onChange={this.changeMonth} className="form-control" id="month" placeholder="1000"></input>              
            </Row>
            <Row>
              <label htmlFor="value">Valor</label>
              <input type="number" value={this.state.value}  onChange={this.changeValue} className="form-control" id="value" placeholder="1000"></input>                  
            </Row>
          </Col>
        </Row>        
      </Container>
    );
  }
}
