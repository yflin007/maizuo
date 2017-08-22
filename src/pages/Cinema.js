import React, {Component} from 'react'

import homeService from '../services/homeService.js'
import '../css/cinema.css' 
export default class Cinema extends Component{
	
	
	 constructor(){
	  super();
	  
	  this.state={
	  	
	    citysDat:[]
	 
	  	
	  	
	  	
	  }
		
		
		
	}
	
	
	render(){
		
		
		  
		return (
			<div class="cinema-page">
			   {
			 this.state.citysDat.map((item,index)=>{
			  return (	<div class="cinema" key={index}>    
			   
			       <p class="title" onClick={this.action.bind(this,index)}>{item.name}</p>
			      
			         <ul  class={"active"+index}>
			           {
			           item.cinema.map((value,i)=>{
			           	
			         return  (  <li  key={i} class="item"  >
			                  
			                    <p> {value.name} <span><i>座</i></span>  <span><i>通</i></span> <strong>></strong></p>
			                    
			                     <span>可乐爆米花</span>
			                    <h6> {value.address} </h6>
			                    
			                    <h6>距离未知</h6>
			                    </li>
			           	
			           )
			           	
			           })
			         
			           }
			         </ul>
			          			      		        			        			        			      
			 </div>)
			 	
			 })
			  
				}
			
			</div>
		)
	}
   componentWillMount(){

	 homeService.getCinema()
		.then((data)=>{	 
		   
		  console.log(data);
		   
		  data[0].iShow=false;
		  this.setState({citysDat:data})
		 	 	 
		})			
	  	
	}	
	action(index){		
		 var str="active"+index;		 
		 this.state.citysDat[index].iShow =!this.state.citysDat[index].iShow;	 
		if(this.state.citysDat[index].iShow){
		
		  document.getElementsByClassName(str)[0].style.display="none";
					   	    		
		}else{				  
	       document.getElementsByClassName(str)[0].style.display="block";		
		}
	    
	}
}