import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <>
      <h1>Post List</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`posts/${post.id}`} passHref>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
    revalidate: 10,
  };
}
