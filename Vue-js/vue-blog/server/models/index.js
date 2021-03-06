const mongoose = require('mongoose'); //数据库驱动
const path = require('path')
const requireAll = require('require-all');

// ORM
requireAll({
  dirname: path.join(__dirname, './'),
  filter: /(.+)\.model\.js$/,
  recursive: true
})


const mongoUrl = `mongodb://127.0.0.1:27017/blog`
const User = mongoose.model('User')
const Article = mongoose.model('Article')
mongoose.connection
  .openUri(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    user: '',
    pass: ''
  })
  .once('open', async () => {
    console.log('数据库连接成功');
    // let user = new User({
    //   role: 'superAdmin',
    //   username: 'root',
    //   password: '123456',
    //   email: 'xxx@163.com'
    // });
    // user.save();
    const article = new Article({
      title: '欢迎使用博客',
      content: '当你看到速度和幅度的酷酷酷酷酷酷物'
    });
    article.save()
  })