import { h } from 'preact';
import style from './style.css';

export default function Button(props) {
  const baseClassName = style.button;
  const variantClassName = props.isPrimary ? style.buttonPrimary : style.buttonSecondary;
  const className = [baseClassName, variantClassName].join(' ');
  return <button class={className} onClick={this.props.onClick}>{this.props.children}</button>;
}