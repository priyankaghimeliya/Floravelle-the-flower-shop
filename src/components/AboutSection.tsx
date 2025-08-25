import React, { useState } from "react";

// Page Header
interface PageHeaderProps {
  title: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header className="self-center text-6xl leading-none max-md:text-4xl text-red-500 text-center py-6">
      <h1>{title}</h1>
    </header>
  );
};

// Hero Section
interface HeroSectionProps {
  backgroundImage: string;
  description: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  description,
}) => {
  return (
    <section className="flex relative flex-col items-start px-5 pt-32 pb-80 mt-1.5 w-full text-3xl leading-[50px] min-h-[960px] max-md:px-5 max-md:py-24 max-md:max-w-full max-md:text-4xl max-md:leading-[62px] bg-pink/50 p-6 backdrop-blur-sm">
      <img
        src={backgroundImage}
        alt="Floravelle flower boutique background"
        className="object-cover absolute inset-0 size-full"
      />
      <p className="relative mb-0 max-md:mb-2.5 max-md:max-w-full max-md:text-5xl max-md:leading-[62px] text-red-500">
        {description}
      </p>
    </section>
  );
};

// Customer Reviews Section
export const CustomerReviewSection: React.FC = () => {
  const [userRating, setUserRating] = useState(2);
  const [userFeedback, setUserFeedback] = useState(
    "flowers are good and fresh, and I like it!"
  );

  const handleSubmit = () => {
    alert(`Submitted rating: ${userRating} - "${userFeedback}"`);
  };

  const reviews = [
    {
      name: "Alice",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
      rating: 5,
      feedback: "NICE Flowers!",
    },
    {
      name: "Liam",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
      rating: 5,
      feedback: "Fantastic bouquet",
    },
    {
      name: "Emma",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
      rating: 5,
      feedback: "Good in Delivery",
    },
    {
      name: "Noah",
      avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922653.png",
      rating: 5,
      feedback: "Fresh and blooming flowers.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-start gap-8 bg-pink-250 p-10 backdrop-100 rounded-md shadow-lg mt-[50px] z-10 ">

      {/* Share Opinion */}
      <div className="bg-pink-200 p-6 rounded-lg shadow w-[260px] h-[350px] text-center">
        <h3 className="text-lg font-semibold mb-3">Share your Opinion!</h3>
        <div className="flex justify-center mb-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={`text-2xl cursor-pointer ${
                userRating >= num ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setUserRating(num)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          value={userFeedback}
          onChange={(e) => setUserFeedback(e.target.value)}
          className="w-full text-sm p-2 border border-gray-300 rounded mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-black text-white py-2 px-6 rounded-full text-sm hover:bg-gray-800"
        >
          SUBMIT
        </button>
      </div>

      {/* Rating Distribution */}
      <div className="bg-pink-200 p-6 rounded-lg shadow w-[260px] h-[350px] text-center">
        <h3 className="text-lg font-semibold mb-3">Rate Us</h3>
        <div className="flex justify-center mb-4 text-yellow-500 text-xl">
          {"★★★★★"}
        </div>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center">
              <span className="w-6">{star}</span>
              <div className="w-full h-2 bg-gray-200 ml-2 rounded">
                <div
                  className="h-2 bg-black rounded"
                  style={{ width: `${(6 - star) * 20}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="bg-pink-200  p-6 rounded-lg shadow w-[260px] h-[350px]">
        <h3 className="text-lg font-semibold text-center mb-4">Customer Reviews</h3>
        <ul className="space-y-4">
          {reviews.map((review, i) => (
            <li key={i} className="border-b pb-2 flex items-start gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-yellow-500 text-sm">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-sm text-gray-800">{review.feedback}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// About Section
export function AboutSection() {
  const description =
    "Floravelle is a chic flower boutique offering fresh, elegant and creative floral designs for every occasion. With a focus on freshness, creativity and sustainability, Floravelle delivers vibrant blooms that bring joy, beauty and emotion to everyday life. A flower shop offers fresh flowers, bouquets and arrangements for occasions like weddings, birthdays and events. It focuses on customer satisfaction through quality blooms, artistic designs and timely delivery—available both in-store and online. The goal is to help people express emotions beautifully through flowers.";

  return (
    <main
      id="About"
      className="flex flex-col overflow-hidden pt-0 text-red-500 bg-red-200"
    >
      <PageHeader title="About-us" />

      {/* Background image section */}
      <HeroSection
        backgroundImage="https://cdn.builder.io/api/v1/image/assets/e16796045ae8470ba11532b5d5f22bc3/53aaad9aacdd126ea44495ab5277d5861d2ba900?placeholderIfAbsent=true"
        description=""
      />

      {/* Paragraph Box */}
      <div className="max-w-4xl mx-auto mt-[-900px] z-10 px-6 py-8 bg-pink-200 backdrop-blur-sm rounded-xl shadow-lg h-[300px]">
        <p className="text-lg text-red-800 leading-9 text-justify">
          {description}
        </p>
      </div>

      {/* Customer Reviews */}
      <CustomerReviewSection />
    </main>
  );
}

export default AboutSection;
