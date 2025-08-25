import React from "react";

interface FeatureItemProps {
  iconSrc: string;
  iconAlt: string;
  text: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  iconSrc,
  iconAlt,
  text,
}) => {
  return (
    <div className="flex gap-3.5 items-center">
      <img src={iconSrc} alt={iconAlt} className="h-[60px] w-[60px]" />
      <p className="text-2xl leading-9 text-center text-red-500 max-sm:text-lg">
        {text}
      </p>
    </div>
  );
};
