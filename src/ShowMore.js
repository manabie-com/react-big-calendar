import PropTypes from 'prop-types'
import React from 'react'

const ShowMore = ({ total }) => {
  return <>`+${total} more`</>
}

ShowMore.propTypes = {
  total: PropTypes.number,
}

export default ShowMore
