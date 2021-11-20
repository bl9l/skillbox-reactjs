import React, {PropsWithChildren} from 'react';
import styles from './text.css';

// also change /src/styles/_colors.scss
export enum EColors {
  black = 'text-black',
  white = 'text-white',
  orange = 'text-orange',
  red = 'text-red',
  green = 'text-green',
  grayF4 = 'text-grayF4',
  grayF3 = 'text-grayF3',
  grayD9 = 'text-grayD9',
  grayC4 = 'text-grayC4',
  gray99 = 'text-gray99',
  gray66 = 'text-gray66',
}

interface ITextProps extends PropsWithChildren<{}>{
  As?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4';
  size?: 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 30;
  color?: EColors;
}

export function Text({As = 'span', children, ...props}: ITextProps) {
  const {
    size = 14,
    color = EColors.black,
  } = props;

  const combinedClassName = `${color} text-size-${size}`;

  return (
    <As className={combinedClassName}>{children}</As>
  );
}
