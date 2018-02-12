import { h } from 'preact';
import Heading from '../Heading';
import renderTime from '../../lib/renderTime';
import styles from './style';

export default function SplitList(props) {
  const splitTimes = props.splits.map(split => (
    <li className={styles.split}>{renderTime(split)}</li>
  ));
  return (<div>
    <Heading level="2">Splits</Heading>
    <ol className={styles.list}>
      { splitTimes }
    </ol>
  </div>);
}