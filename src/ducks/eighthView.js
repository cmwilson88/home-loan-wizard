const initialState = {
	history: ''
}

export default function eighthViewReducer(state=initialState, action) {
	switch(action.type)  {
		case 'UPDATE_HISTORY':
			return Object.assign(
				{},
				state,
				{
					history: action.payload
				}
			)
		default: 
			return state
	}
}

export function updateHistoryAction(str) {
	return {
		type: 'UPDATE_HISTORY',
		payload: str
	}
}