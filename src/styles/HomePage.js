const green = '#63BA18';
const white = '#FFFFFF';
const orange = '#FFB300';
const blue= '#1565C0';

export default {
    navbarLogo: {
        paddingTop: '1vh',
        paddingLeft: '5vw',
        fontSize: '3vh',
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: orange
    },
    navbarContainer: {
        width: '100%',
        minHeight: '3.5vh',
        backgroundColor: white,
        position: 'fixed',
        top: '0px'
    },
    loginSignupMenu: {
        paddingRight: '1rem'
    },
    menuItem: {
        color: orange
    },
    modal: {
        backgroundColor: 'white',
        padding: '1rem'
    },
    loginGrid: {
        margin: '1rem'
    },
    modalHeader: {
        display: 'flex',
        justifyContent: 'center',
        color: green,
        fontSize:'2rem',
        backgroundColor: white,
        borderBottom: 'none'
    },
    modalButton: {
        backgroundColor: green,
        color: 'white'
    },
    signUpForm: {
        padding: '1rem'
    },
    signUpCheckbox: {
        paddingBottom: '.5rem'
    },
    contentContainer: {
        marginTop: '3.5vh',
        height: '96.5vh',
        backgroundImage: 'url("http://www.tokkoro.com/picsup/3004995-blur_blurred_eco_environment_garden_grass_green_lawn_mowing_whitespace_yard.jpg")',
        backgroundSize: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        width: '20%',
        minWidth: '300px',
        border: `${green} 3px solid`,
        borderRadius: '6px'
    },
    cardInputContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardInputLabel: {
        paddingTop: '9.5px',
        fontWeight: 'bold'
    },
    cardContent: {
        paddingTop: '2vh'
    },
    cardButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '2vh'
    },
    footerContainer: {
        backgroundColor: '#CECECE'
    },
    footerContentContainer: {
        paddingTop: '2vh',
        display: 'flex',
        justifyContent: 'space-around',
        width: '50vw',
        margin: '0 auto'
    },
    footerCopyright: {
        textAlign: 'center',
        color: '#AAAAAA',
        padding: '2vh 0'
    }
};
