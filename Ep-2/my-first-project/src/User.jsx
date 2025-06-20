import React from "react";

function User({name,age,phone,email}) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{phone}</h3>
      <h3>{email}</h3>
    </div>
  );
}

export default User;
