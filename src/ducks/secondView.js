const initialState = {
	city: ''
}

export default function secondViewReducer(state=initialState, action) {
	switch(action.type) {
		case 'CHANGE_CITY':
			console.log(action.payload) 
			return Object.assign(
				{},
				state,
				{
					city: action.payload
				}
			);
		default:
			return state;
	}
}

export function changeCityAction(city) {
	return {
		type: 'CHANGE_CITY',
		payload: city
	}
}