import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCofJOXox7hV-h1eOiy8GuHiQxLMHR8Ero",
    authDomain: "textmystar-54214.firebaseapp.com",
    projectId: "textmystar-54214",
    storageBucket: "textmystar-54214.appspot.com",
    messagingSenderId: "1042651984053",
    appId: "1:1042651984053:web:5608a3c949f87766ca0efc"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

   const db = app.firestore();
  const usersCollection = db.collection('utilisateurs');

   const createUser = user => {
    return usersCollection.add(user);
  }

   const getUser = async id => {
    const user = await usersCollection.doc(id).get()

    return user.exists ? user.data() : null;
  }

   const deleteUser = async id => {
    await usersCollection.doc(id).delete()
  }
  export {
    db,
    createUser,
    getUser,
    deleteUser,
    usersCollection
  }
  /*export const useLoadUsers = () => {
    const users = ref([])

    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc=> ({ id:doc.id, ...doc.data()

        }))
    })

    onUnmounted(close)

    return users
  }*/