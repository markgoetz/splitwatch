import { h } from 'preact';
import styles from './style.css';

export default function HorizontalLayout(props) {
  let additionalClassname = '';
  
  switch (props.align) {
  case 'top':
    additionalClassname = styles.top;
    break;
  case 'middle':
    additionalClassname = styles.middle;
    break;
  case 'bottom':
    additionalClassname = styles.bottom;
  }

  const className = styles.horizontalLayout + ' ' + additionalClassname;

  return (<div class={className}>
    {props.children}
  </div>);
}