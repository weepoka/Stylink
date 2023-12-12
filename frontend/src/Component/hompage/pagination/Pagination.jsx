import React from "react";
import { MdFirstPage, MdLastPage, MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Pagination = ({
  currentPage,
  totalPages,
  paginate,
  nextPage,
  prevPage,
  goToFirstPage,
  goToLastPage,
}) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex justify-center gap-2 md:gap-5 mt-8">
        <div className=" flex flex-col md:flex-row gap-2">
          <button
            onClick={goToFirstPage}
            className="mx-2 px-3 py-2 text-white
             duration-300 hover:bg-button bg-gray-900"
            disabled={currentPage === 1}
          >
            <MdFirstPage />
          </button>
          <button
            onClick={prevPage}
            className="mx-2 px-3 py-2 text-white
             duration-300 hover:bg-button bg-gray-900"
            disabled={currentPage === 1}
          >
            <GrFormPrevious />
          </button>
        </div>
        <div className="flexCenter">
          {Array.from({ length: Math.min(3, totalPages) }).map((_, index) => {
            const pageNumber = currentPage - 1 + index + 1;
            return (
              pageNumber <= totalPages && (
                <button
                  key={pageNumber}
                  onClick={() => paginate(pageNumber)}
                  className={`mx-2 px-3 py-2 text-white duration-300  ${
                    currentPage === pageNumber ? "bg-button" : "bg-secondary"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            );
          })}
        </div>
        <div className=" flex flex-col md:flex-row gap-2">
          <button
            onClick={nextPage}
            className="mx-2 px-3 py-2 text-white duration-300 hover:bg-button bg-gray-900"
            disabled={currentPage === totalPages}
          >
            <MdNavigateNext />
          </button>
          <button
            onClick={goToLastPage}
            className="mx-2 px-3 py-2 text-white duration-300 hover:bg-button bg-gray-900"
            disabled={currentPage === totalPages}
          >
            <MdLastPage />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
