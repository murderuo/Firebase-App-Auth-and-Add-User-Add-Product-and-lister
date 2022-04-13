import React, { useState, useEffect } from 'react';
import { signOuth, SignStatus, UseLogin } from '../config/firebase';

const initialState = {
  name: '',
  email: '',
  password: '',
  status: false,
  message: '',
};

function SignIn() {
  const { status, name, email } = SignStatus();
  const [values, setValues] = useState(initialState);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const LogIn = () => {
    if (values.email === '' || values.password === '') {
      console.log('email veya parola boş olamaz');
    } else {
      UseLogin(values.email, values.password)
        .then(user =>
          // console.log(user);
          setValues({
            ...values,
            status: true,
            message: 'Giriş başarılı',
            name: user.user.displayName,
            email: '',
            password: '',
          }),
        )
        .catch(err => {
          console.log(err);
        });
    }
  };
  const LogOut = () => {
    signOuth()
      .then(res => console.log(res))
      .catch(err => console.log(err));
    setValues({
      ...values,
      status: !values.status,
      message: 'Çıkış yapıldı',
      name: '',
      email: '',
      password: '',
    });
  };

  useEffect(() => {
    status === true
      ? setValues({ ...values, status: true })
      : setValues({ ...values, status: false });
  }, []);

  return (
    <>
      <div>
        Sign in component
        <br />
        <div>
          <div>
            <div>
              <label htmlFor="">E-mail</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={values.email}
                disabled={values.status}
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input
                type="text"
                name="password"
                onChange={handleChange}
                value={values.password}
                disabled={values.status}
              />
            </div>
            <div>
              <button onClick={LogIn} disabled={values.status}>
                Giriş Yap
              </button>
              <button disabled={!values.status} onClick={LogOut}>
                Çıkış yap
              </button>
            </div>
          </div>
        </div>
        <br />
        {JSON.stringify(values)}
        <br />
        <br />
        {values.name}
        <br />
        {values.status ? <h1>{values.message}</h1> : <h1>{values.message}</h1>}
      </div>
    </>
  );
}

export default SignIn;
