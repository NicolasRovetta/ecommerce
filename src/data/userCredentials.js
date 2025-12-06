import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

export const registrarYGuardarUsuario = async (email, password, datosAdicionales) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, "usuarios", user.uid), {
            email: user.email,
            ...datosAdicionales,
            fechaRegistro: new Date()
        });

        return user;
    } catch (error) {
        throw error;
    }
};

export const iniciarSesion = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};
