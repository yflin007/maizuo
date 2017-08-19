import React, {Component} from 'react'


export default class Hitfilm extends Component{
	
	render(){
		
		 /* hitFilmData:[],
			comingData:[]*/
		return (
			<div>
			<div class="hit">
			   <ul class="hitlist">
			      {
			     
			       this.props.hitFilmData.map((item,index)=>{
			       	
			       	
			       	return  <li key={index}>
			       	         <img  src={item.cover.origin}  />
			       	        <h1>{item.name}</h1>
			       	        <p>{item.cinemaCount}家影院上映{item.watchCount}人购票</p>
			       	        <span class="grade">{item.grade}</span>
			       	     </li>
			       })
			       
			      	
			      	
			      }
			      
			      
			   
			   </ul>
			    
			     <a class="more-button">更多热映电影</a>
			      </div>
			        <div  class="title2" > <span>即将上映</span> </div>
			     <div class="hit"> 	     
			      
			     
			        <ul class="hitlist">
			      {
			     
			       this.props.comingData.map((item,index)=>{
			       	
			       	
			       	return  <li key={index}>
			       	         <img  src={item.cover.origin}  />
			       	        <h2>{item.name}</h2>
			       	    
			       	        <span class="info">{item.month}月{item.day}日上映 </span>
			       	        
			       	     </li>
			       })
			       
			      	
			      	
			      }
			      
			      
			   
			   </ul>
			     
			   
			</div>
			</div>
		)
	}
	
}