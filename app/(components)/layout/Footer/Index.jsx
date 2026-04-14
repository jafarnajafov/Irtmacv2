import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import MaxWidth from "../../MaxWidth/MaxWidth";

const Footer = ({ data, params, footer_text }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#002d74]   w-full px-8 py-8 relative rounded-tl-[20px] rounded-tr-[20px] ">
      <MaxWidth>
        <div className="flex items-center justify-between lg:flex-col-reverse lg:gap-4">
          <div className="left ">
            <p className="text-[#C5CEE0] text-[12px] lg:text-center lg:relative lg:z-50">
              <Link href={`/${params?.code}`}>{footer_text} IRTMAC</Link>
              <span> {year}</span>
            </p>
          </div>

          <div className="right  z-30">
            <ul className="flex items-center gap-4 text-[#002d74]">
              <li className=" bg-[#fff] rounded-full  text-[16px]">
                <Link
                  target="_blank"
                  href={`${data?.settings?.facebook}`}
                  className="block w-full p-2"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li className=" bg-[#fff] rounded-full  text-[16px]">
                <Link
                  target="_blank"
                  href={`${data?.settings?.instagram}`}
                  className="block w-full p-2"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className=" bg-[#fff] rounded-full  text-[16px]">
                <Link
                  target="_blank"
                  href={`${data?.settings?.instagram}`}
                  className="block w-full p-2"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="bg-[#fff] rounded-full  text-[16px]">
                <Link
                  target="_blank"
                  href={`${data?.settings?.youtube}`}
                  className="block w-full p-2"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidth>
    </footer>
  );
};

export default Footer;
