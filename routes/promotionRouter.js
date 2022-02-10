const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

//routing params
promoRouter.route('/:promoId')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html')
        next();
    })
    .get((req, res, next) => {
        res.end('this is the promotion promoId number ' + req.params.promoId)
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promotions/' + req.params.promoId);
    })

    .put((req, res, next) => {
        res.write('Updating the promotion: ' + req.params.promoId + '\n');
        res.end('Will update the promotion: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete((req, res, next) => {
        res.end('Deleting promotion: ' + req.params.promoId);
    })

//routing    
promoRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.header('Content-type', 'text/html')
        next();
    })
    .get((req, res, next) => {
        res.end('these are all the promotions');
    })
    .post((req, res, next) => {
        res.end('Act like something was posted')
    })
    .put((req, res, next) => {
        res.end('Assume ur update is being implemented ')
    })
    .delete((req, res, next) => {
        res.end('Nothing is ever completely deleted..')
    })

module.exports = promoRouter;