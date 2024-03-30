import propTypes from "prop-types";

function Button({ title, to }) {
  return (
    <a
      href={to}
      className="text-base w-fit text-white bg-[#1e9b8c] py-3 px-8 rounded-full hover:hover:bg-[#2caf88] transition-all duration-200 ease-in-out"
    >
      {title}
    </a>
  );
}

Button.propTypes = {
  title: propTypes.string.isRequired,
  to: propTypes.string.isRequired,
};
export default Button;
