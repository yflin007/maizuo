import React, {Component} from 'react'
import homeService from '../../services/homeService.js'

import {Link} from 'react-router-dom' 

export default class Handpick  extends Component{
	
	
	/*constructor(){
	
	super();
		
	}*/
		
	render(){
		     		 
	     return (
	     	
	     	  <div  class="handpick">
	     
	         <p class="title">— 好货精选 —</p>
	           
	           <ul class="handpickList">
	            { 
	            	
	            this.props.recommendDat.map((item,index)=>{
	            	
	              return    (  <li  key={index}>
	                         
	                          <a> <img  src={item.skuList[0].image}/></a>
	                          <h1>{item.masterName}</h1>
	                          <p><span>￥{item.skuList[0].price/100}</span><span>已售{item.displaySalesCount}</span></p>
	                          
	                </li>	)
	            	            	
	            })
	            	
	          
	           }
	           </ul>
	         
	         
	     
	         </div>
	     	     	
	     )
				 
	   
	}
	

   componentWillMount(){
  
	  		
	}	
  
	
}