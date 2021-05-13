import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Account extends Component {

    state = { buy: 0, sell: 0 }
    
    handleBuy = evt => {
        axios.post('/trade', { buy: this.state.buy });
        this.setState({ buy: 0 });
    }

    handleSell = evt => {
        axios.post('/trade', { sell: this.state.sell });
        this.setState({ sell: 0 });
    }

    handleChange = evt => {
        this.setState({[evt.target.name]: evt.target.value})
    }
    
    render() {
        
    const { cash = 0, shares = 0, pricePerShare = 0 } = this.props;
    
    return (
        <>
        <div className="row w-75 m-auto">
            <span className="d-block w-100 h2 text-dark col-sm mt-3 border-gray">
                <div className="row ml-2 mt-2 border-bottom border-gray">
                    <div className="col-6 border-right border-gray">Cash</div>
                    <div className="col-6">${Number(cash).toFixed(2)}</div>
                </div>
                <div className="row ml-2 mt-2 border-bottom border-gray">
                    <div className="col-6 border-right border-gray">Shares</div>
                    <div className="col-6">{Number(shares).toFixed(0)} (${(Number(shares)*pricePerShare).toFixed(2)})</div>
                </div>
                <div className="row ml-2 mt-2 border-bottom border-gray">
                    <div className="col-6 border-right border-gray">Total Value</div>
                    <div className="col-6">${(Number(cash)+Number(shares)*pricePerShare).toFixed(2)}</div>
                </div>
                <div className="row ml-2 mt-2 border-gray">
                    <div className="col-6 border-right border-gray">Change</div>
                    <div className="col-6">{Number(((Number(cash)+Number(shares)*pricePerShare).toFixed(2))/10000*100-100).toFixed(0)}%</div>
                </div>
            </span>

            <span className="d-block w-100 h2 text-dark col-sm mt-3 border-gray">
                <div className="row ml-2 mt-2 border-bottom border-gray">
                    <div className="col-6 border-right border-gray">
                        <input type="number" className={`btn btn-primary text-uppercase mb-2 w-100`} name="buy" value={this.state.buy} onChange={this.handleChange} />
                    </div>
                    <div className="col-6">
                        <button type="button" className={`btn btn-primary text-uppercase mb-2 w-100`} disabled={this.state.buy <= 0 || this.state.buy * pricePerShare > cash} onClick={this.handleBuy}>Buy</button>
                        {/*<span className="buy-sell-info">
                            @ ${Number(pricePerShare).toFixed(2)}<br/>
                            For ${(Number(pricePerShare)*this.state.buy).toFixed(2)}
                        </span>*/}
                    </div>
                </div>
                <div className="row ml-2 mt-2">
                    <div className="col-6 border-right border-gray">
                        <input type="number" className={`btn btn-primary text-uppercase mb-2 w-100`} name="sell" value={this.state.sell} onChange={this.handleChange} />
                    </div>
                    <div className="col-6">
                        <button type="button" className={`btn btn-primary text-uppercase mb-2 w-100`} disabled={this.state.sell <= 0 || this.state.sell > shares} onClick={this.handleSell}>Sell</button>
                        {/*<span className="buy-sell-info">
                            @ ${Number(pricePerShare).toFixed(2)}<br/>
                            For ${(Number(pricePerShare)*this.state.sell).toFixed(2)}
                        </span>*/}
                    </div>
                </div>
            </span>
        </div>
        
        </>
    );
    }
    
}

export default Account;