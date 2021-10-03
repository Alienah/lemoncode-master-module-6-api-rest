import { theme } from 'core/theme';
import { css } from 'emotion';

export const root = css`
  max-width: 768px;
  margin: auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const media = css`
  height: 300px;
`;

export const item = css`
  margin-bottom: '4px';
`;

export const label = css`
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 4px;
`;

export const list = css`
  margin-top: ${theme.spacing(1)}px;
  list-style: none;
  padding-left: 0;

  & li {
    height: 36px;
    margin-bottom: 4px;
  }
`;

export const editButton = css`
  margin-top: ${theme.spacing(5)}px;
`;

export const buttonText = css`
  margin-right: ${theme.spacing(1)}px;
`;
