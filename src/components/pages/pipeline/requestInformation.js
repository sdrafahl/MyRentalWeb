import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import RequestInformationForm from './requestInformationForm';
import styles from '../../../styles/pipeline/requestInformation.module.css';

const requestInformation = (props) => {
  const destinationString = '/pipeline/requestLocation';
  if (props.pageInProgress < 1) {
    return <Redirect to="/pipeline" />;
  }
  return (
    <Grid
      md={9}
      lg={8}
      xl={7}
      alignItems="center"
      alignContent="center"
      justify="center"
      container
      spacing={24}
      className={styles.grid}
      verticalAlign="middle"
    >
      <Grid item sm={12} className={styles.breadRow}>
        <BreadcrumbComponent selection={props.pageInProgress} current={1} />
      </Grid>
      <Grid item xs={12} sm={10} md={9} lg={8} xl={7} className={styles.formRow}>
        <RequestInformationFormWithRouter
          route={() => {
            props.requestInProgress(2);
            props.history.push(destinationString);
          }}
        />
      </Grid>
    </Grid>
  );
};

const RequestInformationFormWithRouter = withRouter(RequestInformationForm);

requestInformation.propTypes = {
  pageInProgress: PropTypes.number,
};

requestInformation.defaultProps = {
  pageInProgress: 0,
  requestInProgress: 0,
  history: PropTypes.func,
};
export default requestInformation;
