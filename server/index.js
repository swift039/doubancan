const Koa = require('koa')
const app = new Koa()
const {htmlTpl,ejsTpl} = require('./tpl')
const ejs = require('ejs')

app.use(async (ctx,next)=>{
    ctx.type = 'text/html; charset=UTF-8'
    ctx.body =ejs.render(ejsTpl,{
        you :'lucke',
        me :'hello'
    })
})
app.listen(4455)