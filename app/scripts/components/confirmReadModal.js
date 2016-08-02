import React from 'react';
const ConfirmReadModal = React.createClass({
  getInitialState: function(){
    return null
  },
  componentDidMount: function(){},
  confirmRead: function(){},
  readLater: function(){},
  render: function(){
    return (
      <div className="confirmReadModal">
        <h1> Are You Sure? </h1>
        <p> This document will no longer be available </p>
        <ul>
          <li><input type="checkbox" val="" />Yes, get rid of it </li>
          <li><input type="checkbox" val="" />No, I wan't to finish reading it later </li>
          <li><input type="submit" />submit </li>
        </ul>
      </div>
    )
  }
});
