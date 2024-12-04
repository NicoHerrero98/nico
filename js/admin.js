
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
    import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
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

    async function cargarClientes() {
        const querySnapshot = await getDocs(collection(db, "contactos"));
        const tableBody = document.getElementById("clientes-table-body");

        // Limpiar cualquier contenido previo
        tableBody.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const cliente = doc.data();
            const row = document.createElement("tr");

            const nombreCell = document.createElement("td");
            nombreCell.textContent = `${cliente.nombre} ${cliente.apellido}`;

            const correoCell = document.createElement("td");
            correoCell.textContent = cliente.email;

            const telefonoCell = document.createElement("td");
            telefonoCell.textContent = cliente.telefono;

            const servicioCell = document.createElement("td");
            servicioCell.textContent = cliente.mensaje;  // Aquí asumo que el servicio es el mensaje

            // Agregar las celdas a la fila
            row.appendChild(nombreCell);
            row.appendChild(correoCell);
            row.appendChild(telefonoCell);
            row.appendChild(servicioCell);

            // Agregar la fila a la tabla
            tableBody.appendChild(row);
        });
    }

    // Cargar los clientes cuando se cargue la página
    window.onload = cargarClientes;

