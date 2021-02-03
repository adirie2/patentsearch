import React from 'react';

const PatentItem = ({ doc, assignmentNum }) => {
  const renderedItems = doc.patAssignorName.map((item, index) => (
    <div key={index} className="small item">
      {item}
    </div>
  ));
  return (
    <div key={doc.id} className="ui">
      <div className="ui item">
        <h3 className="ui header">Assignment #{assignmentNum}</h3>
        <div className="ui segment">
          <div className="ui label"> Invention Title </div>
          <h5 className="ui header">{doc.inventionTitleFirst}</h5>
        </div>
        <div className="ui segment">
          <div className="ui label">Assignment Reason</div>
          <h4 className="ui header">{doc.conveyanceText}</h4>
        </div>
        <div className="ui segment">
          <div className="ui label">Publication Number</div>
          <h4 className="ui header">{doc.publNum[0]}</h4>
        </div>
        <div className="ui segment">
          <div className="ui label">Reel/Frame Number</div>
          <h4 className="ui header">
            {doc.reelNo}/{doc.frameNo}
          </h4>
        </div>
        <div className="ui segment">
          <div className="ui label">Corresponding Address</div>
          <h4 className="ui header">
            {doc.corrAddress1} {doc.corrAddress2} {doc.corrAddress3}
          </h4>
        </div>
        <div className="ui segment">
          <div className="ui label">Inventor Names</div>
          <div className="ui list">
            <div className="ui content">
              <div className="ui bulleted list">{renderedItems}</div>
            </div>
          </div>
        </div>
        <div className="ui segment">
          <div className="ui label">Assignee Name</div>
          <h4 className="ui header">{doc.patAssigneeName[0]}</h4>
        </div>
      </div>
    </div>
  );
};

export default PatentItem;
