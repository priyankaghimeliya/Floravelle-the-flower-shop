

import React from "react";
import { BouquetCard } from "./BouquetCard";
import { ImageColumn } from "./BouquetCard";


/*
export const BouquetSection: React.FC = () => {
  const bouquets = [
    {
      bouquetName: "Cascade",
      svgContent: `<svg id="91:35" style="width:454px;height:756px;flex-shrink:0;border-radius:756px;background:url(<path-to-image class=" bouquet-image"=") lightgray 50% / cover no-repeat;position:absolute;left:0px;top:0px" width="454" height="756" viewBox="0 0 454 756" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <ellipse cx="227" cy="378" rx="227" ry="378" fill="url(#pattern0_91_35)"></ellipse> <defs> <pattern id="pattern0_91_35" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_91_35" transform="matrix(0.0013587 0 0 0.000815936 0 -0.0336223)"></use> </pattern>  </defs> </svg>`,
    },
    {
      bouquetName: "Round",
      svgContent: `<svg id="91:41" style="width:454px;height:756px;flex-shrink:0;border-radius:756px;background:url(<path-to-image class=" bouquet-image"=") lightgray 50% / cover no-repeat;position:absolute;left:565px;top:0px" width="454" height="756" viewBox="0 0 454 756" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <ellipse cx="227" cy="378" rx="227" ry="378" fill="url(#pattern0_91_41)"></ellipse> <defs> <pattern id="pattern0_91_41" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_91_41" transform="matrix(0.00154902 0 0 0.000930233 -0.07004 0)"></use> </pattern>  </defs> </svg>`,
    },
    {
      bouquetName: "Pageant",
      svgContent: `<svg id="106:2" style="width:454px;height:756px;flex-shrink:0;border-radius:756px;background:url(<path-to-image class=" bouquet-image"=") lightgray 50% / cover no-repeat;position:absolute;left:1130px;top:0px" width="454" height="756" viewBox="0 0 454 756" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <ellipse cx="227" cy="378" rx="227" ry="378" fill="url(#pattern0_106_2)"></ellipse> <defs> <pattern id="pattern0_106_2" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_106_2" transform="matrix(0.00169056 0 0 0.00101523 -0.122125 0)"></use> </pattern>  </defs> </svg>`,
    },
  ];

  return (
    <section className="overflow-hidden relative w-full bg-red-50 h-[1117px] max-md:pb-12 max-md:h-auto max-md:min-h-[800px]">
      <h2 className="absolute left-2/4 text-6xl leading-9 text-center text-red-500 -translate-x-2/4 top-[98px] max-sm:text-5xl">
        Bouquet
      </h2>

      <div className="flex absolute gap-5 items-center h-[846px] left-[60px] top-[181px] max-md:left-2/4 max-md:flex-col max-md:gap-5 max-md:h-auto max-md:-translate-x-2/4 max-md:top-[180px] max-md:w-[450px] max-sm:w-[300px]">
        {bouquets.map((bouquet, index) => (
          <BouquetCard
            key={index}
            bouquetName={bouquet.bouquetName}
            svgContent={bouquet.svgContent}
          />
        ))}
      </div>
    </section>
  );
};
*/

/*
export const BouquetSection: React.FC = () => {
  return (
    <main className="flex overflow-hidden relative w-full h-screen flex-col pt-40 pr-20 pb-60 bg-red-50 max-md:pr-5 max-md:pb-24 ">
      
     <h1 className="text-6xl leading-8 justify-center text-center text-red-500 max-md:text-xl max-sm:text-xl">
        Bouquet
      </h1>
<br>
</br>
      <section className="flex gap-10 justify-center items-center  px-9 py-0 mx-auto my-0 max-w-[500px] max-md:flex-col max-md:gap-16 max-md:items-center max-md:p-0 max-sm:gap-10 z-10 ">
      <div id="Bouquet"className="shrink-0  h-[400px] w-[400px] max-md:h-[400px] max-md:w-[400px] max-sm:h-[300px] max-sm:w-[300px]  ">
        

        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f286079b4795f5eb339c4f3b7ad7a631fcddf2b?width=1009"
          alt=""
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <h2 className="text-4xl leading-5 text-center text-red-500 mr:80 whitespace-nowrap max-md:text-5xl max-sm:text-3xl">
          Oversize
        </h2>
      </div>
      <div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb147fd538b5240ed87eca9b04c6cc8bf794dda?width=1009 hover:scale-100"
        alt=""
        className="shrink-0 h-[400px] w-[400px] max-md:h-[400px] max-md:w-[400px] max-sm:h-[300px] max-sm:w-[300px] "
      />
       <h2 className="text-4xl  leading-5 text-red-500 whitespace-nowrap max-md:text-5xl max-sm:text-3xl">
          Pomander
        </h2>
        </div>
        <div>
      <img
      src="https://cdn.builder.io/api/v1/image/assets/e16796045ae8470ba11532b5d5f22bc3/a8c02bc1c049e5e8d0658e8be7901e4f1e0fb219?placeholderIfAbsent=true"
      className="object-contain w-full aspect-square max-w-[505px] h-[400px] w-[400px]"
      alt=""
    />
    <h2 className="text-4xl leading-8 text-red-500 whitespace-nowrap max-md:text-5xl max-sm:text-3xl">
        Posy
        </h2>
    </div>
    </section>
    
          {/* <BouquetCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/e16796045ae8470ba11532b5d5f22bc3/efae21c05373e82c23e495817241f54687fde9cd?placeholderIfAbsent=true"
            title="Combo Bouquet 02"
            price="$40.00"
            rating="5.0"
            starIconSrc="https://cdn.builder.io/api/v1/image/assets/e16796045ae8470ba11532b5d5f22bc3/8c1bafb70a8efe8cc2704d111ad5ffc9f8fb698d?placeholderIfAbsent=true"
          
          /> 

          
          
      
    
    </main>
  );
};
*/


export const BouquetSection: React.FC = () => {
  return (
    <div id="Bouquet" className="min-h-screen bg-rose-50 flex flex-col items-center py-10 px-4">
      {/* Heading */}
      <h1 className="text-5xl font-semibold text-red-500 mb-10">Bouquet</h1>
      


      {/* Image Row */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* Oversize */}
        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f286079b4795f5eb339c4f3b7ad7a631fcddf2b?width=1009" // Replace with actual path or URL
            alt="Oversize"
            className="w-[450px] h-[500px] rounded-md shadow-lg object-cover"
          />
          <p className="mt-4 text-4xl text-red-500 font-medium">Oversize</p>
        </div>

        {/* Pomander */}
        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb147fd538b5240ed87eca9b04c6cc8bf794dda?width=1009 hover:scale-100" // Replace with actual path or URL
            alt="Pomander"
            className="w-[450px] h-[500px] rounded-md shadow-lg object-cover"
          />
          <p className="mt-4 text-4xl text-red-500 font-medium">Pomander</p>
        </div>

        {/* Posy */}
        <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e16796045ae8470ba11532b5d5f22bc3/a8c02bc1c049e5e8d0658e8be7901e4f1e0fb219?placeholderIfAbsent=true" // Replace with actual path or URL
            alt="Posy"
            className="w-[450px] h-[500px] rounded-md shadow-lg object-cover"
          />
          <p className="mt-4 text-4xl text-red-500 font-medium">Posy</p>
        </div>
        
      </div>
    </div>
  );
};


export default BouquetSection;
