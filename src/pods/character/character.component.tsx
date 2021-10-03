import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Character } from './character.vm';
import * as classes from './character.styles';
import { CharacterForm } from './components';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const [editing, setEditing] = React.useState(false);

  const onSave = (values) => {
    console.log('vvvvvv', values)
    setEditing(false);
  }

  const onCancel = () => {
    setEditing(!editing)
  }

  return (
    <Card className={classes.root}>
      {character.image && (
        <CardMedia
          className={classes.media}
          image={character.image}
          title={character.name}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {character.name}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.item}
        >
          <span className={classes.label}>Id:</span> {character.id}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.item}
        >
          <span className={classes.label}>Location:</span> {character.location}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.item}
        >
          <span className={classes.label}>Status:</span> {character.status}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.item}
        >
          <span className={classes.label}>Gender:</span> {character.gender}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.item}
        >
          <span className={classes.label}>Species:</span> {character.species}
        </Typography>
        {!editing && character.bestSentences.length > 0 && (
          <Typography
            variant="body2"
            color="textSecondary"
            component="div"
            className={classes.item}
          >
            <span className={classes.label}>Best sentences:</span>
            <ul className={classes.list}>
              {character.bestSentences.map((sentence, index) => (
                <li key={index}>"{sentence}"</li>
              ))}
            </ul>
          </Typography>
        )}
        {!editing && (
          <Button
            onClick={() => setEditing(!editing)}
            variant="contained"
            className={classes.editButton}
          >
            <span className={classes.buttonText}>Edit Sentences</span>
            <EditIcon />
          </Button>
        )}
        {editing && (
          <CharacterForm character={character} onSave={onSave} onCancel={onCancel}/>
        )}
      </CardContent>
    </Card>
  );
};
