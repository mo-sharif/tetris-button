export interface TetrisButtonProps {
  textAlign?: 'left' | 'center' | 'right';
  isSelected?: boolean;
  fontSize?: 'tiny' | 'small' | 'medium' | 'large';
  fontFamily?: string;
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | number;
  letterSpacing?: string;
  lineHeight?: 'normal' | '1.2' | '1.5' | '2' | '3.2';
  backgroundColor?: string;
  children: React.ReactNode;
  onClick?: (e?: any) => void;
}