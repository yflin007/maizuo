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

function getNowPlay(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.nowPlaying}?__t=${new Date().getTime()}&page=1&count=7`)
		.then((response)=>{
			
	      resolve(response.data.data.films);
		   
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

function getComeSoon(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.comingSoon}?__t=${new Date().getTime()}&page=1&count=7`)
		.then((response)=>{
               var arr=[];
		 response.data.data.films.map((item,index)=>{
		 	
		 	 var date =new Date(item.premiereAt);		   
		     var day = date.getDate();
		     var week =date.getDay();  
		     var a = new Array("日", "一", "二", "三", "四", "五", "六");    
             var str =a[week];  
		     var month = date.getMonth()+1;
        
             item.day=day;
             item.month =month;
             item.week="星期"+str;
             arr.push(item);	 	
		 })
		    resolve(arr);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

function getCinema(){
	return new Promise((resolve, reject)=>{
		axios.get(`${API.cinemaApi}?__t=${new Date().getTime()}`)
		.then((response)=>{
            var arr=[];     
            arr=response.data.data.cinemas;   
            var region=[];    
            var newArr=[];
            for(var i=0;i<arr.length;i++){              
                  var obj =arr[i];    
            
                if(region.indexOf(obj.district.name)==-1){             	
              	  region.push(obj.district.name);             	
                }
            }                 
            for(var i=0;i<region.length;i++){           	 
            	newArr.push({name:region[i],iShow:'true',cinema:[]});             	          	
            }        
            for( var i=0;i<arr.length;i++){
           	  
           	      var obj =arr[i];
           	     
           	   for(var j=0;j<newArr.length;j++){
           	   	  
           	   	    if(obj.district.name==newArr[j].name){        	   	    	
           	   	    	newArr[j].cinema.push(obj);
           	   	    }
           	   	 
           	   }
           }
             
           
             resolve(newArr);      
           
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
	getDetail,
	getNowPlay,
	getComeSoon,
	getCinema
}
