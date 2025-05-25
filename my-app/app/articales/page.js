import Link from "next/link";
import React from "react";

// This is the main page for articles, which will list all articles and provide a link to create a new article.

const page = () => {
  return (
    <div>
      <h1>Articles</h1>
      <p>List of articles will be displayed here.</p>

      <Link href="/articles/new">
        <button>Create New Article</button>
      </Link>
    </div>
  );
};

export default page;
