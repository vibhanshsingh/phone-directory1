import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './common/common.css';
import PhoneDirectory from "./PhoneDirectory";

// import AddSubscriber from "./AddSubscribers";
// import AddSubscribers from "./AddSubscribers";

ReactDOM.render(<PhoneDirectory />, document.getElementById('root'));

registerServiceWorker();