import React, {Component} from 'react'


import homeService from '../services/homeService.js'
import '../css/shopping.css' 
import Subject from   "../views/shop/Subject.js"
import Handpick from   "../views/shop/Handpick.js"

 let shopbanner =null;
export default class Shop extends Component{
	
	 constructor(){
		super();
		this.state = {
		   bannerDat:[],
		   cateDat:[],
		   sellDatDat:[],
		   subjectDatDat:[],
		   recommendDat:[]
		
		
		}
	}
	
	render(){
		return (
			<div class="page">
			 <div class="shop"> 
			   
			  <div class="swiper-container" ref="shopbanner">
			   <div class="swiper-wrapper">
			    
			    {
			    	
			    this.state.bannerDat.map((item,index)=>{
			    	
			      return  ( <a  key={index} class="swiper-slide"><img    src={item.imageSrc} /></a> )
			    	
			    })
			    	
			    	
			    }
			    
			   
			 
			  </div>	
			   <div class="swiper-pagination"></div>
			 
			 </div>
			 
			   <ul class="catelist" > 
			    {
			    
			     this.state.cateDat.map((item,index)=>{
			     	
			     
			      return  ( <li key={index}>
			     	          
			     	      
			     	         <a>
			     	         <img src={item.imageSrc} />
			     	         
			     	         <strong>{item.name}</strong>
			     	         
			     	         </a>
			     	        
			     	       		     	      
			     	      </li>
			     	
			     	
			     	)
			     })
			    	
			    	
			    }
			   </ul>
			   <div class="sell">    
			       
			   {
			    	
			    this.state.sellDatDat.map((value,k)=>{
			    	
			      return  ( 
			      	    <a  key={k}> <img src={value.imageSrc} /></a> 		      
			      )
			    	
			    })
			    	
			    }
			    </div>  		    
			  <Subject  subjectDatDat={this.state.subjectDatDat}/>
			  <Handpick   recommendDat={this.state.recommendDat} />
			 </div>
			</div>
		)
	}
	
 componentWillMount(){
 	   //商品的类别数据
		homeService.getshopCate()
		.then((data)=>{
		 	
		this.setState({sellDatDat:data[2].type3}) 
        this.setState({bannerDat:data[1].type2})    
        this.setState({cateDat:data[0].type1})
        this.setState({subjectDatDat:data[4].type5})
          console.log("this.state.subjectDatDat");
        console.log(this.state.subjectDatDat);
          shopbanner = new Swiper(this.refs.shopbanner, {
		  	loop:true,
			autoplay:1000,
			utoplayDisableOnInteraction:false,
		    pagination: '.swiper-pagination'
		}); 
      
		})	
	   	homeService.getRecommend(1,20)
		.then((data)=>{
		 
		 this.setState({recommendDat:data})
		 
		  console.log(this.state.recommendDat);
          console.log(this.state.recommendDat);
		})	 
	    
		  	 		     	     	
 }
 
	componentDidMount(){
 	 
	} 
}