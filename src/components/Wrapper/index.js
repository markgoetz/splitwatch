import { h } from 'preact';
import style from './style';

export default function Wrapper(props) {
  return <div class={style.wrapper}>{props.children}</div>;
}