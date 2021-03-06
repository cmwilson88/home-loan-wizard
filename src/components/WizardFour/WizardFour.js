import React,  { Component } from 'react';
import {connect} from 'react-redux';
import {changeFoundTrueAction, changeFoundFalseAction} from '../../ducks/fourthView';
import { Link } from 'react-router-dom';

class WizardFour extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">            
                    <p>Have you already found your new home?</p> <br />
                    
                    <div className="row">
                        <Link to="/wFive"><button onClick={() => this.props.foundTrue()}>Yes</button></Link>
                        <Link to="/wFive"><button onClick={() => this.props.foundFalse()}>No </button></Link>  
                    </div>         
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        found: state.found
    }
}

export default connect(
    mapStateToProps,
    {
        foundTrue: changeFoundTrueAction,
        foundFalse: changeFoundFalseAction
    }
)(WizardFour);