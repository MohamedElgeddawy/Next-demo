import Todo from "../components/todo";
import Link from "next/link";

export default async function PostsPages() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120, // Revalidate every 120 seconds
    },
  });
  const posts = await response.json();

  const postsJSX = posts.map((post) => (
    <Link href={`/posts/${post.id}`} key={post.id} style={{ textDecoration: "none", color: "inherit", width: "70%" }}>
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
          color: "#333",
        }}
      >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Todo />
      </div>
    </Link>
  ));

  return (
    <div>
      <h1>Posts</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {postsJSX}
      </div>
    </div>
  );
}
