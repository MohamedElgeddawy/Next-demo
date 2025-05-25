export default function ShowArticlePage(props) {
  return (
    <div>
      <h1>Show Article </h1>
      <h1>{props.params.title}</h1>
      <p>Content of the article goes here.</p>
    </div>
  );
}
