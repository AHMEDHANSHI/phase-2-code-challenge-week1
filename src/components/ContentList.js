

import React from 'react'


function ContentList({ props }) {
  return props.map(({ id, first_name, last_name, email, gender,fee_balance }) => (
    <div key={id}>
      <ul><br/>
        <h3>first_name :{first_name}</h3>
        <h4>second_name :{last_name}</h4>
        <p>email:{email} </p>
        <p>gender :{gender}</p>
        <p> fee_balance:{fee_balance}</p>
      </ul><hr />
    </div>
  ));
}

export default ContentList
