import React from 'react';
import { Button, CardActions, IconButton } from '@material-ui/core';
import { FieldArray, Form, Formik } from 'formik';
import { Character } from '../../character.vm';
import { SentencesFieldset } from '..';
import AddIcon from '@material-ui/icons/Add';
import * as classes from './character-form.styles';

interface Props {
  character: Character;
  onCancel: () => void;
  onSave: (values: Character) => void;
}

export const CharacterForm: React.FunctionComponent<Props>  = (props) => {
  const {character, onSave, onCancel} = props;
  const [addingNew, setAddingNew] = React.useState(false)
  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
    >
      {({ values }) => {
        return (
          <Form className={classes.form}>
            <FieldArray
              name="bestSentences"
              render={(arrayHelpers) => (
                <div>
                  <SentencesFieldset
                    autoFocus={addingNew}
                    values={values}
                    arrayHelpers={arrayHelpers}
                  />
                  <IconButton
                    type="button"
                    edge="start"
                    onClick={() => {
                        arrayHelpers.insert(values.bestSentences.length || 0, '');
                        setAddingNew(true);
                      }
                    }
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              )}
            />
            <CardActions className={classes.buttonsContainer}>
              <Button onClick={onCancel} variant="contained">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </CardActions>
          </Form>
        );
      }}
    </Formik>
  );
}
