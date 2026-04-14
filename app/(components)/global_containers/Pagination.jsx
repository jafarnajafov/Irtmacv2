// MyPagination.js
import Link from "next/link";
import React from "react";

// This is now a Server Component! No "use client" needed.
const MyPagination = ({ totalPage, currentPage, basePath }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  // Ensure currentPage is a number for comparisons
  const currentNumPage = Number(currentPage);

  return (
    <div className="flex justify-center mt-5 pt-5">
      <div className="flex justify-center gap-[20px] items-center w-max px-11 py-2 border border-[#E9ECF4]">
        {/* Previous Page Link */}
        <Link
          href={`${basePath}?page=${currentNumPage - 1}`}
          className={
            currentNumPage === 1 ? "pointer-events-none opacity-50" : ""
          }
          aria-disabled={currentNumPage === 1}
        >
          <img src="/arrow-narrow-left.svg" alt="arrow" />
        </Link>

        <div className="flex items-center gap-2">
          {pageNumbers.map((pageNum) => (
            <Link
              key={pageNum}
              href={`${basePath}?page=${pageNum}`}
              className={`px-4 lg:px-2 py-2 lg:py-1 text-[14px] font-normal hover:text-[#009ade] header_tr ${
                currentNumPage === pageNum ? "text-[#009ade] font-bold" : ""
              } rounded-md`}
            >
              {pageNum}
            </Link>
          ))}
        </div>

        {/* Next Page Link */}
        <Link
          href={`${basePath}?page=${currentNumPage + 1}`}
          className={
            currentNumPage === totalPage ? "pointer-events-none opacity-50" : ""
          }
          aria-disabled={currentNumPage === totalPage}
        >
          <img
            className="rotate-[-180deg]"
            src="/arrow-narrow-left.svg"
            alt="arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default MyPagination;
