import React, { useEffect } from 'react';
import PatentItem from './PatentItem';

const PatentList = ({ patentAssignment }) => {
  const renderedList = patentAssignment.docs ? (
    patentAssignment.docs.map((patentData, index) => {
      return (
        <React.Fragment key={index}>
          <div className="ui segment" key={index}>
            <PatentItem
              assignmentNum={patentAssignment.docs.length - index}
              doc={patentData}
            />
          </div>
          <div className="ui clearing divider"></div>
        </React.Fragment>
      );
    })
  ) : (
    <h3>No Results</h3>
  );

  return renderedList ? (
    <div className="ui segment">
      <h3 className="ui center floating header">Patent Assignment Data</h3>
      <div className="ui clearing divider"></div>
      {renderedList}
    </div>
  ) : null;
};

export default PatentList;
