export const defaultColors = [
  '#ff77aa', // retro-pink
  '#77ddff', // retro-blue
  '#77ff77', // retro-green
  '#ffff77', // retro-yellow
  '#cc77ff', // retro-purple
  '#77ffff', // retro-cyan
  '#ffaa77', // retro-orange
];

export const getRandomColor = (colors: string[]) =>
  colors[Math.floor(Math.random() * colors.length)];
