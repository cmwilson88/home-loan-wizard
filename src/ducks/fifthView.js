const initialState = {
	realEstateAgent: 'false'
}

export default function fifthViewReducer(state=initialState, action) {
	switch(action.type) {
		case 'CHANGE_AGENT_TRUE':
			return Object.assign(
				{},
				state,
				{
					realEstateAgent: action.payload
				}
			)
		case 'CHANGE_AGENT_FALSE':
			return Object.assign(
				{},
				state,
				{
					realEstateAgent: action.payload
				}
			)
		default: 
			return state;
	}
}

export function changeRealEstateAgentTrue() {
	return {
		type: 'CHANGE_AGENT_TRUE',
		payload: true
	}
}

export function changeRealEstateAgentFalse() {
	return {
		type: 'CHANGE_AGENT_FALSE',
		payload: false
	}
}