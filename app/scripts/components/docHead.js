import React from 'react';
import ReactDOM from 'react-dom';

const DocHead = React.createClass({
  getInitialState: function(){
    return null
  },
  componentDidMount: function(){},
  markRead: function(){},
  render: function(){
    return (
      <div className="docHead">
        <div className="docInfo">
          <h3></h3>
          <h4></h4>
        </div>
        <div className="markRead"></div>
      </div>

    )
  }
});
console.log('docHead connected');
