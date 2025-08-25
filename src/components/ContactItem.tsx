import React from "react";

interface ContactItemProps {
  svgContent: string;
  text: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  svgContent,
  text,
}) => {
  return (
    <div className="flex gap-3.5 items-center">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: svgContent,
          }}
        />
      </div>
      <div className="text-xl text-red-500 max-sm:text-lg">{text}</div>
    </div>
  );
};
