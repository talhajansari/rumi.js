/* =============================================================================
 INITIALIZE
===============================================================================*/
var express = require('express');
var router = express.Router();

var path_to_pages = './client//public/pages'
var path_to_assets = './client/public/assets'

/* =============================================================================
 ASSETS 
===============================================================================*/

router.get('/assets/*', function(req, res) {
	var path = req.params[0]
	res.contentType(path_to_assets + '/' + path);
	res.sendfile(path_to_assets + '/' + path); 
});

router.get('/media/*', function(req, res) {

	console.log(req);
	
	var page = req.params.page;
	var path = req.params[0]
	res.contentType(path_to_pages + '/' + page + '/' + path);
	res.sendfile(path_to_pages + '/' + page + '/' + path); 
});

router.get('/:page/media/*', function(req, res) {

	var page = request.params.page;
	var path = req.params[0]
	res.contentType(path_to_pages + '/' + page + '/' + path);
	res.sendfile(path_to_pages + '/' + page + '/' + path); 
});

/* =============================================================================
 ROUTES
===============================================================================*/
router.get('/index', function(req, res) {
	res.sendfile(path_to_pages + '/index/index.html'); 
});



module.exports = router