const initialState = {
	found: 'false'
}

export default function fourthViewReducer(state=initialState, action) {
	switch(action.type) {
		case 'CHANGE_FOUND_TRUE':
			return Object.assign(
				{},
				state,
				{
					found: action.payload
				}
			)
		case 'CHANGE_FOUND_FALSE':
			return Object.assign(
				{},
				state,
				{
					found: action.payload
				}
			)
		default: 
			return state;
	}
}

export function changeFoundTrueAction() {
	return {
		type: 'CHANGE_FOUND_TRUE',
		payload: true
	}
}

export function changeFoundFalseAction() {
	return {
		type: 'CHANGE_FOUND_FALSE',
		payload: false
	}
}