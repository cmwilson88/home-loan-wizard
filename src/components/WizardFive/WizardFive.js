import React,  { Component } from 'react';
import {connect} from 'react-redux';
import {changeRealEstateAgentTrue, changeRealEstateAgentFalse} from '../../ducks/fifthView';
import { Link } from 'react-router-dom';

class WizardFive extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">    

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={() => this.props.realEstateAgentTrue()}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={() => this.props.realEstateAgentFalse()}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        realEstateAgent: state.realEstateAgent
    }
}

export default connect(
    mapStateToProps,
    {
        realEstateAgentTrue: changeRealEstateAgentTrue,
        realEstateAgentFalse: changeRealEstateAgentFalse
    }
)(WizardFive);