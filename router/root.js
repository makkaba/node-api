// import router from 'express';
const router = require('express').Router();

router.use((req, res, next) => {
    console.log('do this');
    next();
})

router.get('/', (req, res) => {
    res.status(200).json({message: 'connected'});
});

// export default router;
module.exports = router;