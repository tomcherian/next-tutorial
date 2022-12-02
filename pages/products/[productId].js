import { useRouter } from "next/router";

const Product = ({ product }) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <h2> Loading...</h2>;
  }
  return (
    <>
      <h1>
        {product.id} {product.title}
      </h1>
      <p>{product.price}</p>
    </>
  );
};

export default Product;

export async function getStaticPaths() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  const paths = data.map((product) => ({
    params: {
      productId: `${product.id}`,
    },
  }));
  return {
    paths: [
      {
        params: {
          productId: "1",
        },
      },
    ],
    // paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
