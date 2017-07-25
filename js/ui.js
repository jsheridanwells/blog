//months array for displaying date of post
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let data = {};

let addBlogEntry = document.getElementById('add-blog-entry');
let blogList = document.getElementById('blog-list');
let entryField = document.getElementById('entry-field');
let blogField = document.getElementById('blog-field');

let titleField = document.getElementById('title-field');
let blogText = document.getElementById('blog-text');
let postButton = document.getElementById('post-button');

function showEntry() {
	addBlogEntry.classList.toggle('active');
	blogList.classList.toggle('active');
	entryField.classList.remove('hidden');
	entryField.classList.add('visible');
}

function showBlog() {
	addBlogEntry.classList.toggle('active');
	blogList.classList.toggle('active');
	entryField.classList.remove('visible');
	entryField.classList.add('hidden');
}

function getPostData() {
	data = {
		title: titleField.value,
		text: blogText.value
	}
}

function getDate() {
	let now = new Date();
	return now;
}

function postData(title, text) {
	let post = document.createElement('p');
	post.className = 'article';
	post.innerText = text;
	let blogTitle = document.createElement('h2');
	blogTitle.className = 'title';
	blogTitle.innerText = title;
	blogField.appendChild(blogTitle);
	blogField.appendChild(post);
	titleField.value = '';
	blogText.value = '';
}
// 3.  user clicks add entry button
//   3.1 get value of title field
//   3.2 get value of post
//   3.3 get month of post
//   3.4 get date of post
//   3.5 get year of post

// 4. values of title, post, and date are added to the page
//   4.1 title in h2 class title
//   4.2 post in p class article
//   4.3 month, date, and year in date field

addBlogEntry.addEventListener('click', showEntry);
blogList.addEventListener('click', showBlog);
postButton.addEventListener('click', ()=>{
	getPostData();
	postData(data.title, data.text);
	showBlog();
});