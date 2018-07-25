import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { jsonForm } from './jsonForms/locationForm';
import Styles from '../../../styles/requestInformation';
import DynamicFormComponent from '../../helpers/DynamicForm';
import BreadcrumbComponent from '../../helpers/breadcrumb';

export const requestLocation = (props) => {
  if (props.pageInProgress < 2) {
    return <Redirect to="/pipeline" />;
  }
  return (
    <Grid container style={Styles.grid}>
      <Grid.Row style={Styles.breadrow}>
        <Segment style={Styles.segment}>
          <BreadcrumbComponent selection={2} />
        </Segment>
      </Grid.Row>
      <Grid.Row padding style={Styles.Grid}>
        <Segment style={Styles.segment}>
          <DynamicFormComponent
            popup
            jsonForm={() => jsonForm}
            reduxInfo={props.requests.requestLocation}
            setRequest={props.setRequestLocation}
            form={'Location'}
            route={() => {
              props.requestInProgress(3);
              props.history.push('/pipeline/requestPrice');
            }}
          />
        </Segment>
      </Grid.Row>
    </Grid>
  );
};
export default requestLocation;
