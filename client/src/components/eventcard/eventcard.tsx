import { Link } from "react-router-dom";

function EventsCard({ event }: { event: any }) {
  const { title, date, description, city, club, coverImage } = event;
  const defaultImage =
    "https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80";
  return (
    <div className="mx-4 my-2 flex flex-wrap justify-between">
      <div className="overflow-hidden rounded-xl bg-white shadow-lg">
        <img
          className="h-48 w-full object-cover"
          src={coverImage.length > 0 ? coverImage[0] : defaultImage}
          alt="Event"
        />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-semibold text-teal-500">
            {title}
          </div>
          <p className="mt-2 text-base font-semibold text-gray-700">
            Location: {city}, India
          </p>
          <p className="mt-2 text-gray-700">{description}</p>
          <p className="mt-2 text-base font-semibold text-gray-700">
            {date.substring(0, 10)}{" "}
            <span className="text-sm font-light"> ({club}) </span>
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="rounded-full bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-600">
                See More
              </button>
            </div>
            <Link to="/home/user/checkout">
              <button className="rounded-full bg-teal-500 px-4 py-2 font-bold text-white hover:bg-teal-600">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsCard;
