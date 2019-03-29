import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';


ReactDOM.render(
    <Family>
        <Member name='John' lastName='Doe'/>
        <Member name='Mary' lastName='Doe'/>
        <Member name='Pablo' lastName='Doe'/>
    </Family>
    , document.getElementById('app'));