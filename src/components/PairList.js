import React from 'react';
import PairItem from './PairItem';

const PairList = ({ patentpublicPAIR }) => {
  const renderedList = patentpublicPAIR.searchResponse ? (
    patentpublicPAIR.searchResponse.response.docs.map((doc) => {
      return (
        <React.Fragment key={doc.id}>
          <div className="ui segment">
            <PairItem doc={doc} />
          </div>
        </React.Fragment>
      );
    })
  ) : (
    <h3>No Results</h3>
  );

  return renderedList ? (
    <div className="ui segment">
      <h3 className="ui center floating header">PAIR Data</h3>
      <div className="ui clearing divider"></div>
      {renderedList}
    </div>
  ) : (
    { renderedList }
  );
};

export default PairList;
