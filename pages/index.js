import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import Layout from '../components/Layout';
import Account from '../components/Account';
import Chart from '../components/Chart';
import 'typeface-roboto';

class IndexPage extends Component {

  state = { prices: [], days: [], cash: 0, shares: 0, pricePerShare: 0, buysell: 0 }
    
  handleBuy = evt => {
      axios.post('/trade', { buy: this.state.buysell });
      this.setState({ buysell: 0 });
  }

  handleSell = evt => {
      axios.post('/trade', { sell: this.state.buysell });
      this.setState({ buysell: 0 });
  }

  handleChange = evt => {
      this.setState({buysell: evt.target.value})
  }
      
  componentDidMount() {
  
    this.pusher = new Pusher(process.env.PUSHER_APP_KEY, {
      cluster: process.env.PUSHER_APP_CLUSTER,
      encrypted: true
    });
    
    this.channel = this.pusher.subscribe('trading');
    
    this.channel.bind('new-price', ({ pricePerShare }) => {
      const prices = [...this.state.prices, pricePerShare];
      const days = [...this.state.days, prices.length];
      this.setState({ prices, days, pricePerShare});
    });

    this.channel.bind('update-account', ({ cash, shares }) => {
      this.setState({ cash, shares });
    });
    
    this.pusher.connection.bind('connected', () => {
      axios.post('/load')
        .then(response => {
          const prices = response.data.prices;
          const cash = response.data.cash;
          const shares = response.data.shares;
          const pricePerShare = response.data.pricePerShare;
          let days = [];
          for (let i = 1; i <= prices.length; i++)
            days = [...days, i];
          this.setState({ prices, days, cash, shares, pricePerShare });
        });
    });
    
  }
  
  componentWillUnmount() {
    this.pusher.disconnect();
  }
  
  render() {
    return (
      <Layout pageTitle="Realtime Data Visualization">
        <div id="sliderFade" className="carousel slide carousel-fade" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#sliderFade" data-slide-to="0" className="active"></li>
            <li data-target="#sliderFade" data-slide-to="1"></li>
            <li data-target="#sliderFade" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" >
            <div className="carousel-item active" style={{height: '100vh'}}>
              <img src="img/slider/bg1.jpg" className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h1>TEXT TEXT TEXT</h1>
                <p>text text text text</p>
                <a href="#" className="button">
                  <span className="button__line button__line--top"></span>
                  <span className="button__line button__line--right"></span>
                  <span className="button__line button__line--bottom"></span>
                  <span className="button__line button__line--left"></span>
                  Начать
                </a>
              </div>
              <h2></h2>
            </div>
            <div className="carousel-item" style={{height: '100vh'}}>
              <img src="img/slider/bg2.jpg" className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h1>TEXT TEXT TEXT222</h1>
                <p>text text text text</p>
              </div>
            </div>
            <div className="carousel-item" style={{height: '100vh'}}>
              <img src="img/slider/bg3.jpg" className="d-block w-100" />
              <div className="carousel-caption d-none d-md-block">
                <h1>TEXT TEXT TEXT333</h1>
                <p>text text text text</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#sliderFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#sliderFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="wrapper">
          <div className="menu" style={{backgroundColor: '#686362'}}>
            <a href="#" className="menu-btn">
              <span></span>
            </a>
            <nav className="menu-list">
            </nav>
          </div>
          <div className="content" >
            <section className="main" style={{'background-image': 'url(cvetnye-linii.jpg)'}}>
              <div className="container" style={{backgroundColor: '#0d166c', zIndex: 0}}>
                <Chart prices={this.state.prices} days={this.state.days}></Chart>
                <div className="group">
                  <input type="number" value={this.state.buysell} onChange={this.handleChange} style={{maxWidth: '2em'}} required />
                  <span className="bar"></span>
                  <label>Кол-во</label>
                </div>
                <input value={this.state.buysell} onChange={this.handleChange} name="buysell" type="range" style={{top: '75.5%', left: '9%', maxWidth: '85%', position: 'absolute'}} />
                <div className="container1">
                  <button type="button" className="btn-bue" onClick={this.handleBuy}>КУПИТЬ</button>
                </div>
                <div className="container2">
                  <button type="button" className="btn-sell" onClick={this.handleSell}>ПРОДАТЬ</button>
                </div>
              </div>
            </section>
          </div>
          <div className="menu2" style={{backgroundColor: '#686362', textAlign: 'center', fontSize: '18px', fontFamily: 'Impact, fantasy', color: '#ff8400'}}>
            <a href="#" className="menu-btn2">
              <span></span>
            </a>
            <div className="container" style={{position: 'absolute', top: 0, width: '100%', height: '10%'}}>Профиль:
              <hr/>
            </div>
            <div className="container" style={{borderBottomWidth: '4px', borderBottomColor: '#27ae60', position: 'absolute', top:'10%', width: '100%', height: '10%'}}>Баланс: ${Number(this.state.cash).toFixed(2)}
              <hr/>
            </div>
            <div className="container" style={{position: 'absolute', top: '20%', width: '100%', height: '10%'}}>В акциях: ${(Number(this.state.shares)*this.state.pricePerShare).toFixed(2)}
              <hr/>
            </div>
            <div className="container" style={{position: 'absolute', top: '30%', width: '100%', height: '60%'}}>История:</div>
            <div className="container" style={{position: 'absolute', top: '90%', width: '110%', height: '10%', textAlign: 'center'}}>
              <button type="button" className="btn-exit btn-lg">ВЫХОД</button>
            </div>
          </div>
        </div>
        <script src="js/script.js"></script>
      </Layout>
    );
  }
  
}

export default IndexPage;