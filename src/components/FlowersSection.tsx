

/*
export const FlowersSection: React.FC = () => {
  const flowers = [
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/8cfefb195e0c4128b8c9768cb801b4822aa364de?width=900",
      imageAlt: "Beautiful Orchid flower",
      flowerName: "Orchid",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/4f975fe9af46a71376070e46904a98a95aa204bd?width=900",
      imageAlt: "Beautiful Red Rose",
      flowerName: "RedRose",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/ea2aaec56c704760359a273c4dd49550cd8f84af?width=900",
      imageAlt: "Beautiful White Rose",
      flowerName: "WhiteRose",
    },
  ];

  return (
    <section className="overflow-hidden relative w-full bg-rose-200 h-[1117px] max-md:pb-12 max-md:h-auto max-md:min-h-[800px]">
      <h2 className="absolute left-2/4 text-6xl leading-9 text-center text-red-500 -translate-x-2/4 top-[98px] max-sm:text-5xl">
        flowers
      </h2>

      <div className="flex absolute gap-5 items-center h-[838px] left-[60px] top-[195px] max-md:left-2/4 max-md:flex-col max-md:gap-5 max-md:h-auto max-md:-translate-x-2/4 max-md:top-[180px] max-md:w-[450px] max-sm:w-[300px]">
        {flowers.map((flower, index) => (
          <FlowerCard
            key={index}
            imageSrc={flower.imageSrc}
            imageAlt={flower.imageAlt}
            flowerName={flower.flowerName}
          />
        ))}
      </div>
    </section>
  );
};
*/

import * as React from "react";
import { FlowerCard } from "./FlowerCard";

interface Flower {
  id: string;
  image: string;
  altText: string;
  name: string;
}

export const FlowersSection: React.FC = () => {
  const flowers: Flower[] = [
    {
      id: "1",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cfefb195e0c4128b8c9768cb801b4822aa364de?width=900",
      altText: "Orchid",
      name: "Orchid"
    },
    {
      id: "2",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4f975fe9af46a71376070e46904a98a95aa204bd?width=900",
      altText: "RedRose",
      name: "RedRose"
    },
    {
      id: "3",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea2aaec56c704760359a273c4dd49550cd8f84af?width=900",
      altText: "WhiteRose",
      name: "WhiteRose"
    },
    {
      id: "4",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/edcff83d2b190d9b79128796c59648f972861adb?width=900",
      altText: "Marigold",
      name: "Marigold"
    },
    {
      id: "5",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec1a7e3a5b02b9cf22fb71fe3afd31e04cab99ed?width=900",
      altText: "Lotus",
      name: "Lotus"
    },
    {
      id: "6",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a51ad5c2fc0c23a2693144a8d53849e6df91c95c?width=900",
      altText: "Jipsy",
      name: "Jipsy"
    },
    {
      id: "7",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/32caae9de5f323946c2d3de2d7cd8887d3713641?width=900",
      altText: "Aster",
      name: "Aster"
    },
    {
      id: "8",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c0dc53d7a7779c5969605142de81e7687ccc530?width=900",
      altText: "Lily",
      name: "Lily"
    }
  ];

  return ( 
     <section className="absolute relative w-full bg-rose-200 h-[1117px] max-md:pb-12 max-md:h-auto max-md:min-h-[800px]">
      <h2 className="absolute left-2/4 text-6xl leading-9 text-center text-red-500 -translate-x-2/4 top-[60px] max-sm:text-5xl">
        Flowers
      </h2>
    <div id="Flowers" className="flex overflow-x-auto overflow-hidden flex-row gap-5 justify-start items-start p-0 w-full min-h-[838px] max-md:gap-16 max-md:px-5 max-md:py-0 max-sm:flex-col max-sm:gap-10 max-sm:items-center  max-sm:p-">
      {flowers.map((flower) => (
        <FlowerCard
          key={flower.id}
          imageSrc={flower.image}
          imageAlt={flower.altText}
          flowerName={flower.name}
        />
      ))}
    </div>
    </section>
  );
};

export default FlowersSection;
