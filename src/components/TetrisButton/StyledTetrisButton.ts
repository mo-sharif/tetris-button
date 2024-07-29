import styled from 'styled-components';
import { pixelStyle } from './pixelStyle';
import { getFontSize } from './getFontSize';
import { TetrisButtonProps } from './interface';

const StyledTetrisButton = styled.button<
  TetrisButtonProps & { $backgroundColor: string }
>`
  background-color: ${(props) => props.theme.backgroundColor};
  color: #333;
  border: none;
  font-size: ${(props) => getFontSize(props.fontSize)};
  text-align: ${(props) => props.textAlign || 'center'};
  cursor: pointer;
  outline: none;
  font-family: ${(props) => props.fontFamily || 'Press Start 2P, monospace'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  letter-spacing: ${(props) => props.letterSpacing || 'normal'};
  line-height: ${(props) => props.lineHeight || 'normal'};
  ${pixelStyle};
`;

export default StyledTetrisButton;
