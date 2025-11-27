import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { removeEntryAction } from "../actions/entries.actions";
import { useDispatch } from "react-redux";
import { openEditModalAction } from "../actions/modals.actions";

const EntryLine = ({ description, value, isExpense = false, id }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon
                name="edit"
                bordered
                onClick={() => dispatch(openEditModalAction(id))}
              />
              <Icon
                name="trash"
                bordered
                onClick={() => dispatch(removeEntryAction({ id }))}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default EntryLine;
