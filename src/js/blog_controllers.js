'use strict';

let Factory = require('./blog_factory.js');

function postBlogs(data) {
	data.forEach((post)=>{
		let $section = $('<section></section>');
		let content = `
			<h2 class="title">${post.title}</h2>
			<p class="article">${post.post}</p>
		`;
		$section.html(content);
		$('#blog-field').append($section);
	});
}

function postSidebar(data) {
	data.forEach((title)=>{
		console.log("title", title.title);
		let $li = $('<li></li>');
		let content = `
			<a href="#">${title.title}</a>
		`;
		$li.html(content);
		$('#sidebar-list').append($li);
	});
}

Factory.loadPosts()
	.then(function(data){
		postBlogs(data);
		postSidebar(data);
	});