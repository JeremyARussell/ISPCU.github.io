var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MemberSchema = new Schema({
    firstName: { type: String, default: '', trim: true },   //
    lastName: { type: String, default: '', trim: true },    //
    password: { type: String, default: '', trim: true },    //
    confPassword: { type: String, default: '', trim: true },     //
    email: { type: String, default: '', trim: true }


});

MemberSchema
    .path('firstName')
    .validate(function(value) {
        if(value)return value.length > 0;
    }, 'Member name cannot be blank');
MemberSchema
    .path('lastName')
    .validate(function(value) {
        if(value)return value.length > 0;
    }, 'Member email cannot be blank');
MemberSchema
    .path('password')
    .validate(function(value) {
        if(value)return value.length > 0;
    }, 'Member ISP cannot be blank');
MemberSchema
    .path('confPassword')
    .validate(function(value) {
        if(value)return value.length > 0;
    }, 'Member address cannot be blank');
MemberSchema
    .path('email')
    .validate(function(value) {
        if(value)return value.length > 0;
    }, 'Member phone number cannot be blank');

mongoose.model('Member', MemberSchema);