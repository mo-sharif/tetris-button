import React, { useState, useEffect } from 'react';
import StyledTetrisButton from './StyledTetrisButton';
import { getRandomColor, defaultColors } from './colors';
import { TetrisButtonProps } from './interface';

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
