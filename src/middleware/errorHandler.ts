import { Request, Response, NextFunction } from 'express';

export interface IError {
    status?: number;
    message: string;
    stack?: string;
}

const errorHandler = (
    err: IError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message
    });
};

export default errorHandler;
