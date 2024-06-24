const jwt = require('jsonwebtoken')

const { AUTH_TOKEN_MISSING_ERR, AUTH_HEADER_MISSING_ERR, JWT_DECODE_ERR, USER_NOT_FOUND_ERR } = require("../error/error");
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
    const header = req.headers['authorization'];
    if (!header) return res.sendStatus(403).json({message: AUTH_HEADER_MISSING_ERR}); // Forbidden if no token is provided

    const token = header.split("Bearer ")[1]
    if (!token) {
        return res.status(403).json({ message: AUTH_TOKEN_MISSING_ERR});
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'Token expired', expiredAt: err.expiredAt });
            } else {
                return res.status(401).json({ message: 'Token verification failed' });
            }
        }
        req.user = decoded; // Attach decoded token to the request
    });
    next(); // Proceed to the next middleware or route handler
}

module.exports = {
    createJWT, authenticateToken
}