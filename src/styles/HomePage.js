import lawn from '../images/homepage/lawn.jpg';

const white = '#FFFFFF';
const green = '#20ad1d';
const blue = '#1205ff';
export default {
  grid: {
    margin: '0',
  },
  headingRow: {
    backgroundImage: `url(${lawn})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'noRepeat',
    backgroundPosition: 'center',
    height: '40em',
    overflow: 'hidden',
  },
  header: {
    fontSize: '3em',
    color: 'white',
    marginTop: '1em',
  },
  headerSegment: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignSelf: 'center',
    alignItems: 'center',
    width: '100%',
    height: '75%',
  },
  div: {
    height: '3em',
    marginTop: '3em',
  },
  requestButton: {
    padding: '.65em 1.1em',
    fontSize: '1.7em',
    borderRadius: '20px',
    color: white,
    backgroundColor: green,
    boxShadow: '0px 12px 10px -10px rgba(0,0,0,0.4)',
  },
  jobButton: {
    padding: '.65em 1.1em',
    fontSize: '1.4em',
    borderRadius: '20px',
    color: white,
    backgroundColor: blue,
    boxShadow: '0px 12px 10px -10px rgba(0,0,0,0.4)',
  },
  divider: {
    color: white,
    fontSize: '2em',
  },
};
