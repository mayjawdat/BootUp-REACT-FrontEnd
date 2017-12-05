import React from 'react';

const CompanyItemDetail = ({selectedCompany}) => {
  return (
    <div>
      {selectedCompany.name}<br/>
      {selectedCompany.location}<br/>
      {selectedCompany.tech_field}<br/>
      {selectedCompany.website}<br/>

    </div>
  );
};

export default CompanyItemDetail;