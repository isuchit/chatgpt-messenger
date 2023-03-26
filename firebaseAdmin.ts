import admin from "firebase-admin"
import {getApps} from "firebase-admin/app"
import {config} from "./config"

const serviceAccount = JSON.parse(
    config.firebaseServiceAccountKey as string
);

if(!getApps().length){
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
}

const adminDb = admin.firestore();

export {adminDb};