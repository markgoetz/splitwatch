import { h } from 'preact';
import styles from './style.css';

export default function VerticalLayout(props) {
  const additionalClassname = props.centered ? '' : styles.centered;
  const className = styles.verticalLayout + ' ' + additionalClassname;

  return (<div class={className}>
    {props.children}
  </div>);
}