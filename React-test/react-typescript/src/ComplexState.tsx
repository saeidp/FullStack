import React, { useState } from "react";

export interface IUser {
  username: string;
  email: string;
  password: string;
}

const initialUserData: IUser = {
  username: "john",
  email: "sa@hotmail.com",
  password: "****"
};

function ComplexState() {
  const [user, setUser] = useState<IUser>(initialUserData);
  if (!user) {
    // do something else when our user is null
  }

  return (
    <form>
      <input
        value={user.username}
        onChange={e => setUser({ ...user, username: e.target.value })}
      />
      <input
        value={user.email}
        onChange={e => setUser({ ...user, email: e.target.value })}
      />
      <input
        value={user.password}
        onChange={e => setUser({ ...user, password: e.target.value })}
      />
    </form>
  );
}

export default ComplexState;
