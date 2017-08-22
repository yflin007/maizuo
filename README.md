# maizuo



/******添加代理******/
app.use('/v4',httpProxyMiddleware({
target:'http://m.maizuo.com',
changeOrigin:true

}))

/*********************/

//http://aura.maizuo.com/api/ad/list


app.use('/api',httpProxyMiddleware({
target:'http://m.maizuo.com',
changeOrigin:true
}))