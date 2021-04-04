import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title }) => {
  const onClick=() => {
    console.log('click');
  }
  return (
    <div>
      <header className='header'>
        {/* <h1 style={headingStyle}>{title}</h1> */}
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick} />
      </header>
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// const headingStyle = {
//   color: 'white',
//   backgroundColor: 'black'
// }

export default Header
