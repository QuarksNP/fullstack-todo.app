import { ExpressRequest, ExpressResponse, ExpressNextFunction } from "../interfaces";

const errorhandler = (
    err: any,
    req: ExpressRequest,
    res: ExpressResponse,
    next: ExpressNextFunction) => {

    const errStatus = err.statusCode || 500
    const errMessage = err.message || 'Something went wrong'
    res.status(errStatus)
    res.json({
        error: {
            success: false,
            status: errStatus,
            msg: errMessage
        }
    })
}

export default errorhandler