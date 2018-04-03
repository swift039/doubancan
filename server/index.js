const Koa = require('koa')
const app = new Koa()
const {normal} = require('./tpl')


app.use(async (ctx,next)=>{
    ctx.type = 'text/html; charset="UTF-8"'
    ctx.body =normal
})
app.listen(4455)