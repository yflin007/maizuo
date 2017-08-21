import React, {Component} from 'react'


import homeService from '../services/homeService.js'

import '../css/home.css'

import Hitfilm from '../views/home/Hitfilm.js'

let bannerSwiper = null;

export default class Home extends Component{
	constructor(){
		super();
		this.state = {
			bannerData: [],
			hitFilmData:[],
			comingData:[]
		
		}
	}
	
	render(){
		
		
		return (
			<div id="home" class="page">
				{/*轮播图*/}
				<div ref="banner" class="swiper-container home-banner">
				    <div class="swiper-wrapper">
				    {
						this.state.bannerData.map((item, index)=>{
							return (
								<div key={index} class="swiper-slide" >
									<img src={item.imageUrl}/>
								</div>
							)
						})
					}
				    </div>
				</div>			
			   
			   <Hitfilm hitFilmData={this.state.hitFilmData} comingData={this.state.comingData} />
			
			</div>
		)
	}
	
	componentWillMount(){

		homeService.getHomeBanner()
		.then((data)=>{
			this.setState({bannerData: data});
			console.log(this.state.bannerData.length)
		    bannerSwiper = new Swiper(this.refs.banner, {
		   	loop:true,
			autoplay:1000,
			utoplayDisableOnInteraction:false
		});
		})	
		//热播数据
		homeService.getNowPlaying()
		.then((data)=>{
		    
		    console.log(data);
		   this.setState({hitFilmData:data});
		   
		   
		})	
		//热映数据
		homeService.getComingSoon()
		.then((data)=>{
		  console.log(data);
		  this.setState({comingData:data})
	     
		})	
		
	}
	 
	componentDidMount(){
		
	}
	
	
}
