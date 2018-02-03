import { Component, h } from 'preact';
import style from './style';

export default class Button extends Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}