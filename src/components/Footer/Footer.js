import React from 'react';
import './Footer.css';

export default function Footer({ name, email }) {
  return <footer>Coded by {name} - Contact Me! {email}</footer>;
}
