import React from 'react';

const PairItem = ({ doc }) => {
  const patentNumInfo =
    doc.appStatus == 'Patented Case' ? (
      <div className="ui segment">
        <div className="ui label">Patent Number</div>
        <h5 className="ui header">{doc.patentNumber}</h5>
      </div>
    ) : null;
  const pairInventors = doc.inventors.map((inventor, index) => {
    return (
      <div key={index} className="small item">
        {inventor.nameLineTwo} {inventor.nameLineOne}
      </div>
    );
  });
  return (
    <div key={doc.id} className="ui">
      <div className="ui item">
        <h3 className="ui header">
          Attorney Docket Number: {doc.appAttrDockNumber}
        </h3>
        <div className="ui segment">
          <div className="ui label">Patent Title</div>
          <h5 className="ui header">{doc.patentTitle}</h5>
        </div>
        <div className="ui segment">
          <div className="ui label">Application Status</div>
          <h4 className="ui header">{doc.appStatus}</h4>
        </div>
        {patentNumInfo}
        <div className="ui segment">
          <div className="ui label">Application Type</div>
          <h4 className="ui header">{doc.appType}</h4>
        </div>
        <div className="ui segment">
          <div className="ui label">Corresponding Address</div>
          <h4 className="ui header">
            {doc.corrAddrNameLineOne} {doc.corrAddrNameLineTwo}
            <br />
            {doc.corrAddrStreetLineOne} {doc.corrAddrStreetLineTwo}
            <br />
            {doc.corrAddrPostalCode}
          </h4>
        </div>
        <div className="ui segment">
          <div className="ui label">Inventor Names</div>
          <div className="ui list">
            <div className="ui content">
              <div className="ui bulleted list">{pairInventors}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PairItem;
