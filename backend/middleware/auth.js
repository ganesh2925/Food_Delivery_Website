import jwt from 'jsonwebtoken';

const authMiddleWare = async (req, res, next) => {
    const {token} = req.headers;
    if (!token) {
        return res.status(401).json({success:false, message: 'Unauthorized Access Login Again'});
    }
    try {
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!token_decoded) {
            return res.status(401).json({success:false, message: 'Unauthorized Access Login Again'});
        }
        req.body.userId = token_decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({success:false ,message: 'Error'});
    }
}

export default authMiddleWare;