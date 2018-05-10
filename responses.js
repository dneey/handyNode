/**
 * This is where you can set your responses.
 * Useful if you intend to use a response at many places.
 * 
 * No need to re create it, call this class and pass it your response methods.
 * Thats it!
 * 
 * You can add as many as you like.
 */

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
    // if (typeof(data) != []) {
    //     data = [data];
    // }
    return { 'responseMessage': message, 'responseCode': status ,'data': data };
}
// exports.response = response();