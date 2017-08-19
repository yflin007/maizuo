//参数 __t 当前时间戳
const homeBannerApi = "/v4/api/billboard/home"

 //热映
 const nowPlaying = "/v4/api/film/now-playing"
//m.maizuo.com/v4/api/film/now-playing?__t=1503123958399&page=1&count=5
//即将上映
const  comingSoon  =  "/v4/api/film/coming-soon"
//m.maizuo.com/v4/api/film/coming-soon?__t=1503123958405&page=1&count=3 
export default {
	homeBannerApi,
	nowPlaying,
	comingSoon
	
}
