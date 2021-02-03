import React, { useEffect } from 'react';
import SearchBar from './SearchBar';
import usePatentAssignment from '../hooks/usePatentAssignment';
import usePublicPAIR from '../hooks/usePublicPAIR';
import PatentList from './PatentList';
import PairList from './PairList';

const App = () => {
  const [patentAssignment, setPatentAssignment] = usePatentAssignment();
  const [patentpublicPAIR, setPublicPatentPAIR] = usePublicPAIR();
  return (
    <div>
      <SearchBar
        onFormSubmit={(patentNumber, reelNumber, frameNumber) => {
          setPatentAssignment(patentNumber, reelNumber, frameNumber);
          setPublicPatentPAIR(patentNumber);
        }}
      />
      <PatentList patentAssignment={patentAssignment} />
      <PairList patentpublicPAIR={patentpublicPAIR} />
    </div>
  );
};

export default App;
