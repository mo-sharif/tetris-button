## Tetris Button

![TetrisButton Screenshot](https://images.ctfassets.net/d9vefg82sy0n/1qmaAAwp6NUpozEgmPbtQ9/5295e42b41433ad0d84fc36546b01507/Screenshot_2024-07-23_173556.png)

The `TetrisButton` component is a customizable button styled to have a retro pixelated look, inspired by classic video game aesthetics. It allows users to specify various font properties and includes interactive effects for hover and click actions.

[Tetris Button Demo Video](https://videos.ctfassets.net/d9vefg82sy0n/2UQKwNvURhC2RP3ZcvbpnD/3111b3a1f57b9ce9a92fa8f8e9a0108e/Recording_2024-07-23_172825.mp4)

## CSS Styles

The RetroButton component uses styled-components for styling. It includes:

Random Background Color: Each button instance gets a random background color from a predefined set of retro colors.
Pixelated Borders: The button has solid pixelated borders and shadows to give it a retro look.
Interactive Effects:
Hover: On hover, the button's shadow and inset effects are intensified.
Active: On click, the button appears to be pressed down with adjusted shadows and a slight translation.
Custom Font Properties: Users can customize the font properties such as size, family, weight, letter spacing, and line height.

## Installation

```sh
npm install tetris-button
```

## Storybook

To run Storybook for this component, use the following command:

```bash
npm run storybook
```

## Usage

```ts
import TetrisButton from "tetris-button";

const App = () => (
  <TetrisButton
    fontSize="medium"
    fontFamily="Arial, sans-serif"
    fontWeight="bold"
    letterSpacing="0.1em"
    lineHeight="1.5"
    onClick={() => console.log("Button clicked")}
  >
    Click Me
  </TetrisButton>
);

export default App;
```

## Props

```
textAlign: 'left' | 'center' | 'right'
isSelected: boolean
fontSize: 'tiny' | 'small' | 'medium' | 'large'
fontFamily: string
fontWeight: 'normal' | 'bold' | 'bolder' | 'lighter' | number
letterSpacing: string
lineHeight: 'normal' | '1.2' | '1.5' | '2' | '3.2'
backgroundColor?: string;
children: React.ReactNode
onClick: (e?: any) => void
```
