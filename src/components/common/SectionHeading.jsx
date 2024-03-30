import propTypes from 'prop-types'

function SectionHeading({ children }) {
  return (
    <h2 className="text-[#101828] text-2xl w-fit font-semibold mb-3 sm:mb-6 sm:text-3xl">
      {children}
    </h2>
  )
}

SectionHeading.propTypes = {
  children: propTypes.string.isRequired,
}

export default SectionHeading
