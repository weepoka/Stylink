import { Icon } from "@iconify/react";
import cartSlice from "./../../Redux/Store/cartSlice";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="bg-primary text-gray-100 py-2 hidden lg:block">
        <div className="container grid grid-cols-3 ">
          <div className=" flexStart  gap-5">
            <div className=" flex  items-center gap-1 text-sm font-semibold">
              <Icon icon="bi:telephone-fill" />
              <a href="tel:+88 013326-01555">+88 013326-01555</a>
            </div>
            <div className=" flex  items-center gap-1  text-sm font-semibold">
              <Icon icon="mdi:email" />
              <a href="mailto:stylinkitsolution@gmail.com">
                stylinkitsolution@gmail.com
              </a>
            </div>
          </div>
          <div className="text-gray-300 text-center">
            <h1>Free shipping order over -Tk. 1000</h1>
          </div>
          <div className=" gap-2 flexEnd ">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=61553197613641"
            >
              <Icon
                icon="ic:baseline-facebook"
                width={25}
                className=" hover:scale-105"
              />
            </a>
            <Link>
              <Icon
                icon="ri:instagram-fill"
                width={25}
                className=" hover:scale-105"
              />
            </Link>
            <Link>
              <Icon
                icon="mingcute:youtube-fill"
                width={25}
                className=" hover:scale-105"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
