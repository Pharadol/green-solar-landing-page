import PropTypes from "prop-types";

function Container({ children }) {
  return <div className="container mx-auto max-w-7xl py-20 px-4 sm:px-5 md:px-12 lg:px-4">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
