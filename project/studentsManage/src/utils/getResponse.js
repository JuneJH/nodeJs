exports.getErr = function (err = "server internal error", errCode = 500) {
    return {
        code: errCode,
        msg: err,
    };
};

exports.getResult = function (result) {
    return {
        code: 0,
        msg: "",
        data: result,
    };
};
