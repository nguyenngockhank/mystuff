var db = require('../models');
var mdt_functions = require('../mdt_functions');

module.exports = {
    postSearch: function(req, res){
        //POST DUA VAO
        var pagination = req.body.pagination;
        var post_fields = req.body.filters;
        var select = req.body.select;
        //END POST DUA VAO

        var sql = "";
        sql = mdt_functions.commonSearch(post_fields);

        db.mdtClnRedimedReferral.findAndCountAll({
            where: [sql],
            offset: pagination.offset,
            limit: pagination.limit,
            attributes: select,
            order: 'Creation_date DESC'
        })
        .success(function(result){
            if(!result){
               res.json({"status": "error", "message": "Database Error"});
            } else {
               res.json({"status": "success", "data": result.rows, "count": result.count});
            }
        }).error(function(error){
            res.json({"status": "error", "message": "Internal Server Error"});
        });
    }, // end post search
    postFindById: function(req, res){
        var ID = req.body.ID;
        db.mdtClnRedimedReferral.find({where:{'ID': ID}},{raw:true})
        .success(function(data){
            res.json(data);
        })
        .error(function(err){
            console.log(err);
            res.json(500, {status: 'error', message: 'Cannot Select'});
        })
    },
    postInsert: function(req,res){
        var data = req.body.data; // JSON object data
        db.mdtClnRedimedReferral.create(data).success(function(){
            res.json({status:"success"});
        })
        .error(function(err){
            console.log(err);
            res.json(500, {status: 'error', message: 'Cannot Insert'});
        });
    },
    postUpdate: function(req, res){
        var data = req.body.data; // JSON object data
        var ID = req.body.ID;
        db.mdtClnRedimedReferral.update(data, {'ID': ID})
        .success(function(){
            res.json({status:"success"});
        })
        .error(function(err){
            console.log(err);
            res.json(500, {status: 'error', message: 'Cannot Update'});
        });
    },
    postDelete: function(req,res){
        var ID = req.body.ID;
        db.mdtClnRedimedReferral.destroy({'ID':ID})
        .success(function(data){
            res.json({status:'success'})
        })
        .error(function(err){
            console.log(err);
            res.json(500, {status: 'error', message: 'Cannot Delete'});
        })
    }
};