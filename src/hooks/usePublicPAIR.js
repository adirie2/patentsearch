import { useState } from 'react';
import axios from 'axios';

const usePublicPAIR = () => {
  const [PAIRdata, setPAIRdata] = useState([]);

  const publicPAIRsearch = (patent) => {
    const values = {
      df: 'patentTitle',
      facet: 'true',
      fl: '*',
      fq: '[]',
      qf:
        'appEarlyPubNumber applId appLocation appType appStatus_txt appConfrNumber appCustNumber appGrpArtNumber appCls appSubCls appEntityStatus_txt patentNumber patentTitle inventorName firstNamedApplicant appExamName appExamPrefrdName appAttrDockNumber appPCTNumber appIntlPubNumber wipoEarlyPubNumber pctAppType firstInventorFile appClsSubCls rankAndInventorsList',
      sort: 'applId asc',
      start: '0',
    };
    const search = async () => {
      const response = await axios
        .get(
          `https://servepatents.pythonanywhere.com/servepair/${parseInt(
            patent,
            10
          )}`
        )
        .catch((err) => console.log(err));
      if (!patent) {
        setPAIRdata(response.data);
        return;
      }
      const results = response.data.queryResults;
      console.log(results);
      if (results.searchResponse.response.numFound) {
        setPAIRdata(results);
      } else {
        setPAIRdata(null);
      }
    };
    search();
  };

  return [PAIRdata, publicPAIRsearch];
};

export default usePublicPAIR;
