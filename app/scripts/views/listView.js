import React from 'react';
import ReactDOM from 'react-dom';

const UnreadList = React.createClass({
  getInitialState: function(){
    return null
  },
  componentDidMount: function(){},
  openDoc: function(){},
  render: function(){
    return (
      <div className="unread">
        <h2></h2>
        <p></p>
        <ul></ul>
      </div>
    )
  }
});
const ReadList = React.createClass({
  getInitialState: function(){
    return null
  },
  componentDidMount: function(){},
  openDoc: function(){},
  render: function(){
    return (
      <div className="read">
        <h2></h2>
        <p></p>
        <ul></ul>
      </div>
    )
  }
});
