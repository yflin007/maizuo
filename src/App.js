import React,{Component} from 'react'
import {BrowserRouter,Route}  from 'react-router-dom'


import   AppHeader   from './views/common/AppHeader.js'
import   SlilderBar  from './views/common/SilderBar.js'
               
import './css/app.css'
export  default class App extends Component{
	
	   constructor(){
	   	 super();
	   	
	   	
	   	
	   	
	   }
	
	  render(){
	  	  
	      return (
	      	  <div>
	      	   <p>测试</p>
	      	
	      	   <AppHeader />
	      	   <SlilderBar />
	      	   
	      	  </div>
	      )
	  	
	  	
	  }
	
	
}
