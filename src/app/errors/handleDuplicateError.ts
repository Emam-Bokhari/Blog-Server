import { TError, TGenericErrorResponse } from "../interface/error";

export const handleDuplicateError = (err: TError): TGenericErrorResponse => {
    const match = err.message.match(/"([^"]*)"/);

    const extracedMessage = match && match[1];

    const error: TError = [
        {
            path: "",
            message: `${extracedMessage} is already exist!`
        }
    ]

    const statusCode = 400;

    return {
        statusCode,
        message: "Duplicate key Error: Conflict with an existing entry",
        error,
    }
}