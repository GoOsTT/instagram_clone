import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//ez egy alap db struktúra bevezetésére való funkció, ami populálja is a kollekciókat
/* import { seedDatabase } from "../seed"; */
// itt hívtam a funkciót, ez után a db-ben találhatóak ezek az elemek és a struktúra
/* seedDatabase(firebase); */

const config = {
  apiKey: "AIzaSyDHqHwszRrVOFPa38TQtB87chI0-M65CBA",
  authDomain: "instagramclone-94466.firebaseapp.com",
  projectId: "instagramclone-94466",
  storageBucket: "instagramclone-94466.appspot.com",
  messagingSenderId: "587766520975",
  appId: "1:587766520975:web:5e49d7e4e4204ba08164fa",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
