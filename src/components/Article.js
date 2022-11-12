export default function Article({ article }) {
  return (
    <article>
      {!article ? (
        <p>No article selected</p>
      ) : (
        <section>
          <h2>{article.title}</h2>
          <p className="body">{article.body}</p>
          <p className="date">{`Posted: ${article.date}`}</p>
        </section>
      )}
    </article>
  );
}