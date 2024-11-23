import React from "react";
import Image from "next/image";
import Link from "next/link";
const hero = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1">
      <div>
        <Image
          src="/images/mypic.png"
          alt="my pic"
          width={300}
          height={300}
          className="rounded-full ml-[10%] lg:ml-[15%]  mt-10"
        />
      </div>

      <div className="ml-[0%] lg:ml-[15%]">
        <h2 className="text-6xl gap-y-10 text-left ml-[10%] mt-[100px] font-bold text-green-500 ">
          Hello,<br />I am <br />M.Jamil <br />Raza Attari
        </h2>

        <div className="ml-[10%] flex gap-7 mt-12">
          <button className="text-2xl p-3 border-2 border-green-500 rounded-2xl hover:bg-green-500"><Link href="/about">About Me</Link></button>

          <button className="text-2xl p-3 border-2 border-green-500 rounded-2xl hover:bg-green-500"><Link href="/contact">Contact Me</Link></button>
        </div>
      </div>
    </div>
  );
};

export default hero;
