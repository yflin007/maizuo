import React, {Component} from 'react'

import {Link} from 'react-router-dom'
import homeService  from '../../services/homeService.js'
export default class Morefilms extends Component{
	
	 constructor(){
		super();
		this.state = {
		    num:0,
		    hitDat:[],
		    soonDat:[]
		}
	}
	
	
	render(){
		  				    	    
		   let  num1 ={	   	
		   	  color:this.state.num==0?'#fe6e00':'#6a6a6a'  		   	
		   }	
		   let show1={
		   	
		   	   display:this.state.num==0?'block':'none' 
		   	
		   }
		     let show2={
		   	
		   	   display:this.state.num==1?'block':'none' 
		   	
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
			  <a class='tab1'  style={num1}  onClick={this.tabAction.bind(this,"0")}>正在热映</a>
			  <a  class='tab1'  style={num2} onClick={this.tabAction.bind(this,"1")} >即将上映</a>
  			 
  			  <span class='border-bottom' style={num3}> </span>
			 </div>
	        
	         <div  class="tab1-list" id="tab1-list1" style={show1} >  
	          
	          {
	          this.state.hitDat.map((item,index)=>{
	          	
	          	return  <Link key={index} class="item" to={{pathname:'/Details',query:{id:item.id}}}>
			       	         <img  src={item.poster.origin}  />
			       	         <div class="info">
			       	        <h1>{item.name}</h1>
			       	        <p> {item.intro}</p>
			       	        <p><span><i>{item.cinemaCount}</i>家影院上映</span><span><i>{item.watchCount}</i>人购票</span></p>
			       	        <span class="grade">{item.grade}<i>></i></span>		       	         
			       	         </div>
			       	        
			       	     </Link >
	          		          	
	          })
	                    
	          }
	          	         	        	                   
	         </div>
	         
	             
	          <div  class="tab1-list" id="tab1-list2" style={show2}>   
	               {
	               this.state.soonDat.map((item,index)=>{
			       	
			       	
			       	return  <Link key={index} class="item" to={{pathname:'/Details',query:{id:item.id}}}>
			       	         <img  src={item.poster.origin}  />
			       	        <div class="info">
			       	        <h1>{item.name}</h1>
			       	        <p> {item.intro}</p>
			       	        <h6>{item.month}月{item.day}日上映    <span>{item.week}</span> </h6>
			       	         </div>
			       	     </Link>
			       })
			       
			      	
	                    
	          }
	           
	          </div>
	             
	           
	         
	         	    	              
			</div>
		)
	}
	
	componentWillMount(){
		
		       console.log(this.props.location.query);
	        if(this.props.location.query==undefined){
	        	
	        	
	        	this.state.num=0;
	        	
	        }else{
	        
	        this.state.num=this.props.location.query.num;
	         	
	        }
	  
	
	   
	   //热播数据
		homeService.getNowPlay()
		.then((data)=>{
		  
		   this.setState({hitDat:data});
		})	
		
	  //即将上映
		homeService.getComeSoon()
		.then((data)=>{
		   console.log(data);
		   this.setState({soonDat:data});
		})	
	}
	tabAction(k){
	  this.setState({num:k});		
	}
}