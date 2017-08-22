import React, {Component} from 'react'
import homeService from '../../services/homeService.js'

import {Link} from 'react-router-dom' 
export default class Details extends Component{
	
	
	constructor(){
	  super();
	  
	  this.state={
	  	
	     detailDat:{}
	  	
	  	
	  	
	  }
		
		
		
	}
	
	
	render(){
		
		
		   
		return (
			
			
			<div class="detail-page">
		
			
            <div className="desc">
            <img src={this.state.detailDat.imgPath} />
           <div className="title">影片简介</div>
            <div className="info">
            <p>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{this.state. detailDat.director}</p>
            <p>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：{this.state.detailDat.act} </p>
            <p>地区语言：{this.state.detailDat.nation}({this.state.detailDat.language})</p>
            <p>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：{this.state.detailDat.category}</p>
            <p>上映日期：{this.state.detailDat.time}</p>
            <p className="p">{this.state.detailDat.synopsis}</p>
            
             <Link to={'/cinema/'+this.state.detailDat.id} class="ticket">立即购票</Link>
            
          </div>
        </div>
      
			  
			</div>
		)
	}
	
	
   componentWillMount(){

	  let id =this.props.location.query.id;
	 
	homeService.getDetail(id)
		.then((data)=>{	 
		  this.setState({detailDat:data});
			 	 
		})			
	  
	
	
	}	
  
	
}