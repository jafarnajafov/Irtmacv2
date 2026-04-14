
import Image from "next/image";
import Link from "next/link";


const NotFound = () => {

  return (
    <div className="flex items-center justify-evenly min-h-[80vh] flex-col">
      <p className="mt-6 text-[#003B71] text-4xl font-bold xl:text-2xl  ">
       
      </p>
      <Image
        width={1000}
        height={500}
        priority 
        src="/notfound.png"
        className="xl:w-[700px] lg:w-[400px] md:w-[300px]"
      />
      <Link
        href="/"
        className=" bg-[#003B71] flex items-center px-8 py-3 capitalize text-white font-medium"
      >
      
        <span className="pl-3 block">
          <img src="/right.svg" alt="right" />
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
