const jwt = require('jsonwebtoken');

const authMiddleware = (req, res ,next) => {
    // const token = req.header.authorization; //tambien puede ser asi es lo mismo
    let { authorization: token } = req.headers;
    token = token.replace("Bearer ", "");
    jwt.verify(
        token,
         "shala shalala", 
    {algorithms: "HS512"},
    (err, decoded) => {
        if(err){  
            res.status(400).json({
                error: 'invalid token',
                message: 'El token no es valido, envia un token correcto'
            });
        }else{
            console.log(decoded);
            next();
        }
    });
};

module.exports =  authMiddleware;