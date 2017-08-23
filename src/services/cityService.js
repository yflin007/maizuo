import axios from 'axios'
import API from '../api'
import homeService from '../services/cityService.js'


function   getCityDat(){
	
 	return new Promise((resolve, reject)=>{
		axios.get(`${API.cityApi}?_city?__t=${new Date().getTime()}`)
		.then((response)=>{
		    var cities =response.data.data.cities;
		    var zm =["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"];
		    var citieDat=[];
		    var hitDat =[];
		    zm.map((item,index)=>{    	
		    	citieDat.push({
		    	   name:item,
		    	   cities:[]    		
		    	})
		    	
		    })
		   cities.map((item,index)=>{
		   	
		   	     var str = item.pinyin.charAt(0).toUpperCase();
		   	   
		   	   citieDat.map((value,k)=>{
		   	   	 
		   	   	 if(value.name==str){
		   	   	 	
		   	   	 	value.cities.push(item); 
		   	   	 	
		   	   	 }
		   	   	
		   	   	
		   	   })
		   	 
		   	   
		   	   
		   })
	
		   
		  
		   resolve(citieDat);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
	
	
	
}


  
  









  
 
export default {
 getCityDat	
	
}
