const catchAsync = func => (res, req, next) =>{
    func(req, res, next).catch(next);
}

module.exports = catchAsync;