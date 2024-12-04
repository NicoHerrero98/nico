
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDULUzHHyWxvzxLBZn41SlmXp3IC1Zz4kg",
  authDomain: "telecomunicaciones--gb--web.firebaseapp.com",
  projectId: "telecomunicaciones--gb--web",
  storageBucket: "telecomunicaciones--gb--web.firebasestorage.app",
  messagingSenderId: "396585060584",
  appId: "1:396585060584:web:a8ff9709ec1077007ce15d",
  measurementId: "G-CXMVS4MMR1"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Capturar los datos del formulario
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evitar el envío normal del formulario

  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const mensaje = document.getElementById('mensaje').value;

  // Guardar en Firebase Firestore
  try {
    await addDoc(collection(db, 'clientes'), {
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      mensaje: mensaje
    });

    // Mostrar notificación al usuario
    document.getElementById('notification').classList.remove('d-none');
    contactForm.reset(); // Limpiar el formulario
  } catch (error) {
    console.error("Error al guardar los datos en Firebase:", error);
  }
});


        