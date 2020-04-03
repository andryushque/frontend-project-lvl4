// @ts-check

import React from 'react';
import { render } from 'react-dom';

const ChannelList = (props) => {
  const { channels: { channels } } = props;

  return (
    <div>
      {channels.map(({ id, name }) => <div key={id}>{name}</div>)}
    </div>
  );
};

export default (channels) => {
  const mountNode = document.getElementById('chat');

  render(
    <div>
      <ChannelList channels={channels} />
    </div>,
    mountNode,
  );
};
