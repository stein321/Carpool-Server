var express = require('express'),
        bodyParser = require('body-parser'),
	    _ = require('underscore'),
	        json = require('./data/pools.json'),
		    app = express();

app.set('port', process.env.PORT || 3500);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var router = new express.Router();
// TO DO: Setup endpoints ...
app.use('/', router);

// GET
router.get('/', function(req, res) {
	res.json(json);
});
router.get('/test', function(req, res) {
	var data = {
		Id: '1',
		Username: 'BennyHahnah',
		Description: 'Carpool junkie!'
	};

	res.json(data);
});
// POST
router.post('/', function(req, res) {
	// insert new item into collection after validating
	if(req.body.Id && req.body.Username && req.body.Description) {
		json.push(req.body);
		res.json(json);
	} else {
		res.json(500, { error: 'Validation error may have occurred!' });
	}
});
// PUT
router.put('/:id', function(req, res) {
	// update an item in the collection
	if(req.params.id && req.body.Username && req.params.Description) {
		_.each(json, function(elem, index) {
			//find and update:
			if(elem.Id === req.params.id) {
				elem.Username = req.body.Username;
				elem.Description = req.body.Description;
			}
		});
		res.json(json);
	} else {
		res.json(500, { error: 'Update error occurred!' });
	}
});


var server = app.listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
