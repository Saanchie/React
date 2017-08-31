import dispatcher from '../dispatcher';

//create Actions
export function createUser(user)
{
	dispatcher.dispatch(
	{
		type:"CREATE_USER",
		user
	});
}
export function deleteUser(userName)
{
	dispatcher.dispatch({
		type:"DELETE_USER",
		userName
	});
}
export function refreshUsers(user)
{
	console.log("refreshUser");
	dispatcher.dispatch({
		type:"REFRESH_USER",
		user:[{
			name:"sindhu",
			email:"sindhu@acc.com",
			date:"01-01-2015",
			active:true
		},{
			name:"sam",
			email:"sam@acc.com",
			date:"01-10-2015",
			active:false
		},{
			name:"john",
			email:"john@acc.com",
			date:"01-01-2017",
			active:true
		}]
	});
}