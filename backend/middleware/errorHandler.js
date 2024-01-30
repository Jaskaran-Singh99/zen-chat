const notFound = (req, res, next)=>{
    const error = new Error('404 Not Found')
    res.status(404)
    next(error)
}

module.exports = {notFound}