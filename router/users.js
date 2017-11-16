// import userRouter from 'express';
const config = require('../config/secret');
const userRouter = require('express').Router();

userRouter.use((req, res, next) => {
    console.log('do this');
    next();
})

//순수 jwt로 회원가입하도록 만들기
userRouter.post('/', (req, res) => {
    var body = req.body;
    if(typeof req.body.email === 'undefined'){
        res.status(400).json({
            message: 'missing data'
        });
    }
    
    
    // config.jwt.secret
    //패스워드 평문으로 저장하지 않을 것.
    //패스워드 응답으로 노출하지 않을 것.
    res.status(200).json({
        email: body.email,
        password: body.password
    });
});
userRouter.get('/', (req, res) => {
    const token = req.query.token;
    
    //토큰으로 파싱해서 uid와 이메일을 가져와서 
    //디비에 있는지 확인
    //있으면 유저 정보를 리턴
    //없으면 없음을 알린다.
    res.status(200).json({
        message: token
    });
});

// export default userRouter;
module.exports = userRouter;