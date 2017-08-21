# maizuo



/******添加代理******/
app.use('/v4',httpProxyMiddleware({
target:'http://m.maizuo.com',
changeOrigin:true

}))