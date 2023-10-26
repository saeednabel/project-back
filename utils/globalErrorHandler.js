const DevelopmentErrorHandling = (err, res)=>{

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        err, 
        stack: err.stack
    })
}


const productionErrorHandler = (err, res) =>{

    if (err.isOperational){

        res.status(err.statusCode).json({
            status: err.status, 
            message: err.message
        })
    }
}


const globalErrorHandler = (error, req, res , next) =>{

    error.statusCode = error.statusCode || 500;

    error.status = error.status  || 'error'
    if (process.env.NODE_ENV === "Development")
    {
        DevelopmentErrorHandling(error, res);
    }
    else
    {
        let err = {...error};


        productionErrorHandler(err, res);
    }
};


module.exports = globalErrorHandler;