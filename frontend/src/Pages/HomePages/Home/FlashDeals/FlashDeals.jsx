import { FaBolt } from "react-icons/fa6";
import FlashCard from "./FlashCard";
import { Link } from "react-router-dom";
const FlashDeals = () => {
  return (
    <div className="bg-[#f6f9fc] pb-10">
      <section className="container ">
        <div className="flexBetween gap-2 ">
          <div className="flex gap-2">
            <FaBolt size={25} className="text-red-500" />
            <h1 className="bold-20 md:bold-32 text-primary">Flash Deals</h1>
          </div>
          <div>
            <Link
              to="/flash"
              className="bold-16 mx-10 text-button hover:text-primary"
            >
              View All
            </Link>
          </div>
        </div>
        <FlashCard />
      </section>
    </div>
  );
};

export default FlashDeals;
