import PropTypes from 'prop-types'


function Header({ text, bgColour, textColour }) {
    const headerStyles = {
        backgroundColor: bgColour,
        color: textColour,
    }

    return (
        <header style={headerStyles}>
           <div className="container">
               <h2>{text}</h2>
            </div> 
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback App',
    bgColour: 'rgba(0,0,0,0.4)',
    textColour: '#ff6a95',
}

// Determines allowed prop types
Header.propTypes = {
    text: PropTypes.string,
    bgColour: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header

