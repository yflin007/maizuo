import React, {Component} from 'react'


import '../css/card.css'
export default class Card extends Component{
	
	constructor(){
	 super();
	 
	 this.state={
	 	
	    active:true
	 	
	  
	 	
	 }
		
		
	}
	
	
	
	render(){
		
		      let active ={
		       color:this.state.active==true?"#ff7100":"#333"
		      }
		      let active2 ={
		       color:this.state.active==true?"#333":"#ff7100"
		      }
		     let  active3={     	
		      left:this.state.active?"0":"50%"    	
		     }	   
		return (
			<div class="page">
		      <div class="card">
		        <div class="card-tab">  
		        <span style={active}   onClick={this.action.bind(this)}>卖座卡</span>
		        <span style={active2}  onClick={this.action.bind(this)}>电子卖座卡</span>
		        <div class="border-tottom" style={active3}>  </div>
		        </div>
		        {
		       this.state.active?  
		      <form class="form1">
			  <input type="text" placeholder="卡号"  />
			  <input type="password" placeholder="密码"  />  
			  <button class="submit">查询 </button>  
			  </form> :null
			  
			  }
		        {
		        	
		         this.state.active==false?  	
		       <form class="form1">
			  <input type="text" placeholder="卡号"  />
			  <button class="submit">查询 </button>			  
			  </form>:null
		        	
		        }
		        
			  
		      </div>
			</div>
		)
	}
	
	action(){
		
	  console.log("zhiximng");	
	 this.setState({active:!this.state.active});	
	 
	 console.log(this.state.active);
	}
	
}