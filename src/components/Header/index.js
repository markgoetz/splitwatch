import { h } from 'preact';
import Heading from '../Heading';
import styles from './style.css';

export default function Header(props) {
  return (<div class={styles.headerBg}>
    <Heading level="1">SplitWatch</Heading>
  </div>);
}
