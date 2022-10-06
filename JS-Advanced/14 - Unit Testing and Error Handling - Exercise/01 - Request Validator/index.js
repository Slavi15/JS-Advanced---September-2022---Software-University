function requestValidator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const URI_REGEX = new RegExp(/(^[A-Za-z0-9.*]+$)/, 'g');
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const MESSAGE_REGEX = new RegExp(/(^[^<>\\&'"]+$)/, 'g');

    if (!validMethods.includes(obj.method)) throw new Error('Invalid request header: Invalid Method');
    if (!obj.hasOwnProperty('method')) throw new Error('Invalid request header: Invalid Method');

    if (!URI_REGEX.test(obj.uri)) throw new Error('Invalid request header: Invalid URI');
    if (!obj.hasOwnProperty('uri')) throw new Error('Invalid request header: Invalid URI');
    if (obj.uri === '') throw new Error('Invalid request header: Invalid URI');

    if (!validVersions.includes(obj.version)) throw new Error('Invalid request header: Invalid Version');
    if (!obj.hasOwnProperty('version')) throw new Error('Invalid request header: Invalid Version');

    if (obj.message === '') return obj;
    if (!MESSAGE_REGEX.test(obj.message)) throw new Error('Invalid request header: Invalid Message');
    if (!obj.hasOwnProperty('message')) throw new Error('Invalid request header: Invalid Message');

    return obj;
};

module.exports = {
    requestValidator
};

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));
console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));
console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));