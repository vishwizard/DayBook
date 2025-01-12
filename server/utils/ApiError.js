class ApiError extends Error{
    constructor(statusCode,message,data,errors=[]){
        super(message);
        this.statusCode=statusCode;
        this.message=message;
        this.data=data;
        this.errors=errors;
        this.success=false;
        Error.captureStackTrace(this,this.constructor);
    }
}

export default ApiError;