import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return <footer>Coded by {props.name} - Contact Me! {props.email}</footer>;
}
