import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import * as classes from './back-button.styles'

interface Props {
  text: string;
  link: string;
}

export const BackLink: React.FC<Props> = props => {
  const { text, link } = props;

  return (
    <div className={classes.link}>
      <Link to={link}>{text}</Link>
    </div>
  );
};
