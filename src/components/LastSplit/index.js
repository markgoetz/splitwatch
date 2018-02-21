import { h, Component } from 'preact';
import renderTime from '../../lib/renderTime';

import styles from './style.css';


export default class LastSplit extends Component {
  componentWillReceiveProps(nextProps) {

  }

  render() {

    if (this.props.split) {
      return <div class={styles.lastSplit}>Last split: { renderTime(this.props.split) }</div>;
    }
    
    return <div class={styles.lastSplit}>No splits recorded</div>;
  }
}