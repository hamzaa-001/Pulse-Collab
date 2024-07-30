import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full lg:py-2 ">
        <div className=" lg:bg-[#FF7A00]/50 bg-white  w-[100%] lg:w-[80%] h-[100%] lg:h-[80%] shadow-md rounded-2xl py-8 flex justify-center items-center lg:gap-20">
          <div>
            <SignUp />
          </div>
          <div>
            <Image
              className="hidden lg:block"
              src={"/signup.svg"}
              height={300}
              width={300}
              alt="signup"
            />
          </div>
        </div>
      </div>
    </>
  );
}
