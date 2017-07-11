const initialState = {
	credit: ''	
}

export default function seventhViewReducer(state=initialState, action) {
	switch(action.type) {
		case 'CHANGE_CREDIT_E':
			return Object.assign(
				{},
				state,
				{
					credit: action.payload
				}
			)
		case 'CHANGE_CREDIT_G':
			return Object.assign(
				{},
				state,
				{
					credit: action.payload
				}
			)
		case 'CHANGE_CREDIT_F':
			return Object.assign(
				{},
				state,
				{
					credit: action.payload
				}
			)
		case 'CHANGE_CREDIT_P':
			return Object.assign(
				{},
				state,
				{
					credit: action.payload
				}
			)
		default:
			return state;
	}
}

export function changeCreditEAction() {
	return {
		type: 'CHANGE_CREDIT_E',
		payload: 'Excellent'
	}
}

export function changeCreditGAction() {
	return {
		type: 'CHANGE_CREDIT_G',
		payload: 'Good'
	}
}

export function changeCreditFAction() {
	return {
		type: 'CHANGE_CREDIT_F',
		payload: 'Fair'
	}
}

export function changeCreditPAction() {
	return {
		type: 'CHANGE_CREDIT_P', 
		payload: 'Poor'
	}
}