import { h } from 'preact';
import styles from './style.css';

export default function VerticalLayout(props) {
  let additionalClassname = '';
  
  switch (props.align) {
  case 'left':
    additionalClassname = styles.left;
    break;
  case 'right':
    additionalClassname = styles.right;
    break;
  case 'center':
    additionalClassname = styles.center;
  }

  const className = styles.verticalLayout + ' ' + additionalClassname;

  return (<div class={className}>
    {props.children}
  </div>);
}