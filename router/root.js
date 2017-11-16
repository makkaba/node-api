// import router from 'express';
const rootRouter = require('express').Router();

rootRouter.use((req, res, next) => {
    console.log('do this');
    next();
})

rootRouter.get('/', (req, res) => {
    res.status(200).json({message: 'connected'});
});

// export default rootRouter;
module.exports = rootRouter;