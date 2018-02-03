import { h } from 'preact';
import styles from './style.css';

export default function VerticalLayout({ props, state }) {
  return (<div class={styles.verticalLayout}>
    {this.props.children}
  </div>);
}