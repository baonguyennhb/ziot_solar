var Station = require('../models/station.model')

module.exports.list = function(req, res) {
	//let user = req.userId;
	console.log("==============")
	//console.log("user = " + user)
	//console.log(req)
	Station.find().then(function(stations){
		res.render('admin/stations/list', {
			stations: stations
		});
	});
};

module.exports.getAdd = function(req, res) {
	Station.find().then(function(stations){
		res.render('admin/stations/add', {
			stations: stations
		});
	});
};

module.exports.postAdd = async function(req, res) {
	//Create a new station
    try {
        const station = new Station(req.body)
        console.log(station)
        await station.save()
        //const token = await user.generateAuthToken()
        res.status(201).send({"result": 1, station })
    } catch (error) {
        res.status(400).send({"result": 0, error})
    }
};

module.exports.getEdit = function(req, res) {
	var id = req.params.id;
	Station.findById(id).then(function(station){
		res.render('admin/stations/edit', {
			station: station
		});
	});
};

module.exports.postEdit = function(req, res) {
	var query = {"_id": req.params.id};
	var data = {
		"name" : req.body.name,
	    "description" : req.body.description,
	    "address" : req.body.address,
	    "information" : req.body.information,
	    "type" : req.body.type,
	    "active" : req.body.active,
	    "is_main" : req.body.is_main,
	    "note" : req.body.note,
	    "priority" : req.body.priority
	}
	console.log(query)
	Station.findOneAndUpdate(query, data, {'upsert':true}, function(err, doc){
	    if (err) return res.send(500, { error: err });
	    res.redirect('/admin/station');
	});

};

module.exports.getDelete = function(req, res) {
	var id = req.params.id;
	Station.findByIdAndDelete(id, function(err, doc){
	    if (err) return res.send(500, { error: err });
	    res.redirect('/admin/station');
	});

};