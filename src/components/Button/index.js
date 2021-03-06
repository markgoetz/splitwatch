import { h } from 'preact';
import style from './style.css';

export default function Button(props) {
  const baseClassName = style.button;
  const variantClassName = props.isPrimary ? style.primary : style.secondary;
  const className = [baseClassName, variantClassName].join(' ');
  return <button class={className} onClick={props.onClick}>{props.children}</button>;
}