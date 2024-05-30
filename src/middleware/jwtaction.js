const jwt = require('jsonwebtoken')

function createJWT(req, res, next){
    let accessToken;
    let body = req.body;
    try{
        accessToken = jwt.sign(body, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '30s',
        });
        req.accessToken = accessToken;
    }
    catch(err){
        console.log(err);
        req.accessToken = null;
    }
    next();
}

function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403); // Forbidden if no token is provided

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token expired', expiredAt: err.expiredAt });
            } else {
                return res.status(401).json({ message: 'Token verification failed' });
            }
        }
        req.user = decoded; // Attach decoded token to the request
        next(); // Proceed to the next middleware or route handler
    });
}

module.exports = {
    createJWT, authenticateToken
}