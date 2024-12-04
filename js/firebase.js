
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
    const firebaseConfig = {
        apiKey: "AIzaSyDULUzHHyWxvzxLBZn41SlmXp3IC1Zz4kg",
        authDomain: "telecomunicaciones--gb--web.firebaseapp.com",
        projectId: "telecomunicaciones--gb--web",
        storageBucket: "telecomunicaciones--gb--web.firebasestorage.app",
        messagingSenderId: "396585060584",
        appId: "1:396585060584:web:a8ff9709ec1077007ce15d",
        measurementId: "G-CXMVS4MMR1"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Capturar el formulario
    const form = document.getElementById('contactForm');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', async function(event) {
        event.preventDefault();  // Evitar que la página se recargue

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;

        // Agregar los datos a Firestore
        try {
            const docRef = await addDoc(collection(db, "contactos"), {
                nombre: nombre,
                apellido: apellido,
                email: email,
                telefono: telefono,
                mensaje: mensaje
            });

            // Mostrar la notificación de éxito
            notification.classList.remove('d-none');
            form.reset();
        } catch (e) {
            console.error("Error agregando documento: ", e);
        }
    });
    function agregarClientes() {
        const tableBody = document.getElementById("clientes-table-body");

        // Limpiar cualquier contenido anterior
        tableBody.innerHTML = ""};

        // Recorrer la lista de clientes y agregar cada uno a la tabla
        clientes.forEach(cliente => {
            const row = document.createElement("tr");

            const nombreCell = document.createElement("td");
            nombreCell.textContent = cliente.nombre;

            const correoCell = document.createElement("td");
            correoCell.textContent = cliente.correo;

            const telefonoCell = document.createElement("td");
            telefonoCell.textContent = cliente.telefono;

            const servicioCell = document.createElement("td");
            servicioCell.textContent = cliente.servicio;

            

            // Agregar las celdas a la fila
            row.appendChild(nombreCell);
            row.appendChild(correoCell);
            row.appendChild(telefonoCell);
            row.appendChild(servicioCell);
            

            // Agregar la fila a la tabla
            tableBody.appendChild(row);
        });
