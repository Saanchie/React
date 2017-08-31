import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class UserStore extends EventEmitter {
	constructor()
	{
		super();
		//Data
		this.users=[{
			name:"abc",
			email:"abc@acc.com",
			date:"01-01-2015",
			active:true
		},{
			name:"bcd",
			email:"bcd@acc.com",
			date:"01-10-2015",
			active:false
		},{
			name:"xyz",
			email:"xyz@acc.com",
			date:"01-01-2017",
			active:true
		},
		];
	}
	//Data access logic
	getUsers()
	{
		return this.users;
	}
	addUser(user)
	{
		this.users.push(user);
		this.emit('userUpdate');
	}
	deleteUser(user)
	{
		this.users.pop(user);
		this.emit('userUpdate');
	}
	handleActions(action)
	{
		console.log("handleActions");
		switch(action.type)
		{
			case "CREATE_USER":
			{
				this.addUser(action.user);
				break;
			}
			case "REFRESH_USER":
			{
				this.users=action.user;
				this.emit('userUpdate');
				break;
			}
			case "DELETE_USER":
			{
				this.users.map((user,index)=>
				{
					if(user.name===action.userName)
					{
						this.users.splice(index,1);
					}
				});
				this.emit('userUpdate');
				break;
			}
		}
	}
}
const userStore = new UserStore();
//Register Store with Dispatcher
dispatcher.register(userStore.handleActions.bind(userStore));
export default userStore;