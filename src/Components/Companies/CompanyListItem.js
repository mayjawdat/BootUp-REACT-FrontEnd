import React from 'react';

const onCompanySelectCheck = (company) => {
  console.log('yes poop', company.name)
}

const CompanyListItem = ({company, onCompanySelect}) => {
  return (
    <div>
      <li onClick={() => onCompanySelect(company)}>{company.name}</li>
    </div>
  );
};

export default CompanyListItem;