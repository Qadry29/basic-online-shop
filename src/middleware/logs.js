export const logRequest = (req, res, next) => {
    console.info("event req to path : ", req.path);
    next();
};