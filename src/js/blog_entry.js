'use strict';

let Blog = require('./blog_controllers.js');

let count = 4;

//create new post with id, title, and post body and return as an array
function createPostData() {
	let arr = [];
	let data = {};
	count++;
	data.id = count;
	data.title = $('#title-field').val();
	data.post = $('#blog-text').val();
	arr.push(data);
	return arr;
}

//read values from entry field and post to blog field and sidebar
$('#post-button').click(() => {
	if ($('#title-field').val() !== '' && $('#blog-text').val() !== '') {
		Blog.postBlogs(createPostData());
		Blog.postSidebar(createPostData());
		$('#blog-field').removeClass('hidden').addClass('visible');
		$('#entry-field').removeClass('visible').addClass('hidden');
	}
	$('#title-field').val('');
	$('#blog-text').val('');
});

//show entry field, hide blog field
$('#add-blog-entry').click(() => {
	$('#entry-field').removeClass('hidden').addClass('visible');
	$('#blog-field').removeClass('visible').addClass('hidden');
});

//show blog field, hide entry field
$('#blog-list').click(()=>{
	$('#blog-field').removeClass('hidden').addClass('visible');
	$('#entry-field').removeClass('visible').addClass('hidden');
});