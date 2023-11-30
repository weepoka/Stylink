import { Icon } from "@iconify/react";

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
            <Icon icon="ic:baseline-facebook" width={25} />
            <Icon icon="ri:instagram-fill" width={25} />
            <Icon icon="mingcute:youtube-fill" width={25} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
