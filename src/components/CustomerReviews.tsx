interface Review {
  name: string;
  avatar: string;
  rating: number;
  feedback: string;
}

const reviews: Review[] = [
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

export const CustomerReviews: React.FC = () => {
  return (
    <section className="bg-white mt-20 mx-auto rounded-lg shadow-md p-8 max-w-3xl">
      <h2 className="text-3xl font-semibold text-red-500 mb-6">Customer Reviews</h2>
      <ul className="space-y-6">
        {reviews.map((review, index) => (
          <li key={index} className="flex items-center space-x-4 border-b pb-4">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center space-x-1 mb-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-red-700">{review.feedback}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
