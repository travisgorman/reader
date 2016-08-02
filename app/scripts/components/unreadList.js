import React from 'react';

const UnreadList = React.createClass({
  getInitialState: function(){
    return null
  },
  componentDidMount: function(){
    $.ajax({
             
              }),
  },
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
console.log('unreadList connected');
