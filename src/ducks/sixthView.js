const initialState = {
	downPayment: 0,
	cost: 0
}

export default function sixthViewReducer(state=initialState, action) {
	switch(action.type) {
		case 'UPDATE_DOWN_PAYMENT':
			return Object.assign(
				{},
				state,
				{
					downPayment: action.payload
				}
			)
		case 'UPDATE_COST':
			return Object.assign(
				{},
				state,
				{
					cost: action.payload
				}
			)
		default:
			return state;
	}
}

export function updateDownPaymentAction(num) {
	return {
		type: 'UPDATE_DOWN_PAYMENT',
		payload: num
	}
}

export function updateCostAction(num) {
	return {
		type: 'UPDATE_COST',
		payload: num
	}
}