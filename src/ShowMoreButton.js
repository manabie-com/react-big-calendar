import PropTypes from 'prop-types'
import React from 'react'

const ShowMoreButton = ({ key, onClick, label }) => {
  return (
    <a key={key} href="#" className={'rbc-show-more'} onClick={onClick}>
      {label}
    </a>
  )
}

ShowMoreButton.propTypes = {
  key: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  extraEventsCount: PropTypes.number,
}

export default ShowMoreButton
