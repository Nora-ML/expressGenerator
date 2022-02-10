const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

//routing params
leaderRouter.route('/:leaderId')
    .all((req, res, next) => {
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html')
        next();
    })
    .get((req, res, next) => {
        res.end('this is the leader leaderId number ' + req.params.leaderId)
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /leaders/' + req.params.leaderId);
    })

    .put((req, res, next) => {
        res.write('Updating the leader: ' + req.params.leaderId + '\n');
        res.end('Will update the leader: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete((req, res, next) => {
        res.end('Deleting leader: ' + req.params.leaderId);
    })

//routing    
leaderRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200
        res.header('Content-type', 'text/html')
        next();
    })
    .get((req, res, next) => {
        res.end('these are all the leaders');
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

module.exports = leaderRouter;