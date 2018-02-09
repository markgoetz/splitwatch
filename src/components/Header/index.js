import { h } from 'preact';
import styles from './style.css';

export default function Header(props) {
  return (<div class={styles.headerBg}>
    <h1>SplitWatch</h1>
  </div>);
}
