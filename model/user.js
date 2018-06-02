const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../models/database');

// user schema
const UserSchema = mongoose.Schema(
    {
        name: 
        {
            type: string
        },
        email: 
        {
            type: string,
            required: true
        },
        username: 
        {
            type: string,
            required: true
        },
        password:
        {
            type: string, 
            required: true
        }
    }
);

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByID = function(id, callback)
{
    User.findById(id, callback);

}
module.exports.getUserByUsername = function(username, callback)
{
    const query = {username: username};
    User.findOne (query, callback);
}
module.exports.addUser = function(newUser, callback)
{
    bcrypt.genSalt(10, (err, salt) =>
{
    bcrypt.hash(newUser.password, salt, (err, hash) =>
{
    if(err){throw err};
    newUser.password = hash
    newUser.save(callback);

})
});
}


