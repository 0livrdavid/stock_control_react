import React, { useState } from 'react';

import Context from './Context';

import Header from './layout/Header';
import Content from './layout/Content';
import End from './layout/End';
import Modal from './layout/Modal';

function App() {
  var urlParams = new URLSearchParams(window.location.search);
  var url_link = urlParams.get('link');
  var url_sublink = urlParams.get('sublink');

  if (url_link === undefined || url_link == null) {
    window.location.replace("?link=link_home");
    url_link = "link_home";
    url_sublink = null;
  }

  const [link, setLink] = useState(url_link);
  const [sublink, setSublink] = useState(url_sublink);

  return (
    <Context.Provider value={{ link, setLink, sublink, setSublink }}>
      <Header />
      <Content />
      <Modal />
      <End />
    </Context.Provider>
  );
}

export default App;
