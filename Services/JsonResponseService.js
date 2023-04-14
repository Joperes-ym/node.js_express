const JsonResponseService = (msg, data = [], status = 200) => {
    return {msg, data, status}
}

module.exports = JsonResponseService