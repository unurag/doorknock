const { constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    const errorResponse = {
        success: 'false',
        message: err.message,
        stackTrace: err.stack,
    };

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            errorResponse.title = "Validation failed";
            break;
        case constants.NOT_FOUND:
            errorResponse.title = "Service not found";
            break;
        case constants.UNAUTHORIZED:
            errorResponse.title = "Unauthorized";
            break;
        case constants.FORBIDDEN:
            errorResponse.title = "Forbidden";
            break;
        case constants.SERVER_ERROR:
            errorResponse.title = "Server error occurred";
            break;
        default:
            errorResponse.title = "An unknown error occurred";
            break;
    }

    if (!res.headersSent) {
        res.status(statusCode).json(errorResponse);
    } else {
        console.error("Error response already sent:", err);
    }
};

module.exports = errorHandler;
