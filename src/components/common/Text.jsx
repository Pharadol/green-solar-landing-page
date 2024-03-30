import propTypes from 'prop-types'

function Text({ children, tag }) {
  const CustomTag = tag ? tag : 'p'
  return (
    <CustomTag className="text-[#475467] text-base mb-6 w-fit">
      {children}
    </CustomTag>
  )
}

Text.propTypes = {
  children: propTypes.string.isRequired,
  tag: propTypes.string,
}

export default Text
