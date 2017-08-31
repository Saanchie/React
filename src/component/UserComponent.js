import React,{Component} from 'react'
import UserStore from '../store/UserStore';
import * as UserAction from '../action/UserActions';

class UserComponent extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			users:UserStore.getUsers()
		}
		console.log(this.state.users);
		this.reloadUser=this.reloadUser.bind(this);
		this.uploadUser=this.uploadUser.bind(this);
	}
	reloadUser()
	{
		UserAction.refreshUsers();
	}
	uploadUser()
	{
		this.setState({
			users:UserStore.getUsers()
		})
	}
	deleteUser()
	{
		UserAction.deleteUser(this.refs.uName.value);	
	}
	componentDidMount()
	{
		UserStore.on('userUpdate', this.uploadUser)
	}
	render(){
		const users=this.state.users;
		console.log(users);
		var li= users.map((user,index)=>
			<li key={index}>{user.name}</li>
		);
		return (
			<div>
				<h3>User Details</h3>
				<ul>
					{li}
				</ul>
				<input type="text" ref="uName"/>
				<br/><br/>
				<button onClick={this.deleteUser.bind(this)}>Delete</button>
				<br/><br/>
				<button onClick={this.reloadUser}>Reload</button>
			</div>
		)
	}
}
export default UserComponent;