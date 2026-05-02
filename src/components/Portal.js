import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Portal = ({ children, containerId }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const target = document.getElementById(containerId);
    if (!target) {
      console.error(
        `Portal root with ID "${containerId}" not found in the DOM.`
      );
    }
    setContainer(target);
  }, [containerId]);

  if (!container) return null;

  return ReactDOM.createPortal(children, container);
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  containerId: PropTypes.string.isRequired,
};

export default Portal;
