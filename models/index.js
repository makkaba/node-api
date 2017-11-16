//index에서 통합해서 돌려주자
const config = require('../config/secret').db;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.database, // 데이터베이스 이름
  config.username, // 유저 명
  config.password, // 비밀번호
  {
    'host': config.hostname, // 데이터베이스 호스트
    'dialect': 'mysql' // 사용할 데이터베이스 종류
  }
);