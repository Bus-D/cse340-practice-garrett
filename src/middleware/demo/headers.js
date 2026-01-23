// Middleware to add custom headers for demo
const addDemoHeaders = (req, res, next) => {
    res.setHeader('X-Demo-Page', true);
    res.setHeader('X-Middleware-Demo', 'Hello There');

    next();
}

export { addDemoHeaders };