import { h } from 'preact';
import styles from './style.css';
import headingStyles from './hdg.css';

export default function Header(props) {
  return (<div class={styles.headerBg}>
    <h1 class={headingStyles.hdg + ' ' + headingStyles.hdg_1}>SplitWatch</h1>
  </div>);
}
