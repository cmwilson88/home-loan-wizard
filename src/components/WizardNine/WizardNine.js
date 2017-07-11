import React,  { Component } from 'react';
import {connect} from 'react-redux';
import {addressOneAction,
        addressTwoAction,
        addressThreeAction} from '../../ducks/ninthView';
import { Link } from 'react-router-dom';

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(e) => this.props.updateAddLineOne(e.target.value)}/>
                    <input type="text" placeholder="Line Two" onChange={(e) => this.props.updateAddLineTwo(e.target.value)}/>
                    <input type="text" placeholder="Line Three" onChange={(e) => this.props.updateAddLineThree(e.target.value)}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        addressOne: state.addressOne,
        addressTwo: state.addressTwo,
        addressThree: state.addressThree
    }
}

export default connect(
    mapStateToProps,
    {
        updateAddLineOne: addressOneAction,
        updateAddLineTwo: addressTwoAction,
        updateAddLineThree: addressThreeAction
    }
)(WizardNine);