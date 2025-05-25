export default function loadingPostDetails() {
  return (
    <div>
      <h1>Loading Post Details...</h1>
      <div
        style={{
          margin: "20px",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
          color: "#333",
        }}
      >
        <p>Please wait while we fetch the post details...</p>
      </div>
    </div>
  );
}
