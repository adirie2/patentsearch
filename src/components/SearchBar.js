import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [patentNumber, setPatentNumber] = useState('');
  const [reelNumber, setReelNumber] = useState('');
  const [frameNumber, setFrameNumber] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(patentNumber, reelNumber, frameNumber);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="fields">
          <div className="field">
            <label>Patent Number</label>
            <input
              type="text"
              value={patentNumber}
              onChange={(e) => {
                setPatentNumber(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label>Reel Number (Patent Assignment Only)</label>
            <input
              type="text"
              value={reelNumber}
              onChange={(e) => setReelNumber(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Frame Number (Patent Assignment Only)</label>
            <input
              type="text"
              value={frameNumber}
              onChange={(e) => setFrameNumber(e.target.value)}
            />
          </div>
        </div>
        <button className="ui button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
