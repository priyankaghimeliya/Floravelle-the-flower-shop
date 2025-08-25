import React from "react";

/*
interface FlowerCardProps {
  imageSrc: string;
  imageAlt: string;
  flowerName: string;
}

export const FlowerCard: React.FC<FlowerCardProps> = ({
  imageSrc,
  imageAlt,
  flowerName,
}) => {
  return (
    <article className="relative h-[767px] w-[450px] max-sm:scale-[0.67] max-sm:w-[300px]">
      <div className="absolute top-0 left-0 bg-red-300 h-[767px] rounded-[250px_250px_0px_0px] w-[450px]" />
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute top-0 left-0 h-[680px] rounded-[250px_250px_0px_0px] w-[450px]"
      />
      <h3 className="absolute text-5xl leading-9 text-center text-red-500 h-[130px] left-[70px] top-[704px] w-[310px]">
        {flowerName}
      </h3>
    </article>
  );
};
*/


interface FlowerCardProps {
  imageSrc: string;
  imageAlt: string;
  flowerName: string;
}

export const FlowerCard: React.FC<FlowerCardProps> = ({ imageSrc, imageAlt, flowerName }) => {
  return (
    <article className="relative shrink-0 mt-[200px] h-[767px] w-[450px] max-md:h-[597px] max-md:w-[350px] max-sm:h-[477px] max-sm:w-[280px]">
      <div className="absolute top-0 left-0 bg-red-300 h-[767px] rounded-[250px_250px_0px_0px] w-[450px] max-md:h-[597px] max-md:rounded-[195px_195px_0px_0px] max-md:w-[350px] max-sm:h-[477px] max-sm:rounded-[156px_156px_0px_0px] max-sm:w-[280px]" />
      <img
        src={imageSrc}
        className="object-cover absolute top-0 left-0 h-[680px] rounded-[250px_250px_0px_0px] w-[450px] max-md:h-[530px] max-md:rounded-[195px_195px_0px_0px] max-md:w-[350px] max-sm:h-[424px] max-sm:rounded-[156px_156px_0px_0px] max-sm:w-[280px]"
        alt={imageAlt}
      />
      <h2 className="absolute text-4xl leading-9 text-center text-red-500 h-[130px] left-[70px] top-[704px] w-[310px] max-md:w-60 max-md:text-4xl max-md:leading-7 max-md:h-[100px] max-md:left-[55px] max-md:top-[548px] max-sm:left-11 max-sm:w-48 max-sm:h-20 max-sm:text-3xl max-sm:leading-6 max-sm:top-[438px]">
        {flowerName}
      </h2>
    </article>
  );
};
