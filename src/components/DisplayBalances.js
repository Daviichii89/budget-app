import React from "react";
import { Segment } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

const DisplayBalances = () => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value="1,045,50" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expenses" value="1,400,25" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
