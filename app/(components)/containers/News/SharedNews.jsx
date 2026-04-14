"use client";
import { FaFacebook, FaLinkedinIn, FaLink } from "react-icons/fa";

import { FacebookShareButton, LinkedinShareButton } from "react-share";
import Swal from "sweetalert2";

const SharedNews = ({ params, title, copy1, share }) => {
  const href = `${process.env.NEXT_PUBLIC_SITE_NAME}/${params?.code}/xeberler/${params?.id}/${params?.slug}`;

  function copyEmail() {
    const emailElement = window?.location?.href;
    if (emailElement) {
      const href = emailElement;
      if (navigator.clipboard && href) {
        navigator.clipboard
          .writeText(href)
          .then(() => {
            Swal.fire(`${copy1}`, `${href}`, "success");
          })
          .catch((err) => {
            console.error("Error:", err);
          });
      }
    }
  }

  return (
    <>
      <div className="fixed top-[500px] right-[40px] lg:right-[10px] z-50">
        <div className=" border border-[#C5CEE0] lg:w-full  z-30 bg-white  px-[30px] lg:px-[10px] py-[16px]  rounded-[20px]  w-max">
          <h4 className="text-[#002d74] font-semibold  text-[14px] mb-6 ">
            {share}
          </h4>
          <ul className="flex flex-col gap-[16px] justify-center lg:justify-around items-center lg:w-full">
            <li className="bg-[#009ade] rounded-full p-[10px] lg:p-[8px] mb-4 cursor-pointer lg:mb-0 flex justify-center items-center">
              <FacebookShareButton
                url={href}
                title={title}
                quote={title}
                description={title}
              >
                <FaFacebook className="text-2xl lg:text-xl  text-white" />
              </FacebookShareButton>
            </li>

            <li className="bg-[#009ade] rounded-full p-[10px] lg:p-[8px] mb-4 cursor-pointer lg:mb-0 flex justify-center items-center">
              <LinkedinShareButton
                url={href}
                title={title}
                quote={title}
                description={title}
              >
                <FaLinkedinIn className="text-2xl lg:text-xl  text-white" />
              </LinkedinShareButton>
            </li>
            <li
              className="bg-[#009ade] rounded-full p-[10px] lg:p-[8px] cursor-pointer lg:mb-0"
              onClick={copyEmail}
            >
              <FaLink className="text-2xl lg:text-xl  text-white" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SharedNews;
