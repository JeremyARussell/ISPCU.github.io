var db = require('../services/db.js'),
    Member = db.model('Member');

module.exports = {
    post: function (req, res) {
        console.log(req.body);//For debugging
        Member.create({firstName: req.body.firstName,       lastName: req.body.lastName,             password: req.body.password,
                       confPassword: req.body.confPassword, email: req.body.email
        }, function(err, tm) {
            if (err) res.send(500, err);

            res.json(201, {
                message: 'Member created!',
                Member: tm
            });

        });
    },

    get: function (req, res) {
        Member.find()
            .exec(function(err, tms) {
                if (err) res.send(500, err);
                res.json(tms);
            });
    }
};




