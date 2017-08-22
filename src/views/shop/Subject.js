import React, {Component} from 'react'
import homeService from '../../services/homeService.js'

import {Link} from 'react-router-dom' 

export default class Subject  extends Component{
	
	
	/*constructor(){
	
	super();
		
	}*/
		
	render(){
				 
		return (	
			 <ul class="subject">
			  
			   {
			   	this.props.subjectDatDat.map((item,index)=>{
			   		
			      return (
			      	
			      	    <li key={index}>
			      	     <img src={item.imageSrc} />
			      	    
			      	    <div class="products">
			      	     {
			      	     item.products.map((value,k)=>{
			      	     	
			      	       return  <a key={k} class="control-list">
			      	          
			      	             <img src={value.image}  />   
			      	              
			      	             <h1>{value.name}</h1>  
			      	             <p>￥{value.price}</p>
			      	           
			      	       </a>
			      	     	
			      	     	
			      	     })
			      	     	
			      	     }
			      	    </div>
			      	    			      	    		      	    			      	    			      	    
			      	    </li>
			      				      	
			      	
			      )
			   		
			   		
			   		
			   	})
			   	
			   	
			   	
			   }
			  
			 
			 
			 </ul>
			
			
		)
	
	}
	

   componentWillMount(){
  
	  		
	}	
  
	
}