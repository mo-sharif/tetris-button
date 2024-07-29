import { css } from 'styled-components';

export const pixelStyle = css<{ $backgroundColor: string }>`
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
