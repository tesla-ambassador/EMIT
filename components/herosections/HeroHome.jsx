import React from "react";
import { Image, Button } from "@nextui-org/react";

export default function HeroHome() {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 lg:w-full">
      <div className="relative isolate overflow-hidden glass px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div className="text-white mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Did you know?
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Mineral dust aerosols, originating from soil particles lifted into
            the atmosphere by wind erosion, play a significant role in the
            uncertainty of direct radiative forcing by anthropogenic aerosols.
            Current understanding of their radiative effects is hindered by
            uncertainties in mineral composition.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Button>Explore</Button>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            src="/space-station.jpg"
            width={1824}
            height={1080}
            className="absolute left-0 top-0 w-[57rem] rounded-md max-w-none bg-white/5 ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
