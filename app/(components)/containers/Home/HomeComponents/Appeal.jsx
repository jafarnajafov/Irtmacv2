"use client";
import MaxWidth from "@/app/(components)/MaxWidth/MaxWidth";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

import Swal from "sweetalert2";

const Appeal = ({ data, data_translate }) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullname: "",
    number: "",
    service_id: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Sadece rakam kontrolü
    if (name === "number" && !/^\d*$/.test(value)) {
      return; // Eğer değer rakam değilse, fonksiyonu durdur
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSelect = (title, id) => {
    setForm({
      ...form,
      service_id: id,
    });
    setDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}/homepage_post`,
      data: {
        ...form,
      },
    })
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: `${data_translate?.contact_text_1}`,
            text: `${data_translate?.contact_text_3}`,
            confirmButtonText: `${data_translate?.contact_text_4}`,
            customClass: { confirmButton: "text-black-700" },
          });
          setForm({
            fullname: "",
            number: "",
            service_id: "",
          });
          setLoading(false);
        }
      })
      .catch(() => {
        Swal.fire(`${data_translate?.contact_text_5}`, ``, "error");
        setLoading(false);
      });
  };

  return (
    <section className="my-[80px] lg:mt-[40px] lg:px-[20px]">
      <MaxWidth>
        <div className="mx-[120px] xl:mx-[60px] lg:mx-0 bg-[#f0f6f9] rounded-[30px] relative py-[40px] px-[120px] xl:px-[40px] md:px-[20px]">
          <Image
            width={1000}
            height={1000}
            alt="linear"
            src={"/contact_linear2.png"}
            className="w-full h-full absolute top-0 left-0 right-0 object-cover"
          />
          <div className="grid grid-cols-12 gap-[40px] md:gap-0">
            <div className="col-span-5 md:col-span-12">
              <div className="flex flex-col md:mb-[20px]">
                <h3 className="text-[36px] md:text-[25px] font-['TTForsTrial-Medium'] text-[#003b71]">
                  {data_translate?.muraciet}
                </h3>
                <p className="text-[14px] md:text-[12px] text-[#002d74] font-['TTForsTrial-Regular'] mt-[24px]">
                  {data_translate?.muraciet_long}
                </p>
              </div>
            </div>
            <div className="col-span-7 md:col-span-12 relative z-40">
              <form
                onSubmit={handleSubmit}
                className="w-full pl-[60px] md:pl-0"
              >
                <div className="flex flex-col gap-[16px]">
                  <div className="">
                    <input
                      id="fullname"
                      type="text"
                      value={form.fullname}
                      onChange={handleChange}
                      name="fullname"
                      className="w-full py-[16px] px-[32px] text-[14px] outline-none bg-[#fff] rounded-[70px] placeholder:text-[#5B748D]"
                      placeholder={data_translate?.adSoyad}
                    />
                  </div>
                  <div className="">
                    <input
                      id="number"
                      type="text"
                      value={form.number}
                      onChange={handleChange}
                      name="number"
                      className="w-full py-[16px] px-[32px] text-[14px]  outline-none bg-[#fff]  rounded-[70px] placeholder:text-[#5B748D]"
                      placeholder="994 00 000 00 00"
                    />
                  </div>
                  <div className=" relative">
                    <div
                      className="w-full py-[16px] px-[32px] outline-none rounded-[70px] text-[#5b748d] placeholder:text-[#5B748D] cursor-pointer bg-white"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-[16px] text-[#5b748d]">
                          {data?.find((cur) => cur.id === form.service_id)
                            ?.title || data_translate?.selectService}
                        </h3>
                        <span>
                          <img
                            src="/down-svg.svg"
                            className={` trans ${
                              dropdownOpen ? "rotate-180" : ""
                            }`}
                            alt="down"
                          />
                        </span>
                      </div>
                    </div>
                    {dropdownOpen && (
                      <ul className="absolute top-full left-0 w-full py-[10px] bg-white shadow-md z-10 rounded-[20px]">
                        {data &&
                          data.map((cur, i) => (
                            <li
                              key={i}
                              name="service_id"
                              className="px-[20px] py-[10px] text-[14px]  hover:bg-gray-200 cursor-pointer"
                              onClick={() => handleSelect(cur?.title, cur.id)}
                            >
                              {cur?.title}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex justify-end mt-[20px]">
                    <button className="flex   items-center justify-center text-[14px] rounded-[60px] gap-[20px] px-[41px] py-[15px] text-white  capitalize bg-[#003B71] h-full">
                      {loading ? data_translate?.sending : data_translate?.send}
                      <span>
                        <img src="/send.svg" alt="send" />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Appeal;
