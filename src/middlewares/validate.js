import { ZodError } from "zod";

export class Validate {
    validate(schema) {
        return async (req, res, next) => {
            try {
                const parseData = schema.parse({
                    body: req.body,
                    params: req.params,
                    query: req.query,
                })
                req.body = parseData.body ?? req.body;
                // req.params and req.query are read-only in some Express environments
                // req.params = parseData.params ?? req.params;
                // req.query = parseData.query ?? req.query;
                next();
            } catch (error) {
                if (error instanceof ZodError) return res.status(400).json({
                    message: "Validation error",
                    errors: error.errors,
                });
                next(error);
            }
        }
    }
}