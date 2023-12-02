import FeatureCard from "./FeatureCard";
import { TbDiscount2, TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
const Feature = () => {
  const data = [
    {
      icon: <TbTruckDelivery className="text-4xl" />,
      title: "Free Delivery",
      desc: "Orders from all item",
    },
    {
      icon: <RiRefund2Fill className="text-4xl" />,
      title: "Return & Refund",
      desc: "Money Back Guarantee",
    },
    {
      icon: <TbDiscount2 className="text-4xl" />,
      title: "Member Discount",
      desc: "On Order Over $99.00",
    },
    {
      icon: <MdSupportAgent className="text-4xl" />,
      title: "Support 24/7",
      desc: "Contact us 24 hours a day",
    },
  ];
  return (
    <div>
      {" "}
      <div
        className="container 
 mx-auto grid gap-5 sm:grid-cols-2
  lg:grid-cols-4 mt-8 pb-10 "
      >
        {data.map((item) => (
          <FeatureCard
            title={item.title}
            icon={item.icon}
            desc={item.desc}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
