import { Link } from "react-router-dom";
import { routes } from "../routes/routes";

export const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800 p-6 text-center">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="max-w-md mb-8">
        Sorry, the page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link
        to={routes.today}
        className="px-6 py-3 bg-green-600 text-white rounded-md font-bold hover:bg-green-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};
