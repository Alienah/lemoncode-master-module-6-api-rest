import { css } from 'emotion';
import { theme } from 'core/theme';

export const fieldset = css`
  border: none;
  margin: 0;
  padding: 0;
`;

export const inputContainer = css`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const input = css`
  margin-top: 0;
  margin-bottom: 0;
  height: 36px;
  & input {
    padding-top: ${theme.spacing(1)}px;
    padding-bottom: ${theme.spacing(1)}px;
    color: rgba(0, 0, 0, 0.54);
    font-size: 14px;
  }
`;
