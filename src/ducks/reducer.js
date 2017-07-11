import {combineReducers} from 'redux';
import firstViewReducer from './firstView';
import secondViewReducer from './secondView';
import thirdViewReducer from './thirdView';
import fourthViewReducer from './fourthView';
import fifthViewReducer from './fifthView';
import sixthViewReducer from './sixthView';
import seventhViewReducer from './seventhView';
import eighthViewReducer from './eighthView';
import ninthViewReducer from './ninthView';
import tenthViewReducer from './tenthView';


// export const initialState = {
//    loanType: 'Home Purchase',
//    propertyType: 'Single Family Home',
//    city: '',
//    propToBeUsedOn: '',
//    found: false,
//    realEstateAgent: "false",
//    cost: 0,
//    downPayment: 0,
//    credit: '',
//    history: '',
//    addressOne: '',
//    addressTwo: '',
//    addressThree: '',
//    firstName: 'aa',
//    lastName: '',
//    email: ''
// }

var reducer = combineReducers({
	firstViewReducer,
	secondViewReducer,
	thirdViewReducer,
	fourthViewReducer,
	fifthViewReducer,
	sixthViewReducer,
	seventhViewReducer,
	eighthViewReducer,
	ninthViewReducer,
	tenthViewReducer
})





export default reducer