import React from 'react';

const CompanyListItem = ({company}) => {
  return (
    <div>
      <li>{company.name}</li>
    </div>
  );
};

export default CompanyListItem;