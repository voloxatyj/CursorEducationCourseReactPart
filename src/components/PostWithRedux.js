import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostReduxContainer } from '../layouts/postwithreduxstyle'
import moment from 'moment'
import { addLike, notLike, addComment, notComment, addShares, notShares } from '../redux/actions/userActions'
import { Link } from 'react-router-dom'

export const PostWithRedux = () => {
	const data = useSelector(state=>state.data)
	const dispatch = useDispatch()

	return(
			<>
			{data !== undefined &&
				data.map((item,index)=>
				<PostReduxContainer key={index} image={item.photo}>
					<div className="container">
						<div className="card">
							<div className="head">
								<img alt="avatar" src={item.avatar} className="image" />
								<div className="main">
									<div className="content">
										<h3 style={{marginBottom: "0"}}>{item.name}</h3>
										<svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="white" width="24px" height="24px" style={{ padding: ".1rem" }}><g><rect fill="none" height="24" width="24" /></g><g><path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M10.09,16.72l-3.8-3.81l1.48-1.48l2.32,2.33 l5.85-5.87l1.48,1.48L10.09,16.72z" /></g></svg>
										<span>{item.nickname} · {moment(item.date).fromNow()}</span>
									</div>
									<div className="text">
										<h2 style={{ padding: ".2rem", color: "white", fontSize: '.9rem', fontWeight: 'normal' }}>{item.content}</h2>
									</div>
								</div>
								<Link to='/modal'>
									<i className="far fa-plus-square fa-2x" 
										onClick={() => dispatch({type: 'GET_MODAL'})}
										style={{border: "50px", color: "white", cursor: "pointer"}}></i>
								</Link>
							</div>
							<div className="others">
								<div className="icons">
										<i className="far fa-comment fa-2x" 
											onClick={() => dispatch(addComment(item.name))}
											onDoubleClick={() => dispatch(notComment(item.name))}></i>
									<h5 style={{ marginLeft: '1rem' }}>{item.comments}</h5>
								</div>
								<div className="icons">
										<i className="fas fa-share-alt fa-2x"
											onClick={() => dispatch(addShares(item.name))}
											onDoubleClick={() => dispatch(notShares(item.name))}></i>
									<h5 style={{ marginLeft: '1rem' }}>{item.shares}</h5>
								</div>
								<div className="icons">
										<i className="far fa-heart fa-2x"
											onClick={() => dispatch(addLike(item.name))}
											onDoubleClick={() => dispatch(notLike(item.name))}></i>
									<h5 style={{ marginLeft: '1rem' }}>{item.likes}</h5>
								</div>
								<div className="icons">
									<i className="fas fa-cloud-upload-alt fa-2x"></i>
								</div>
							</div>
						</div>
					</div>
				</PostReduxContainer>
			)}
		</>
	)
}