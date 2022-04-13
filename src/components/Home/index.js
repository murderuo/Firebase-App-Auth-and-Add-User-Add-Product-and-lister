import { signOuth } from '../config/firebase';
import SignOutCom from '../SignOut';

function Home() {
  return (
    <>
      <div>
        {/* <button onClick={LogOut}>Çıkış yap</button> */}
        Home Component
        <SignOutCom />
        <br />
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="/add-user">
                Add user
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/list-user">
                List user
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add-product">
                Add product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/list-product">
                List product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/sign-out">
                log out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Home;
