// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';


const Channels = ({ channels }) => (
  <ul>
    {channels.map(({ id, name }) => <li key={id}>{name}</li>)}
  </ul>
);

export default (channels) => {
  const mountNode = document.getElementById('chat');
  ReactDOM.render(<Channels channels={channels} />, mountNode);
};
