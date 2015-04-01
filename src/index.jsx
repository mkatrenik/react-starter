import React from 'react';
import App from './app.jsx';
import FluxComponent from 'flummox/component';


React.render(
    <FluxComponent>
        <App />
    </FluxComponent>
    ,
    document.querySelector('#app')
);
