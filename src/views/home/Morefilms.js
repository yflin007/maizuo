import React, {Component} from 'react'

import {Link} from 'react-router-dom'
export default class Morefilms extends Component{
	
	 constructor(){
		super();
		this.state = {
		    num:0
		}
	}
	
	
	render(){
		  
		
		    	    
		   let  num1 ={	   	
		   	  color:this.state.num==0?'#fe6e00':'#6a6a6a'  		   	
		   }
		 
		  let  num2 ={	   	
		   	  color:this.state.num==1?'#fe6e00':'#6a6a6a'  		   	
		   }
		  
		  let  num3 ={
		  	
		  	 left:this.state.num==0?'0px':'50%'
		  	
		  	
		  }
		return (
			<div class="morefilms">
			  
			 <div class='tab'>  
			  <a class='tab1' style={num1}   >正在热映</a>
			  <a  class='tab1' style={num2} >即将上映</a>
  			 
  			  <span class='border-bottom' style={num3}> </span>
			 </div>
			   
			 
			 
			</div>
		)
	}
	
	componentWillMount(){
	    console.log(this.props.location.query.num);
		this.state.num=this.props.location.query.num;
	  
		
		
	}
	
}