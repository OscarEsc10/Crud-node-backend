export class ErrorHandler{
    async errorHandler(err, req, res, next){
      console.error(err);

      if(err.name === "ZodError"){
        return res.status(400).json({
            message: "Validation failed",
            errors: err.errors,
        })
      }

      if(err.statusCode){   
        return res.status(err.statusCode).json({
            message: err.message,
        })
      }

      res.status(500).json({
        message: "Internal server error",
      })
    }
}