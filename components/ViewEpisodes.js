import Button from "./Button";
import Image from "next/image";
import myPicture from "../public/ekene.png";
export default function ViewEpisodes() {
  return (
    <div className="bg-brand-100">
      <div className="grid grid-cols-2 gap-5 bg-brand-100 w-8/12 mx-auto pb-20">
        <div className=" px-16 relative ">
          <div className="border-solid w-44 h-44 absolute left-8 top-14">
            <div className="bg-brand-700 w-44 h-44 absolute rounded-full">
              <div className="w-44 h-44  rounded-full relative overflow-hidden left-4  bottom-0">
                <Image
                  src={myPicture}
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className=" w-52 h-52 absolute right-16 top-20  ">
            <div className="bg-brand-600 w-52 h-52 absolute rounded-full">
              <div className="w-48 h-48  rounded-full absolute overflow-hidden left-1 top-3">
                <Image
                  src={myPicture}
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className="border-solid w-72 h-72 absolute top-48 left-24 ">
            <div className="bg-brand-200 w-72 h-72  rounded-full ">
              <div className="w-64 h-64  rounded-full absolute overflow-hidden left-4 top-4">
                <Image
                  src={myPicture}
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className="border-solid w-48 h-48 absolute left-2 bottom-0">
            <div className="bg-brand-800 w-48 h-48 absolute  rounded-full"></div>
            <div className="w-44 h-44 rounded-full absolute overflow-hidden top-0 left-2 ">
              <Image
                src={myPicture}
                alt="Picture of the author"
                layout="fill"
              />
            </div>
          </div>
          <div className=" border-solid w-52 h-52 absolute bottom-10 right-28">
            <div className="bg-brand-900 w-52 h-52 relative rounded-full "></div>
            <div className="w-48 h-48 rounded-full absolute overflow-hidden top-4 left-2">
              <Image
                src={myPicture}
                alt="Picture of the author"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col py-32">
          <h2 className="text-brand-500 text-5xl pb-8">
            Experience the knowledge of{" "}
            <span className="text-brand-200">professionals</span> in a variety
            of fields
          </h2>
          <p className="text-2xl text-brand-400  pb-8">
            We cover the latest advancements in technology to give you an
            entertaining and insightful look into some of the worlds most
            talented people.
          </p>
          <Button backgroundColor="bg-brand-200">View Episodes</Button>
        </div>
      </div>
    </div>
  );
}
