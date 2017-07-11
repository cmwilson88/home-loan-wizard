import React,  { Component } from 'react';
import {connect} from 'react-redux';
import {changeCreditEAction, 
        changeCreditGAction,
        changeCreditFAction,
        changeCreditPAction} from '../../ducks/seventhView';
import { Link } from 'react-router-dom';

class WizardSeven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCreditE(e.target.value)}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCreditG(e.target.value)}>Good</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCreditF(e.target.value)}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={(e) => this.props.updateCreditP(e.target.value)}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        credit: state.credit
    }
}

export default connect(
    mapStateToProps,
    {
        updateCreditE: changeCreditEAction,
        updateCreditG: changeCreditGAction,
        updateCreditF: changeCreditFAction,
        updateCreditP: changeCreditPAction
    }
)(WizardSeven);