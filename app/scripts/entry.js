import React from 'react';
import ReactDOM from 'react-dom';
import UnreadList from './components/unreadList';
import ReadList from './components/readList';
import DocHead from './components/docHead';
import DocBody from './components/docBody';
import ConfirmReadModal from './components/confirmReadModal';
let page = document.querySelector('.container');


console.log('entry connected');

 ReactDOM.render(<ReadList/>, page );
