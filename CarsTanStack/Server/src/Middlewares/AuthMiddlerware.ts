// middleware/authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export interface CustomRequest extends Request {
  user?: string | JwtPayload;
}

export const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.accessToken;
  // console.log(`Token: ${token}`);
console.log()

  if (!token) {
     res.status(401).json({ message: 'Access token missing' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;
    next();
    
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};
