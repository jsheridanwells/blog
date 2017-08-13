'use strict';

let Factory = require('./blog_factory.js');

let Blog = {};

//post blog data read from JSON file
Blog.postBlogs = (data) => {
	data.forEach((post)=>{
		let $section = $('<section></section>');
		let content = `
			<h2 class="title">${post.title}</h2>
			<p class="article">${post.post}</p>
		`;
		$section.html(content);
		$('#blog-field').append($section);
	});
};

//post blog titles to sidebar read from JSON file
Blog.postSidebar = (data) => {
	data.forEach((title)=>{
		let $li = $('<li></li>');
		let content = `
			<a href="#">${title.title}</a>
		`;
		$li.html(content);
		$('#sidebar-list').append($li);
	});
};

//load JSON data and post data to DOM w/ above functions
Factory.loadPosts()
	.then(function(data){
		Blog.postBlogs(data);
		Blog.postSidebar(data);
	});

module.exports = Blog;