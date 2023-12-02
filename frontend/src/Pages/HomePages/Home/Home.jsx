import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Feature from "./Feature/Feature";
import FlashDeals from "./FlashDeals/FlashDeals";
import NewArival from "./NewArrival/NewArival";
import Products from "./Product/Products";
import Wrapper from "./Wrapper/Wrapper";

const Home = () => {
  return (
    <div>
      <Banner />
      <Feature />
      <Category />
      <FlashDeals />
      <NewArival />
      <Products />
      <Wrapper />
    </div>
  );
};

export default Home;
