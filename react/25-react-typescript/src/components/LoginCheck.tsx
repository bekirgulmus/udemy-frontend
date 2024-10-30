import { useState } from "react";

type UserType = {
  name: string;
  email: string;
  phone: string;
}

export const LoginCheck = () => {
  const [user, setUser] = useState<UserType | null>({} as UserType);

  const handleLogin = () => {
    setUser({
      name: 'Can',
      email: 'ccc@hotmail.com',
      phone: '55555555'
    });
  }

  const handleLogout = () => {
    setUser({} as UserType);
  }

  return (
    <div>
      <button onClick={handleLogin}>Giriş yap</button>
      <button onClick={handleLogout}>Çıkış yap</button>
      <div>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div>
    </div>
  )
}
