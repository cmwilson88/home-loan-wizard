const initialState = {
  addressOne: '',
  addressTwo: '',
  addressThree: '',
}

export default function ninthViewReducer(state=initialState, action) {
	switch(action.type) {
		case 'ADDRESS_ONE':
			return Object.assign(
				{},
				state,
				{
					addressOne: action.payload
				}
			)
		case 'ADDRESS_TWO':
			return Object.assign(
				{},
				state,
				{
					addressTwo: action.payload
				}
			)
		case 'ADDRESS_THREE':
			return Object.assign(
				{},
				state,
				{
					addressThree: action.payload
				}
			)
		default:
			return state
	}
}

export function addressOneAction(str) {
	return {
		type: 'ADDRESS_ONE',
		payload: str
	}
}

export function addressTwoAction(str) {
	return {
		type: 'ADDRESS_TWO',
		payload: str
	}
}

export function addressThreeAction(str) {
	return {
		type: 'ADDRESS_THREE',
		payload: str
	}
}