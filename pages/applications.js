import React from "react";
import SmallCards from "@/components/cards/SmallCards";
import applications_emit from "@/data/applications_emit";

export default function applications() {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 lg:px-[50px] xl:px-[100px]">
      <div className="mt-12 text-white text-center sm:w-[31.25rem] md:w-[43.75rem] lg:mt-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:px-5xl">
          How useful is this EMIT?
        </h1>
        <p className="text-gray-300 mt-3">
          The Earth Mineral Dust Source Investigation (EMIT) has various
          applications. These applications highlight the versatility and
          significance of EMIT in advancing our knowledge of Earth's surface,
          atmosphere, and their interactions.
        </p>
      </div>
      <div className="mt-32 w-full">
        <div className="w-full grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-6 xl:grid-cols-3">
          {applications_emit.map((data) => (
            <SmallCards key={data.app_ID} keyword={'Application'} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
