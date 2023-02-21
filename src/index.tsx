import React from 'react';
import Home from './home';
import Parent from './parent';
import ReactDOM from 'react-dom';

import './style/index.less';

const App = document.querySelector('#app')!;

ReactDOM.render(<Parent />, App);
