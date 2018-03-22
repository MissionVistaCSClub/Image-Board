const express = require('express');

const Boards = require(_base + 'models/board');

module.exports = {
	'/read/boards' : {
		methods: ['get'],
		fn: function(req, res, next) {
			let category = req.query.category,
				name = req.query.name,
				letter = req.query.letter,
				favicon = req.query.favicon;

			let boards = Boards.find({letter: letter}, function(err, results) {
				if(err) {
					return console.log("error"); //probably wrong sorry
				} else {
					res.json({results: results});	//TODO	
				}
			});
		}
	}
}
