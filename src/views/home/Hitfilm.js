import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Hitfilm extends Component{
	
	render(){
		
		 /* hitFilmData:[],
			comingData:[]*/
		return (
			<div>
			<div class="hit">
			   <div class="hitlist">
			      {
			     
			       this.props.hitFilmData.map((item,index)=>{
			       	
			       	
			       	return  <Link key={index} class="item" to={{pathname:'/Details',query:{id:item.id}}}>
			       	         <img  src={item.cover.origin}  />
			       	        <h1>{item.name}</h1>
			       	        <p>{item.cinemaCount}家影院上映{item.watchCount}人购票</p>
			       	        <span class="grade">{item.grade}</span>
			       	     </Link >
			       })
			       
			      	
			      	
			      }
			      
			      
			   
			   </div>
			    
			     <Link class="more-button"  to={{pathname:'/Morefilms',query:{num:'0'}}} >更多热映电影</Link>
			      </div>
			        <div  class="title2" > <span>即将上映</span> </div>
			     <div class="hit"> 	     
			      
			     
			        <div class="hitlist">
			      {
			     
			       this.props.comingData.map((item,index)=>{
			       	
			       	
			       	return  <Link key={index} class="item" to={{pathname:'/Details',query:{id:item.id}}}>
			       	         <img  src={item.cover.origin}  />
			       	        <h2>{item.name}</h2>
			       	    
			       	        <span class="info">{item.month}月{item.day}日上映 </span>
			       	        
			       	     </Link>
			       })
			       
			      	
			      	
			      }
			      
			      
			   
			   </div>
			     
			     <Link class="more-button"  to={{pathname:'/Morefilms',query:{num:'1'}}}>更多即将上映电影</Link>
			</div>
			</div>
		)
	}
	
}