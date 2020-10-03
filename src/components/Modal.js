import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import { Link, useHistory } from 'react-router-dom'
import { addPost } from '../redux/actions/userActions'

export const Modal = () => {
	const [name, setName] = useState('')
	const [nickname, setNickname] = useState('')
	const [content, setContent] = useState('')
	const history = useHistory()
	const modal = useSelector(state=>state.ui.modal)
	const dispatch = useDispatch()
	const date = moment().format("YYYY-MM-DD")
	const avatar = "https://cdn.pixabay.com/photo/2015/04/12/13/09/nursery-718788__340.jpg"
	const photo = "https://cdn.pixabay.com/photo/2018/11/30/09/44/post-it-3847390__340.jpg"
	console.log('modal: ', modal);

	return(
		<>
		{modal &&
		<div className="container">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Add Post</h5>
						<Link to="/redux">
							<button type="button"
								className="close" 
								data-dismiss="modal" 
								aria-label="Close"
								onClick={()=> {
									dispatch({ type: 'CLOSE_MODAL'})
									history.push('/redux')
								}}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</Link>
					</div>
					<form>
						<div className="modal-body">
							<div className="form-group">
								<label htmlFor="exampleInputName">Name</label>
								<input value={name} type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputNickname">Nickname</label>
								<input value={nickname} type="text" onChange={(e)=>setNickname(e.target.value)} className="form-control" id="exampleInputNickname"/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputContent">Content</label>
								<input value={content} type="text" onChange={(e) => setContent(e.target.value)} className="form-control" id="exampleInputContent" />
							</div>
						</div>
						<div className="modal-footer">
							<button 
								type="button" 
								className="btn btn-secondary" 
								data-dismiss="modal"
								onClick={() => {
									dispatch({ type: 'CLOSE_MODAL' })
									history.push('/redux')
								}}
								>Close</button>
							<button
							 	type="button"
							 	className="btn btn-primary"
									onClick={() => {
										dispatch(addPost({ photo, name, avatar, nickname, date, content}))
										history.push('/redux')
									}}
							 	>Save changes</button>
						</div>
					</form>
				</div>
			</div>
		</div>
		}
	</>
	)
}