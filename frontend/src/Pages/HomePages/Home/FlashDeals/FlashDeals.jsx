import { FaBolt } from "react-icons/fa6";
import FlashCard from "./FlashCard";
const FlashDeals = () => {
  return (
    <div className="bg-[#f6f9fc] py-10">
      <section className="container ">
        <div className="text-wrapper">
          <h1>
            12.12 fest is ongoing by you best product get free shipping delivery
            charge
          </h1>
        </div>
      </section>
      <section className="container ">
        <div className="flexStart gap-2 ">
          <FaBolt size={25} className="text-red-500" />
          <h1 className="bold-32 text-primary">Flash Deals</h1>
        </div>
        <FlashCard />
      </section>
    </div>
  );
};

export default FlashDeals;
