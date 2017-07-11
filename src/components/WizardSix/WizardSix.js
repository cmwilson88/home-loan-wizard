import React,  { Component } from 'react';
import {connect} from 'react-redux';
import {updateDownPaymentAction, updateCostAction} from '../../ducks/sixthView';
import { Link } from 'react-router-dom';

class WizardSix extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={(e) => this.props.updateCost(e.target.value)}/> <br />


                    <p>How much are you putting down as a down payment?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={(e) => this.props.updateDownPayment(e.target.value)}/>                    
                        
                    
                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        downPayment: state.downPayment,
        cost: state.cost
    }
}

export default connect(
    mapStateToProps,
    {
        updateDownPayment: updateDownPaymentAction,
        updateCost: updateCostAction
    }
)(WizardSix);