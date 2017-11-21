//index에서 통합해서 돌려주자
const config = require('../config/secret').db;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const connection = new Sequelize(
  config.database, // 데이터베이스 이름
  config.username, // 유저 명
  config.password, // 비밀번호
  {
    host: config.hostname, // 데이터베이스 호스트
    dialect: 'mysql', // 사용할 데이터베이스 종류
    operatorsAliases: Op,
  }
);

//connection check
connection.authenticate().then(function(err){
    if(err){
        console.log('connection error');
    }else{
        console.log('connection success');
    }
});


/*
https://sequelize.readthedocs.io/en/1.7.0/articles/express/
http://totuworld.github.io/2015/08/07/sequelize/
*/

module.exports = connection;
//TODO: 여기서 모델을 모아서 export 하자
//구조를 어떻게 나누는지?