import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {character.image &&
          <CardMedia
            className={classes.media}
            image={character.image}
            title={character.name}
          />
        }
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
