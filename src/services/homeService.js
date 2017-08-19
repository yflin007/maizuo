import axios from 'axios'
import API from '../api'

function getHomeBanner(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
		
			resolve(response.data.data.billboards);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
function getNowPlaying(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.nowPlaying}?__t=${new Date().getTime()}&page=1&count=5`)
		.then((response)=>{
			
	      resolve(response.data.data.films);
		   
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

function getComingSoon(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.comingSoon}?__t=${new Date().getTime()}&page=1&count=3`)
		.then((response)=>{
               var arr=[];
		 response.data.data.films.map((item,index)=>{
		 	
		 	 var date =new Date(item.premiereAt);
		   
		     var day = date.getDate();
		     var month = date.getMonth()+1;
        
             item.day=day;
             item.month =month;
             arr.push(item);	 	
		 })
		    resolve(arr);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
function test(){
	axios.get("/v4/api/cinema?__t=1502955788535")
	.then((response)=>{
		console.log(response);
	})
	.catch((error)=>{
		console.log(error)
	})
}

test();



export default {
	getHomeBanner,
	getNowPlaying,
	getComingSoon
}
