exports.success = function (data = [], message = 'Operation Successful', status='200') {

    return response( data, message, status );
}

// Invalid credentials
exports.invalidCredentials = function (data = [], message = 'Invalid Credentials', status='400') {
    return response( data, message, status );
}


function response(data = [], message = '', status = '200'){
    // Check if its an array else make it an array
    console.log('data' + ' ' + data);
    if (typeof(data) != []) {
        data = [data];
    }
    return { 'data': data, 'responseMessage': message, 'responseCode': status };
}
// exports.response = response();