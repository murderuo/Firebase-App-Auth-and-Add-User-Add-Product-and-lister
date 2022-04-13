// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useState, useEffect } from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'XXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXX',
  projectId: 'products-19d8a',
  storageBucket: 'XXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXXXXXXX',
  appId: 'XXXXXXXXXXXXXXX',
  measurementId: 'G-XXXXXXXXXXXXXX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const collectionProductRef = collection(db, 'products'); //product içindeki documanları okumak için kullanılıyor
// const documentInProductRef = doc(db, "/products/jmo5Q1J9jGD58Wz8NamK"); //product içindeki ismi verilen documanı okumak için kullanılıyor

export const UseLogin = async (email, password) =>
  await signInWithEmailAndPassword(auth, email, password);

export const signOuth = async () => await auth.signOut();

export const SignStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState({
    status: null,
    name: '',
    email: '',
  });

  useEffect(() => {
    const sub = onAuthStateChanged(auth, user =>
      user !== null
        ? setIsLoggedIn({
            ...isLoggedIn,
            status: true,
            name: user.displayName,
            email: user.email,
          })
        : setIsLoggedIn({ ...isLoggedIn, status: false }),
    );
    return () => sub();
  }, []);

  return isLoggedIn;
};
export const UseProductListener = () => {
  const docRef = doc(db, 'products', 'jmo5Q1J9jGD58Wz8NamK');
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const subs = onSnapshot(
      docRef,
      snaps => {
        // console.log("current data", snaps.data());
        const products = snaps.data()['products'];
        console.log(products);
        setProducts(products);
      },
      error => console.log('cant read collection'), //for get error
    );
    return () => subs();
  }, [auth.currentUser]);
  return products;
};

export const UseUserlistener = () => {
  const [userlist, setUserlist] = useState(null);
  useEffect(() => {
    const docRef = doc(db, 'products', 'b4cAixWBHhNbixhbvlIx');
    const subs = onSnapshot(
      docRef,
      snaps => {
        // console.log("current data", snaps.data());
        const users = snaps.data()['users'];
        console.log(users);
        setUserlist(users);
      },
      error => console.log('cant read users taable'), //for get error
    );
  }, []);
  return userlist;
};

// export const UseDocDataGetter = () => {
//   const [docValues, setDocValues] = useState(null);
//   useEffect(() => {
//     const docRef = doc(db, "products", "jmo5Q1J9jGD58Wz8NamK");
//     const docdata = getDoc(docRef);
//     // console.log(docdata);
//     docdata
//       .then((resp) => {
//         setDocValues(resp.data());
//       })
//       .catch((err) => setDocValues("dokumana ulaşılamadı"));
//   }, []);
//   return docValues;
// };

export const UseAddUser = (id, username) => {
  // const [addUser, setAddUser] = useState(null);
  const payload = { id: parseInt(id), username: username };

  const docRef = doc(db, 'products', 'b4cAixWBHhNbixhbvlIx');
  // const addedUser = updateDoc(docRef, { id:id, username:username });
  const addedUser = updateDoc(docRef, { users: arrayUnion(payload) });
  // const addedUser = updateDoc(docRef, { users: arrayRemove(payload) });

  // addedUser.then(() => 'user Added');
  return 'user is added';
};

export const UseAddProduct = (id, brand, desc) => {
  // const collectionRef = collection(db, "products");
  const docRef = doc(db, 'products', 'jmo5Q1J9jGD58Wz8NamK');
  const payload = { id: parseInt(id), brand: brand, desc: desc };
  const addProduct = updateDoc(docRef, { products: arrayUnion(payload) });

  // addDoc Collection ref alıyor ve docid belirtilmezseotomatik olarak oluşturuyor
  // const addProduct = addDoc(collectionProductRef, payload );

  // setDoc doc_ref alıyor ve belirtilen docid de docu oluşturur ve veriyi bu documana ekliyor
  // const addProduct = setDoc(docRef, payload );

  // updateDoc doc_ref alıyor ve belirtilen docid deki docu güncelliyor
  // const addProduct = updateDoc(docRef, {})

  // arrayUnion ile arrayobjesine ekleme yapıyor (saadece string değer alıyor, nesne ya da array gönderilemiyor)
  // const addProduct = updateDoc(docRef, { products: arrayUnion(payload) });

  // console.log(payload);

  // console.log(addProduct);
  // addProduct.then((res) => console.log(res)).catch((err) => console.log(err));
};

//
// users collection
//
