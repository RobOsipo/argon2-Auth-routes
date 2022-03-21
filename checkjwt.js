const jwt = require('jsonwebtoken');


const checkJwt = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('you are not authorized')
    } else {
        let bearer = req.headers.authorization.split(' ')
        let token = bearer[1]
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {return res.status(401).send('you are not authorized')}
            else {
                console.log(decoded)
                next()
            }
        })

    }
}

module.exports = checkJwt;