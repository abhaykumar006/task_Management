import { ErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";
import { loading } from "../redux/slices/loadingSlice";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import PropTypes from "prop-types";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4"
      role="alert"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          {error?.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  resetErrorBoundary: PropTypes.func.isRequired,
};

function ErrorBoundaryWrapper({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleError = (error, errorInfo) => {
    console.error("Error caught by boundary:", error, errorInfo);
    dispatch(loading(false));
  };

  const handleReset = () => {
    navigate(routes.login);
    window.location.reload();
  };

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={handleError}
      onReset={handleReset}
    >
      {children}
    </ErrorBoundary>
  );
}

ErrorBoundaryWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ErrorBoundaryWrapper, ErrorFallback };
