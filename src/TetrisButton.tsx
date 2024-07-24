import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

interface TetrisButtonProps {
  textAlign?: 'left' | 'center' | 'right';
  isSelected?: boolean;
  fontSize?: 'tiny' | 'small' | 'medium' | 'large';
  fontFamily?: string;
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  letterSpacing?: string;
  lineHeight?: 'normal' | '1.2' | '1.5' | '2' | '3.2';
  children: React.ReactNode;
  onClick?: (e?: any) => void;
}

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

const colors = [
  '#ff77aa', // retro-pink
  '#77ddff', // retro-blue
  '#77ff77', // retro-green
  '#ffff77', // retro-yellow
  '#cc77ff', // retro-purple
  '#77ffff', // retro-cyan
  '#ffaa77', // retro-orange
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const pixelStyle = css`
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
    background: #1b1b1b;
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
    background: #1b1b1b;
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

const StyledTetrisButton = styled.button<TetrisButtonProps>`
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

  ${(props) =>
    props.isSelected &&
    css`
      background-color: ${getRandomColor()};
    `}
`;

const TetrisButton: React.FC<TetrisButtonProps> = (props) => {
  const [backgroundColor, setBackgroundColor] = useState(getRandomColor());

  useEffect(() => {
    setBackgroundColor(getRandomColor());
  }, []);

  return (
    <StyledTetrisButton
      {...props}
      theme={{
        backgroundColor,
        hoverColor: getRandomColor(),
      }}
    >
      {props.children}
    </StyledTetrisButton>
  );
};

export default TetrisButton;
