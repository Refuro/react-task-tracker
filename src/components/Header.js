import PropTypes from 'prop-types'
import Button from './Button'

//Header Content
const Header = ({ title }) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color = 'green' text = 'Add Task' click={onclick} />
        </header>
    )
}


//Header Attributes
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
// CSS in JS, ex. <h1 style = {headingStyle}></h1>
// const headingStyle = {
//     color: 'red', backgroundColor: 'black'
// }
export default Header
