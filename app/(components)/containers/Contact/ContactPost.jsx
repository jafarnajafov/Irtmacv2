"use client";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactPost = ({
  adSoyad,
  mesaj,
  sending,
  send,
  phones,
  emails,
  map,
  contact_text_2_1,
  contact_text_3_1,
  contact_text_4_1,
  contact_text_5_1,
  settingsNumber,
  settingsEmail,
  seetingsAdress,
}) => {
  const [form, setForm] = useState({
    email: "",
    number: "",
    fullname: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "number") {
      // Yalnızca rakamlara izin ver
      const newValue = value.replace(/[^0-9]/g, "");
      setForm({
        ...form,
        [name]: newValue,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    axios({
      method: "post",
      url: `${process.env.NEXT_PUBLIC_MAIN_URL}/contact_post`,
      data: form,
    })
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: contact_text_2_1,
            text: contact_text_3_1,
            confirmButtonText: contact_text_4_1,
            customClass: { confirmButton: "text-black-700" },
          });
          setForm({
            email: "",
            number: "",
            fullname: "",
            message: "",
          });
          setLoading(false);
        }
      })
      .catch(() => {
        Swal.fire(contact_text_5_1, ``, "error");
        setLoading(false);
      });
  };

  return (
    <>
      <div className=" bg-[#f0f6f9] relative z-30 rounded-[30px] h-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col px-[100px] xl:px-[20px] py-[40px] h-full "
        >
          <div className="grid grid-cols-12  h-full gap-[24px]">
            <div className="col-span-6 md:col-span-12 flex flex-col justify-between h-full gap-[20px] ">
              <input
                value={form.fullname}
                onChange={handleChange}
                type="text"
                id="fullname"
                name="fullname"
                placeholder={adSoyad}
                className="py-[16px] px-[24px] w-full text-[16px] border-none shadow-none rounded-[80px] outline-none placeholder:text-[#5B748D] placeholder:capitalize"
              />
              <input
                name="number"
                id="number"
                value={form.number}
                onChange={handleChange}
                type="text"
                placeholder="+994 00 000 00 00"
                className="py-[16px]  px-[24px] w-full text-[16px] border-none shadow-none rounded-[80px] outline-none placeholder:text-[#5B748D] placeholder:capitalize"
              />
              <input
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="text"
                placeholder={emails}
                className="py-[16px]  px-[24px] w-full text-[16px] border-none shadow-none rounded-[80px] outline-none placeholder:text-[#5B748D] placeholder:capitalize"
              />
            </div>
            <div className="col-span-6 md:col-span-12">
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={mesaj}
                className="py-[16px] mb-4 px-[24px] w-full text-[16px] border-none shadow-none rounded-[20px] outline-none placeholder:text-[#5B748D] placeholder:capitalize resize-none h-full lg:h-[200px]"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end mt-[24px]">
            <button className="flex items-center bg-[#003B71] px-[31px] py-[13px] text-[16px] capitalize text-white rounded-[60px]">
              {loading ? sending : send}
              <span className="block pl-3">
                <img src="/send.svg" alt="send" />
              </span>
            </button>
          </div>
        </form>
      </div>
      <div className=" flex justify-center items-start md:mt-[20px]">
        <div className="bg-[#009ade] w-full  px-[120px] xl:px-[20px] py-[40px] mx-[120px] lg:mx-[20px] md:mx-[10px] rounded-bl-[30px] rounded-br-[30px] md:rounded-[30px]">
          <div className="grid grid-cols-12  ">
            <div className="flex flex-col md:items-center gap-[16px] col-span-4 md:col-span-12 md:mb-[20px]">
              <Image width={24} height={24} alt="map" src={"/location.svg"} />
              <h6 className="text-[14px] text-white">{map}</h6>
              <a
                className="text-white font-semibold text-[18px] lg:text-[12px] w-[80%] md:w-full md:text-center"
                href="#"
              >
                {seetingsAdress}
              </a>
            </div>
            <div className="flex flex-col md:items-center gap-[16px] col-span-4 md:col-span-12 md:mb-[20px]">
              <Image width={24} height={24} alt="map" src={"/phone.svg"} />
              <h6 className="text-[14px] text-white">{phones}</h6>
              <a
                className="text-white font-semibold text-[18px] lg:text-[12px]  md:text-center"
                href={`tel:${settingsNumber}`}
              >
                {settingsNumber}
              </a>
            </div>
            <div className="flex flex-col md:items-center gap-[16px] col-span-4 md:col-span-12">
              <Image width={24} height={24} alt="map" src={"/email.svg"} />
              <h6 className="text-[14px] text-white">{emails}</h6>
              <a
                className="text-white font-semibold text-[18px] lg:text-[12px]  md:text-center"
                href={`mailto:${settingsEmail}`}
              >
                {settingsEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPost;
