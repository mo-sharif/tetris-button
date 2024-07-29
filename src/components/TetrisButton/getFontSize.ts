import { TetrisButtonProps } from './interface';

export const getFontSize = (size?: TetrisButtonProps['fontSize']) => {
  switch (size) {
    case 'tiny':
      return '1em';
    case 'small':
      return '1.2em';
    case 'medium':
      return '1.5em';
    case 'large':
      return '2em';
    default:
      return '1.5em'; // Default font size if none specified
  }
};
