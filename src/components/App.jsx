// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';


const Channels = ({ channels }) => (
  <div className="col-sm-3">
    <ul className="list-group">
      {channels.map(({ id, name }) => <li className="list-group-item" key={id}>{name}</li>)}
    </ul>
  </div>
);

export default (channels) => {
  const mountNode = document.getElementById('chat');
  ReactDOM.render(<Channels channels={channels} />, mountNode);
};
