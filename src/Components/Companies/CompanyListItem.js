import React from 'react';
import { Link } from 'react-router-dom';

const onCompanySelectCheck = (company) => {
  console.log('yes poop', company.name)
}

const CompanyListItem = ({company}) => {
  return (
    <li>
      <Link to={`/companies/${company.id}`}> {company.name} </Link>
    </li>
  );
};

export default CompanyListItem;



// const CompanyListItem = ({company, onCompanySelect}) => {
//   return (
//     <div>
//       <li onClick={() => onCompanySelect(company)}>{company.name}</li>
//     </div>
//   );
// };

