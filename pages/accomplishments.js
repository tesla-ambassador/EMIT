import React from "react";
import { accomplishments_emit } from "@/data/applications_emit";
import SmallCards from "@/components/cards/SmallCards";

export default function Accomplishments() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 lg:px-[50px] xl:px-[100px]">
      <div className="text-white mt-12 text-center sm:w-[31.25rem] md:w-[43.75rem] lg:mt-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:px-5xl">
          What has EMIT accomplished so far?
        </h1>
        <p className="text-gray-300 mt-3">
          EMIT is a NASA Earth Venture instrument installed on the International
          Space Station that uses imaging spectroscopy technology to
          comprehensively measure the mineral composition of the Earth&apos;s
          arid land dust source regions. It was launched with a SpaceX rocket to
          its destination on the International Space Station &#40;ISS&#41;
        </p>
      </div>
      <div className="mt-32 w-full">
        <div className="w-full grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-6 xl:grid-cols-3">
          {accomplishments_emit.map((data) => (
            <SmallCards key={data.app_ID} keyword={"Achievement"} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
