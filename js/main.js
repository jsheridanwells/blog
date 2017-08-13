let xhr = new XMLHttpRequest();

xhr.onload = function () {
	if (xhr.status === 200) {
		let blog = JSON.parse(xhr.responseText);
		let content, article;
		for (let i = 0; i < blog.posts.length; i++) {
			article = document.createElement('article');
			article.id = blog.posts[i].id;
			content = `
				<h2 class="title">${blog.posts[i].title}</h2>
				<p class="article">${blog.posts[i].post}</p>
			`;
			article.innerHTML = content;
			blogField.appendChild(article);
		}
	}
}

xhr.open('GET', 'js/blog.JSON');
xhr.send();