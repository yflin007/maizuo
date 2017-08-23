import React, {Component} from 'react'


import '../css/me.css'
export default class Me extends Component{
	
	render(){
		return (
			<div class="page">
			  <form class="login">
			  <input type="text" placeholder="请输入手机号/邮箱"  />
			  <input type="password" placeholder="请输入密码"  />
			  
			  
			     <button class="submit">登录 </button>
			  
			  </form>
			</div>
		)
	}
	
}