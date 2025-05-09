import { RiNotionFill } from "react-icons/ri";

import { RiGithubFill } from "react-icons/ri";

import Link from "next/link";

import { PiEggCrackLight } from "react-icons/pi";

import { MdOutlineMailOutline } from "react-icons/md";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiTistory } from "react-icons/si";
export default function Home() {
  return (
    <div className="m-0 flex justify-center items-center h-screen bg-amber-100">
      <section className="w-[700px] h-[500px] flex gap-10  items-center bg-amber-200">
        <div className="px-8">
          <PiEggCrackLight size={200} />
          {/* <LuTwitter size={100} className="absolute  left-72 top-62 z-100" /> */}
        </div>
        <div>
          <h2 className="text-3xl font-bold flex gap-2">
            박선영 |{" "}
            <p className="text-2xl relative top-1">Front-end-developer</p>
          </h2>
          <div className="flex gap-2 my-5">
            {" "}
            <MdOutlineMailOutline size={25} />
            <p> ggang89@gmail.com</p>
          </div>
          <div className="flex gap-2 my-3">
            <RiKakaoTalkFill size={25} />
            <p>psyoung0419</p>
          </div>

          <div className="flex my-7 items-center gap-10">
            <Link href="https://github.com/ggang89" target="_blank">
              <RiGithubFill size="45" className="hover:text-blue-600" />
            </Link>
            <Link href="/notion" target="_blank">
              <RiNotionFill size="45" className="hover:text-blue-600" />
            </Link>
            <Link href="https://psyoung.tistory.com/" target="_blank">
              <SiTistory size="40" className="hover:text-blue-600" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
