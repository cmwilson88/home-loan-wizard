const initialState = {
  firstName: '',
  lastName: '',
  email: ''
}

export default function tenthViewReducer(state=initialState, action) {
	switch(action.type) {
		case 'CHANGE_FIRST_NAME':
			return Object.assign(
				{},
				state,
				{
					firstName: action.payload
				}
			)
		case 'CHANGE_LAST_NAME':
			return Object.assign(
				{},
				state,
				{
					lastName: action.payload
				}
			)
		case 'CHANGE_EMAIL':
			return Object.assign(
				{},
				state,
				{
					email: action.payload
				}
			)
		default:
			return state;
	}
}

export function changeFirstName(str) {
	return {
		type: 'CHANGE_FIRST_NAME',
		payload: str
	}
}

export function changeLastName(str) {
	return {
		type: 'CHANGE_LAST_NAME',
		payload: str
	}
}

export function changeEmail(str) {
	return {
		type: 'CHANGE_EMAIL',
		payload: str
	}
}