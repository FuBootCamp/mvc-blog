
const newCommentHandler = async (event) => {
    event.preventDefault();

    const newCommentContent = document.querySelector('#newComment').value.trim();
    console.log(newCommentContent);
    if (newCommentContent) {
        if (event.target.hasAttribute('data-id')) {
            const post_id = event.target.getAttribute('data-id');
            // console.log(post_id)
            const response = await fetch(`/api/comments/${post_id}`, {
                    method: 'POST',
                    body: JSON.stringify({ newCommentContent }),
                    headers: { 'Content-Type': 'application/json',
                    },
        });
        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Failed to create comment');
               }
        }
    }

};
  
document
  .querySelector('.addNewCommentForm')
  .addEventListener('submit', newCommentHandler);
