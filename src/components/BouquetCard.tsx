import React from "react";

/*
interface BouquetCardProps {
  bouquetName: string;
  svgContent: string;
}

export const BouquetCard: React.FC<BouquetCardProps> = ({
  bouquetName,
  svgContent,
}) => {
  return (
    <article className="relative h-[846px] w-[454px] max-sm:scale-[0.67] max-sm:w-[300px]">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: svgContent,
          }}
        />
      </div>
      <div className="flex absolute justify-center items-center bg-red-300 h-[78px] left-[66px] top-[764px] w-[321px]">
        <h3 className="text-5xl text-red-500">{bouquetName}</h3>
      </div>
    </article>
  );
};
*/



interface StarRatingProps {
  rating: string;
  starIconSrc: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, starIconSrc }) => {
  return (
    <div className="flex gap-1.5 items-center">
      <img
        src={starIconSrc}
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        alt="Star rating"
      />
      <span className="self-stretch my-auto text-zinc-800">
        {rating}
      </span>
    </div>
  );
};

interface ImageColumnProps {
  src: string;
  aspectRatio: string;
  className?: string;
}

export const ImageColumn: React.FC<ImageColumnProps> = ({
  src,
  aspectRatio,
  className = ""
}) => {
  return (
    <div className="w-[33%] max-md:ml-0 max-md:w-full">
      <img
        src={src}
        className={`object-contain grow mt-5 w-full ${aspectRatio} max-md:mt-10 max-md:max-w-full ${className}`}
        alt="Flower bouquet"
      />
    </div>
  );
};


interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: string;
  rating: string;
  starIconSrc: string;
}

export const BouquetCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  price,
  rating,
  starIconSrc
}) => {
  return (
    <article className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col text-zinc-800 max-md:mt-10 max-md:max-w-full">
        <img
          src={imageSrc}
          className="object-contain w-full aspect-square max-md:max-w-full"
          alt={title}
        />
        <div className="flex flex-col self-center ml-7 max-w-full min-h-28 w-[349px]">
          <h2 className="self-center text-4xl tracking-wider text-zinc-800">
            {title}
          </h2>
          <div className="flex gap-10 justify-between items-start mt-3 w-full text-2xl whitespace-nowrap">
            <span className="text-zinc-800">
              {price}
            </span>
            <StarRating rating={rating} starIconSrc={starIconSrc} />
          </div>
        </div>
      </div>
    </article>
  );
};
