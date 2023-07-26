import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../models/userModel';

export const rbacMiddleware = (requiredRoles: UserRole[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const roles = req.body.roles
        // Check if the user has the required role
        const hasRequiredRole = requiredRoles.some((role) => roles.includes(role));
        if (!hasRequiredRole) {
          return res.status(403).json({ message: 'Insufficient permissions' });
        }
  
        // Continue to the next middleware or route handler
        next();
      } catch (error) {
        console.error('RBAC middleware error:', error);
        res.status(500).json({ message: 'RBAC middleware failed' });
      }
    };
  };
  