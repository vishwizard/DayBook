const ErrorHandler = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    const errors = err.errors || [];
    console.log(err);
    return res.status(statusCode).json({
        statusCode,message,errors,success:false,
    });
};

export default ErrorHandler;