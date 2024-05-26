import fetchRequest from "./fetchRequest";

const fetchProducts = async () => {
  try {
    const productData = await fetchRequest(
      "https://fakestoreapi.com/products?limit=9"
    );
    return productData;
  } catch (err) {
    console.log(err);
  }
};

export default fetchProducts;
