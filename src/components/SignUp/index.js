function SignUp() {
  return (
    <>
      <h1> Please Sign up</h1>
      <div>
        {' '}
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={'handleChange'} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={'handleChange'} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" onChange={'handleChange'} />
          </div>
          <button
          // onClick={() => {
          //   checkValues(values)
          //     ? signUp(values.name, values.email, values.password)
          //     : console.log('Alanlardan birisi boş');
          // }}
          >
            create new user
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
