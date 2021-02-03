import { useState } from 'react';
import axios from 'axios';

const usePatentAssignment = () => {
  const [patentAssignment, setPatentAssignment] = useState([]);

  const setParams = (patent, reel, frame) => {
    const values = {
      hl: true,
      facet: false,
      id:
        'id,displayId,reelNo,frameNo,conveyanceText,patAssigneeName,patAssignorName,inventionTitleFirst,publNumFirst,patNumFirst,corrName,corrAddress1,corrAddress2,corrAddress3,corrAddress4,patAssignorEarliestExDate,patNumSize,applNumSize,publNumSize',
      wt: 'json',
    };
    values.q = '';
    if (patent) {
      values.q = `(patNum:${patent} OR patNumFirst:${patent})`;
    }
    if (reel) {
      values.q = values.q.concat(` AND reelNo:${parseInt(reel, 10)}`);
    }
    if (frame) {
      values.frameNumber = values.q.concat(
        ` AND frameNo:${parseInt(frame, 10)}`
      );
    }
    const patentAssignmentsearch = async () => {
      const { data } = await axios.get(
        'https://assignment.uspto.gov/solr/aotw/searchFirst',
        {
          params: values,
        }
      );
      const results = data.response;

      if (results.numFound) {
        setPatentAssignment(results);
      } else {
        setPatentAssignment({ docs: null });
      }
    };
    patentAssignmentsearch();
  };

  return [patentAssignment, setParams];
};

export default usePatentAssignment;
