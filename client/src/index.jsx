import React from 'react';
import ReactDOM from 'react-dom';

import Reservations from './Reservations.jsx';

ReactDOM.render(<Reservations urlId={window.location.href} />, document.getElementById('reservations'));
