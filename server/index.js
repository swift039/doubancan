const Koa = require('koa')
const app = new Koa()
// const {htmlTpl,ejsTpl} = require('./tpl')
// const ejs = require('ejs')
const views = require('Koa-views')
const {resolve} = require('path')

app.use(views(resolve(__dirname,'./views'),{
    extension : 'pug'
}))

app.use(async (ctx,next)=>{
    await ctx.render('index',{
            you:'lucke',
            me :'scott'
        })
    })

app.listen(4455)