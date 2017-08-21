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

  function  formatDate(time){
    let date = new Date(time*1),
        year = date.getFullYear(),
        month = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + (date.getMonth() + 1),
        day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();

    return     month + '月' + day+'日';
  }

function getDetail(id){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.detailApi}${id}?__t=${new Date().getTime()}`)
		.then((response)=>{
             var obj =response.data.data.film;     
             
             var str = '';
            
             for(var  item of obj.actors){
             	
                 str+=item.name +"     "
             	
             	
             }
             
            obj.imgPath =obj.cover.origin;
            obj.act=str;
            obj.time =formatDate(obj.premiereAt);
           
            resolve(obj);
		   
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

	

export default {
	getHomeBanner,
	getNowPlaying,
	getComingSoon,
	getDetail
}
