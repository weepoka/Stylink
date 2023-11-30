const apiUrl = import.meta.env.VITE_REACT_APP_SERVER;
const getAllProducts = (setProducts) => {
  const getData = async () => {
    try {
      const res = await fetch(`${apiUrl}/products/dispayProducts`);
      const data = await res.json();
      if (res.ok) {
        setProducts(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();
};
const getCategories = (setCategory, setCategoriesArray) => {
  const getData = async () => {
    try {
      const res = await fetch(`${apiUrl}/category`);
      const data = await res.json();
      if (res.ok) {
        setCategory(data.data);
        setCategoriesArray(data.categoriesArray);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();
};

const getProductsByCategory = (setCategoryData, id, subCategory) => {
  const getData = async () => {
    try {
      const res = await fetch(`${apiUrl}/products?category=${id}`);
      const data = await res.json();
      if (res.ok) {
        if (subCategory) {
          const productsBysubCatgory = data.data.filter(
            (prod) => prod.subcategory === subCategory
          );
          return setCategoryData(productsBysubCatgory);
        }
        setCategoryData(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData();
};

export { getCategories, getProductsByCategory, getAllProducts };
