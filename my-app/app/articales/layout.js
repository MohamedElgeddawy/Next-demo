export const metadata = {
  title: "Articles",
  description: "List of articles and create new article",
};

export default function ({ children }) {
  return (
    <div>
      <h1>Articles Layout</h1>
      <div
        style={{
          marginTop: "20px",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        {children}
      </div>
    </div>
  );
}
