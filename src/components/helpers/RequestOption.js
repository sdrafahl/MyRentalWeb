import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Header, Button } from 'semantic-ui-react';
import Styles from '../../styles/RequestOption';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;
export const RequestOption = props => (
  <Link to="/pipeline/requestInformation">
    <ButtonDiv>
      <Button fluid style={Styles.button} onClick={() => props.onClick()}>
        <Header as="h2" floated="left">
          <Image style={Styles.image} src={props.imageURL} size="massive" circular />
          {props.title}
        </Header>
      </Button>
    </ButtonDiv>
  </Link>
);

RequestOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RequestOption;
