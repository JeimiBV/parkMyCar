// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import {v4} from "uuid"

const firebaseConfig = {
  apiKey: "AIzaSyAsVE5uo8nyO6I9rEGPHOtVmKVGlEZmSgM",
  authDomain: "imagenesparkmycar.firebaseapp.com",
  projectId: "imagenesparkmycar",
  storageBucket: "imagenesparkmycar.appspot.com",
  messagingSenderId: "275224404028",
  appId: "1:275224404028:web:e68d4079c652cea65ae339",
  measurementId: "G-TC9Y531H6R"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function uploadFile(file){
    const storageRef = ref(storage,v4());
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}
