import * as React from 'react';
import IconButton from '@material-ui/core/IconButton/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Character } from '../../character.vm';
import * as classes from './sentences-fieldset.styles';
import * as cardClasses from '../../character.styles';
import { TextFieldComponent } from 'common/components';
import { FieldArrayRenderProps } from 'formik';

interface Props {
  autoFocus: boolean;
  arrayHelpers: FieldArrayRenderProps;
  values: Character;
}

export const SentencesFieldset: React.FunctionComponent<Props> = (props) => {
  const { autoFocus, arrayHelpers, values } = props;

  console.log(arrayHelpers, values)

  return (
    <fieldset className={classes.fieldset}>
      <legend className={cardClasses.label}>Best sentences:</legend>
      {
        values.bestSentences?.length > 0 && (
          <>
            {values.bestSentences.map((_, index) => (
              <div
                key={index}
                className={classes.inputContainer}
              >
                <TextFieldComponent
                  autoFocus={autoFocus}
                  id={`bestSentences.${index}`}
                  className={classes.input}
                  name={`bestSentences.${index}`}
                />
                <IconButton
                  type="button"
                  color="secondary"
                  size="small"
                  onClick={() => arrayHelpers.remove(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
          </>
        )
      }
    </fieldset>
  );
};
