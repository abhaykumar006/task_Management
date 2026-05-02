import PropTypes from "prop-types";
import { BeatLoader } from "react-spinners";

export const LoaderData = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black opacity-25 flex items-center justify-center z-50">
          <BeatLoader
            color="darkgreen"
            loading={true}
            cssOverride={override}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </>
  );
};
const override = {
  display: "block",
  margin: "0 auto",
};

LoaderData.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
