// import router from 'express';
const router = require('express').Router();

router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
})

//순수 jwt로 회원가입하도록 만들기
router.post('/', (req, res) => {
    res.status(200).json({
        message: 'post!'
    });
});
router.get('/', (req, res) => {
    const token = req.query.token;
    
    //토큰으로 파싱해서 uid와 이메일을 가져와서 
    //디비에 있는지 확인
    //있으면 유저 정보를 리턴
    //없으면 없음을 알린다.
    res.status(200).json({
        message: token
    });
});

// export default router;
module.exports = router;