import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TetrisButton from './TetrisButton';

describe('TetrisButton', () => {
  test('renders with correct text', () => {
    render(<TetrisButton backgroundColor="#ffffff">Click Me</TetrisButton>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('changes background color on hover', () => {
    render(<TetrisButton backgroundColor="#ffffff">Hover Me</TetrisButton>);
    const button = screen.getByText('Hover Me');
    fireEvent.mouseOver(button);
    expect(button).toHaveStyle('box-shadow: 0 3px #b0b0b0,0 -1px #fff inset');
  });

  test('calls onClick handler', () => {
    const handleClick = jest.fn();
    render(<TetrisButton backgroundColor="#ffffff" onClick={handleClick}>Click Me</TetrisButton>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom font properties', () => {
    render(
      <TetrisButton
        fontSize="large"
        fontFamily="Arial"
        fontWeight="bold"
        letterSpacing="0.1em"
        lineHeight="1.5"
        backgroundColor="#ffffff"
      >
        Custom Font
      </TetrisButton>
    );
    const button = screen.getByText('Custom Font');
    expect(button).toHaveStyle('font-size: 2em');
    expect(button).toHaveStyle('font-family: Arial');
    expect(button).toHaveStyle('font-weight: bold');
    expect(button).toHaveStyle('letter-spacing: 0.1em');
    expect(button).toHaveStyle('line-height: 1.5');
  });
});
