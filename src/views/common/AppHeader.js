import React,{Component} from 'react'
import {BrowserRouter,Route}  from 'react-router-dom'



export  default class AppHeader extends Component{
	
	   constructor(){
	   	 super();
	   	
	   	
	   	
	   	
	   }
	
	  render(){
	  	  
	      return (
	      	 <header class="app-header">			
				<span class="iconfont icon-menu" ></span>
				<h1 class="title">电影院</h1>
				<p class="city iconfont icon-arrow-down">深圳</p>
				<span class="iconfont icon-person"></span>
				
			</header>   	
	      )
	  	
	  	
	  }
	
	 menuAction(){
	 	
	 	
	 }
}
