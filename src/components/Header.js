import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
  return (

    <header className = 'header'>
      <h1>{title}</h1>
      <Button/>
    </header>
  )
}

// Default prop
Header.defaultProps = {
  title: 'Task Tracker'
}

// Proptypes
Header.propTypes = {
  title: PropTypes.string
}

export default Header