const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa Shop11!'
  })
})

router.get('/register', async (ctx, next) => {
  await ctx.render('register', {
    user: {
      '_action': 'new'
    }
  })
})

module.exports = router
