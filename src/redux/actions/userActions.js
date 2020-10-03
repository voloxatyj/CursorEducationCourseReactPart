export const addComment = (name) => dispatch => {
	dispatch({
		type: 'COMMENTS',
		payload: name
	})
}
export const notComment = (name) => dispatch => {
	dispatch({
		type: 'NOT_COMMENTS',
		payload: name
	})
}
export const addShares = (name) => dispatch => {
	dispatch({
		type: 'SHARES',
		payload: name
	})
}
export const notShares = (name) => dispatch => {
	dispatch({
		type: 'NOT_SHARES',
		payload: name
	})
}
export const addLike = (name) => dispatch => {
	dispatch({
		type: 'LIKES',
		payload: name
	})
}
export const notLike = (name) => dispatch => {
	dispatch({
		type: 'NOT_LIKES',
		payload: name
	})
}
export const addPost = (data) => dispatch => {
	console.log('data: ', data);
	dispatch({
		type: 'ADD_POST',
		payload: {
			...data,
			comments: 0,
			likes: 0,
			shares: 0
		}
	})
}