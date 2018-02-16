import { h } from 'preact';
import style from './style.css';

export default function Wrapper(props) {
  const baseStyle = style.wrapper;
  let alignStyle = '';

  switch (props.align) {
  case 'left':
    alignStyle = style.left;
    break;
  case 'center':
    alignStyle = style.center;
    break;
  case 'right':
    alignStyle = style.right;
    break;
  }

  const wrapperStyle = `${baseStyle} ${alignStyle}`;

  return <div class={wrapperStyle}>{props.children}</div>;
}