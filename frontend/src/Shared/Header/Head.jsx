import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className="bg-primary text-gray-100 py-2 hidden lg:block">
        <div className="container flex justify-between mx-auto flex-wrap ">
          <div className=" flex  gap-5">
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
          <div className="text-gray-300 ">
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/stylinktech?utm_source=qr&igshid=YzU1NGVlODEzOA=="
            >
              <Icon
                icon="ri:instagram-fill"
                width={25}
                className=" hover:scale-105"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
