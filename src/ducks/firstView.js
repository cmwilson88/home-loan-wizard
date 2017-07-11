const initialState = {
	//first view
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home'
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE'

export default function firstViewReducer(state=initialState, action) {
	switch(action.type) {
		case UPDATE_LOAN_TYPE:
			return Object.assign(
				{},
				state,
				{
					loanType: action.payload
				}
			);
		case  UPDATE_PROPERTY_TYPE:
			return Object.assign(
				{},
				state,
				{
					propertyType: action.payload
				}
			);
		default:
			return state;
	}
}


export function changeLoanTypeAction(str) {
	return {
		type: UPDATE_LOAN_TYPE,
		payload: str
	}
}

export function changePropertyTypeAction(str) {
	return {
		type: UPDATE_PROPERTY_TYPE,
		payload: str
	}
}

