import React from 'react';

// Component Definition
const CompanyItemDetail = ({selectedCompany}) => {
  return (
    <div className="company-item-detail">
      { selectedCompany.name }<br/>
      { selectedCompany.location }<br/>
      { selectedCompany.tech_field }<br/>
      { selectedCompany.website }<br/>
      { selectedCompany.has_apprenticeship  && "Apprenticeship" }
    </div>
  );
};

export default CompanyItemDetail;

  // { this.props.children }
  
// # Component Invocation
// <CompanyItemDetail>
//   <h3>{ selectedCompany.name } Interviews</h3>
// </CompanyItemDetail>