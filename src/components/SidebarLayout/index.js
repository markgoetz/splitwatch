import { h } from 'preact';
import styles from './style';

export default function SidebarLayout(props) {
  if (props.children.length === 1) {
    return props.children;
  } else if (props.children.length === 2) {
    return (<div class={styles.layout}>
      <div class={styles.left}>{ props.children[0] }</div>
      <div class={styles.right}>{ props.children[1] }</div>
    </div>);
  }
}