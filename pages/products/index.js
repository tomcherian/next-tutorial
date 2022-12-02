import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`products/${product.id}`} passHref>
            <h2>{product.title}</h2>
          </Link>
          <p>{product.price}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ProductList;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
    // revalidate: 10,
  };
}
