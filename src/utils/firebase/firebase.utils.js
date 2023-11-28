import { initializeApp } from 'firebase/app';
import { 
  collection, 
  getFirestore, 
  doc, 
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSwy2hs8BDTD1wnQPTJrL9I5AVCMCDW4g",
  authDomain: "crwn-clothing-v3-5a84c.firebaseapp.com",
  projectId: "crwn-clothing-v3-5a84c",
  storageBucket: "crwn-clothing-v3-5a84c.appspot.com",
  messagingSenderId: "112508459642",
  appId: "1:112508459642:web:1a496763ccd8e010b9f9c3"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore()

// function to add json to firebase
export const addCollectionAndDocuments = async (collectionkey, objectsToAdd,field) => {
  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db);

  // use forEach and set category( object, we have 3 objects painting, sculpture, sketch)
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)

  })
  await batch.commit()
  console.log('done')
}

// get categories function
export const getCategoriesAndDocuments = async() => {
  const collectionRef = collection(db,'categories')
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapShot) => {
    const {title, items} = docSnapShot.data()
    acc[title.toLowerCase()] = items
    return acc

  },{})
  return categoryMap
}