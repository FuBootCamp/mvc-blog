
const newPostHandler = async (event) => {
    event.preventDefault();
    console.log('Entrando a la funsion gotoNewPostScreen');
    const newPostTitle = document.querySelector('#newPostTitle').value.trim();
    const newPostContent = document.querySelector('#textAreaPostContent').value.trim();
    console.log(newPostTitle, newPostContent);
    if (newPostTitle && newPostContent) {
        const post_id = event.target.getAttribute('data-id');
        console.log('antes del fetch')
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ newPostContent, newPostTitle }),
            headers: { 'Content-Type': 'application/json',
                    },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
               }
        }
};

document
  .querySelector('.addNewPostForm')
  .addEventListener('submit', newPostHandler);
