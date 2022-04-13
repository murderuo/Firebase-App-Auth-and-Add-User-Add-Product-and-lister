import { signOuth } from '../config/firebase';

function SignOutCom() {
  const LogOut = () => signOuth();
  return (
    <>
      
      <div>
        <button onClick={LogOut}>Çıkış yap</button>
      </div>
    </>
  );
}

export default SignOutCom;
