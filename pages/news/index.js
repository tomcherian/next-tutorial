import TestComp from "../../components/testComp";

const NewsArticle = ({ articles }) => {
  return (
    <>
      <h1>List of news article</h1>
      {articles.map((article) => (
        <div key={article.id}>
          {article.id} {article.title} | {article.category}
          <TestComp text={article.title} />
        </div>
      ))}
    </>
  );
};

export default NewsArticle;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      articles: data,
    },
  };
}
