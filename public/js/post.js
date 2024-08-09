// fuctions for update & delete a post 
// update a post
const updatePostHandler = async (event) => {
    event.preventDefault();
    // const updatePostContent = document.querySelector('#updatePostContent').value.trim();
    const updatePostContent = document.querySelector('#textAreaPostContent').value.trim();
    if (updatePostContent) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ updatePostContent }),
            headers: { 'Content-Type': 'application/json', },
            });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
               }
        }
};

// delete a post
const deletePostHandler = async (event) => {
    event.preventDefault();
    console.log('In delete post');
    const id = event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
          });
    if (response.ok) {
        document.location.replace('/dashboard');
       } else {
        alert('Failed to delete post');
       }
};

document
  .querySelector('.updatePostForm')
  .addEventListener('submit', updatePostHandler);

  document
  .querySelector('.deletePostForm')
  .addEventListener('submit', deletePostHandler);
  


    