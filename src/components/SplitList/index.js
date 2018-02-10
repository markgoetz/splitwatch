import { h } from 'preact';
import renderTime from '../../lib/renderTime';

export default function SplitList(props) {
  const splitTimes = props.splits.map(split => (
    <li>{renderTime(split)}</li>
  ));
  return (<div>
    <h2>Splits</h2>
    <ol>
      { splitTimes }
    </ol>
  </div>);
}