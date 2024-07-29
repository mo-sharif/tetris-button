import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { TetrisButtonProps } from './interface';

const getFontSize = (size?: TetrisButtonProps['fontSize']) => {
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

const defaultColors = [
  '#ff77aa', // retro-pink
  '#77ddff', // retro-blue
  '#77ff77', // retro-green
  '#ffff77', // retro-yellow
  '#cc77ff', // retro-purple
  '#77ffff', // retro-cyan
  '#ffaa77', // retro-orange
];

const getRandomColor = (colors: string[]) =>
  colors[Math.floor(Math.random() * colors.length)];

const pixelStyle = css<{ $backgroundColor: string }>`
  position: relative;
  width: auto;
  padding: 0.5em 1em;
  margin: 0.625em;
  outline: solid 4px #000; // Changed border size to 4px for pixelated effect
  box-shadow:
    inset 5px 5px 0 rgba(0, 0, 0, 0.4),
    inset -5px -5px 0 rgba(255, 255, 255, 0.4),
    0 10px 5px -4px rgba(0, 0, 0, 0.8);
  transition: linear 0.2s;
  border-radius: 0; // Ensure no rounded corners

  &:before {
    content: ' ';
    position: absolute;
    top: -4px;
    left: -4px;
    width: 10px;
    height: 10px;
    background: ${(props) => props.$backgroundColor};
    border-bottom: solid 4px #000;
    border-right: solid 4px #000;
  }

  &:after {
    content: ' ';
    position: absolute;
    bottom: -4px;
    right: -4px;
    width: 10px;
    height: 10px;
    background: ${(props) => props.$backgroundColor};
    border-top: solid 4px #000;
    border-left: solid 4px #000;
  }

  &:hover {
    box-shadow:
      inset 5px 5px 0 rgba(0, 0, 0, 0.8),
      inset -5px -5px 0 rgba(255, 255, 255, 0.6),
      0 10px 5px -4px ${(props) => props.theme.hoverColor};
  }

  &:active {
    top: 2px;
    left: 2px;
    box-shadow:
      0 3px #b0b0b0,
      0 -1px #fff inset;
    transform: translateY(5px);
  }
`;

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

const TetrisButton: React.FC<TetrisButtonProps> = (props) => {
  const colors = props.colors || defaultColors;
  const [backgroundColor, setBackgroundColor] = useState(
    getRandomColor(colors),
  );

  useEffect(() => {
    setBackgroundColor(getRandomColor(colors));
  }, [colors]);

  return (
    <StyledTetrisButton
      {...props}
      $backgroundColor={props.backgroundColor || backgroundColor}
      theme={{
        backgroundColor,
        hoverColor: getRandomColor(colors),
      }}
    >
      {props.children}
    </StyledTetrisButton>
  );
};

export default TetrisButton;
