export default async function PostDetails({ postId }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 60, // Revalidate every 60 seconds
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch post with id ${postId}`);
  }

  const post = await response.json();

  return (
    <div>
      <div
        style={{
          margin: "20px",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
          color: "#333",
        }}
      >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>
          <strong>Author ID:</strong> {post.userId}
        </p>
        <p>
          <strong>Post ID:</strong> {post.id}
        </p>
        {/* Created At field removed because the API does not provide it */}
      </div>
    </div>
  );
}
