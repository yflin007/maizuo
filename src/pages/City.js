import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/city.css'
import cityService from '../services/cityService.js'
export default class City extends Component{
	constructor({history}){
		super();
		this.state = {
			className: '',
			history,
			cities:[],
			hitCity:[{id: 11, name: "上海", pinyin: "ShangHai"},{id: 10, name: "深圳", pinyin: "ShenZhen"},{id: 12, name: "北京", pinyin: "BeiJing"},{id: 13, name: "广州", pinyin: "Guangzhou"}]
		}
	}
	
	render(){
		return (
			<ReactCSSTransitionGroup
				transitionName="slide"
				transitionAppear={true}
				transitionAppearTimeout={400}
				transitionEnter={false}
	      		transitionLeave={true}
	      		transitionLeaveTimeout={1000}>
				<div id="city" class={'page '+this.state.className}>
				  
				  <p class="title">Gps定位你所在的城市</p>
				    
				      
				     <p class="local" ><a   class="worditem">深圳</a></p>
				
				 <div class="hitcity">   
				   <p class="title">热门城市</p>
				   <div class="hitcityls">
				        {
				      this.state.hitCity.map((item,index)=>{
				      	
				      	return (
				      		
				      	  <a key={index} class="hititem">{item.name}</a>	
				      		
				      	)
				     } )
				      	
				      }
				    </div>
				 </div>
			    
			     <div class="word">
			      <p class="title">按字母搜索</p>
			      <div class="wordls">
			     {
			     this.state.cities.map((item,index)=>{
			     	
			     	return (
			     		<a key={index}  class="worditem" href={"#"+index}>
			     		 
			     		 {item.name}		     		
			     		</a>
			     	)
			     })
			     }
			     </div>
			     </div>
			  
				 <ul>
				  {
				  this.state.cities.map((item,index)=>{
				  	
				  	return (
				  		
				  		<li key={index}>
				  		  <p class="title" id={index}>{item.name}</p>
				  		
				  		<div class="wordls">
				  		 {
				  		 item.cities.map((v,k)=>{
				  		 	
				  		 return (  <a key={k}  class="worditem">
				  		   
				  		    <span> {v.name}</span>
				  		   
				  		   </a>
				  		 	
				  		   )
				  		 })
				  		 	
				  		 }
				  		 </div>
				  		</li>
				  	)
				  })
				  }
				 
				 </ul>		
				</div>
				
				 
				
			</ReactCSSTransitionGroup>
		)
	}
	
	selectAction(cityname){
		//console.log(cityname);
		//返回动画
		this.setState({className: 'leave'});
		setTimeout(()=>{
	    //返回操作
			this.state.history.goBack();
		}, 400);
	}
		componentWillMount(){
				   
		 cityService.getCityDat()
		 .then((data)=>{
		 	 console.log("查看城市列表"); 
		 	 console.log(data);
		 
		 	this.setState({cities:data});	 	
		 })
		 
		 
			
			
    }
	
}