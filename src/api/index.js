//参数 __t 当前时间戳
const homeBannerApi = "/v4/api/billboard/home"

 //热映
 const nowPlaying = "/v4/api/film/now-playing"
//m.maizuo.com/v4/api/film/now-playing?__t=1503123958399&page=1&count=5
//即将上映
const  comingSoon  =  "/v4/api/film/coming-soon"
//m.maizuo.com/v4/api/film/coming-soon?__t=1503123958405&page=1&count=3 

//详情页
//m.maizuo.com/v4/api/film/3828?__t=1503206002545
const  detailApi ="/v4/api/film/"
//获取影院
//http://m.maizuo.com/v4/api/cinema?__t=1503307958875
const  cinemaApi ='/v4/api/cinema'


export default {
	homeBannerApi,
	nowPlaying,
	comingSoon,
	detailApi,
	cinemaApi
	
}
