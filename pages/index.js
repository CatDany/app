import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import Layout from '../components/Layout';
import Account from '../components/Account';
import Chart from '../components/Chart';
import 'typeface-roboto';

class IndexPage extends Component {

  state = { prices: [], days: [], cash: 0, shares: 0, pricePerShare: 0 }
      
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
        <main className="container-fluid position-absolute h-100 bg-light">
          <div className="position-absolute w-100 h-100">
            <div className="position-relative row h-50 w-100 d-flex align-items-center border-bottom border-gray">
              <Chart prices={this.state.prices} days={this.state.days} />
            </div>
            <div className="position-relative row w-100 align-items-center">
                <Account cash={this.state.cash} shares={this.state.shares} pricePerShare={this.state.pricePerShare} />
            </div>
          </div>
        </main>
      </Layout>
    );
  }
  
}

export default IndexPage;