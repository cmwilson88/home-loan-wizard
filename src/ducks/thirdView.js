const initialState = {
	propToBeUsedOn: '',	
}

export default function thirdViewReducer(state=initialState, action) {
	switch(action.type) {
		case 'CHANGE_PROPERTY_TO_BE_USED':
			return Object.assign(
				{},
				state,
				{
					propToBeUsedOn: action.payload
				}
			)
		default: 
			return state;
	}
}

export function changePropertyToBeUsedOnAction(str) {
	return {
		type: 'CHANGE_PROPERTY_TO_BE_USED',
		payload: str
		
	}
}