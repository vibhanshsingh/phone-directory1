import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './common/common.css';
import PhoneDirectory from "./PhoneDirectory";
import AddSubscribers from "./AddSubscribers";

ReactDOM.render(<AddSubscribers />, document.getElementById('root'));
registerServiceWorker();
