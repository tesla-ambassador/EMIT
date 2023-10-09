import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function BigCards() {
  return (
    <Card
      isFooterBlurred
      className="h-[500px] sm:w-full sm:h-auto col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          Introduction
        </p>
        <h4 className="text-white font-medium sm:text-xl md:text-2xl">
          Mineral dust aerosols, originating from soil particles lifted into the
          atmosphere by wind erosion, play a significant role in the uncertainty
          of direct radiative forcing by anthropogenic aerosols. Current
          understanding of their radiative effects is hindered by uncertainties
          in mineral composition.
        </h4>
        <br />
        <h4 className="text-white font-medium sm:text-xl md:text-2xl">
          The Earth Mineral Dust Source Investigation (EMIT), launched by NASA,
          aims to address this knowledge gap by directly measuring and mapping
          soil mineral composition in critical dust-forming regions.
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="/space-bg-3.png"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-white/80 text-tiny">Click Button</p>
          <p className="text-white/80 text-tiny">For more information</p>
        </div>
        <Button className="text-tiny" radius="full" size="sm">
          Explore
        </Button>
      </CardFooter>
    </Card>
  );
}
