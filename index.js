const express = require('express')
const app = express()


app.listen(process.env.PORT || 3000)

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {
    url: "https://bepdv-api.herokuapp.com/",
    type: 'article',
    title: 'Claro Promo',
    description: 'Faça sua renda mensal agora mesmo.',
    image: 'https://bepdv-api.herokuapp.com/images/banner.jpg',
    image_width: '1080px',
    image_height: '420px'
  })
})
