'use strict';

let Factory = {};

Factory.loadPosts = function() {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: 'https://a-developers-primer.firebaseio.com/posts.json'
		}).done(function(data){
			resolve(data);
		}).fail(function(xhr, status, error){
			reject(error);
		});
	});
};

module.exports = Factory;