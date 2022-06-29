import Image from "next/image";
import React from "react";

interface ProfileProps {
  name: string;
  avatarUrl: string;
  location: string;
  bio: string;
}

export default function ProfileCard({
  name,
  avatarUrl,
  location,
  bio,
}: ProfileProps) {
  return (
    <div className=" w-full mx-4 md:w-1/3 lg:w-1/4 min-w-0 break-words bg-white  mb-6 shadow-lg rounded-xl mt-16">
      <div className="flex flex-wrap justify-center">
        <div className="w-full flex justify-center">
          <div className="relative">
            <div className=" absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]">
              <Image
                src={avatarUrl}
                className=" shadow-lg rounded-full align-middle border-none"
                height={130}
                width={130}
                alt={name || "github profile pic"}
              />
            </div>
          </div>
        </div>
        <div className="w-full text-center mt-20">
          {/* <div className="flex justify-center lg:pt-4 pt-8 pb-0">
            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                3,360
              </span>
              <span className="text-sm text-slate-400">Photos</span>
            </div>
            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                2,454
              </span>
              <span className="text-sm text-slate-400">Followers</span>
            </div>
            <div className="p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                564
              </span>
              <span className="text-sm text-slate-400">Following</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="text-center mt-2">
        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
          {name ? name : "No name"}
        </h3>
        <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
          {location}
        </div>
      </div>
      <div className="mt-6 py-6 border-t border-slate-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4 ">
            <p className="font-light leading-relaxed text-slate-600 mb-4 h-32 min-h-0 text-ellipsis overflow-hidden">
              {bio ? bio : ""}
            </p>
            <a
              href="javascript:;"
              className="font-normal text-slate-700 hover:text-slate-400"
            >
              Follow Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
