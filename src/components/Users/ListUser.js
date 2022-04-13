import {  UseUserlistener } from '../config/firebase';

function ListUser() {
  const userList = UseUserlistener();

  return (
    <>
      <div>user list component</div>
      <br />
      <br />
      {/* <div>{JSON.stringify(userList)}</div> */}

      {userList !== null &&
        userList.map((item, index) => (
          <div key={index}>
            {item.id}-{item.username}
          </div>
        ))}
      <br />
      <br />
      <br />
    </>
  );
}

export default ListUser;
