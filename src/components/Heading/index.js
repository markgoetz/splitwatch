import { h } from 'preact';
import styles from './style.css';

export default function Heading(props) {
  const tagProps = { ...props };
  delete tagProps.children;
  delete tagProps.level;

  switch (props.level) {
  case '1':
    return <h1 {...tagProps} class={styles[`level${props.level}`]}>{ props.children }</h1>;
  case '2':
    return <h2 {...tagProps} class={styles[`level${props.level}`]}>{ props.children }</h2>;
  case '3':
    return <h3 {...tagProps} class={styles[`level${props.level}`]}>{ props.children }</h3>;
  case '4':
    return <h4 {...tagProps} class={styles[`level${props.level}`]}>{ props.children }</h4>;
  case '5':
    return <h5 {...tagProps} class={styles[`level${props.level}`]}>{ props.children }</h5>;
  case '6':
    return <h6 {...tagProps} class={styles[`level${props.level}`]}>{ props.children }</h6>;
  }
}