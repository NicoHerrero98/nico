document.addEventListener('DOMContentLoaded', () => {
    const cartTableBody = document.querySelector('.cart-table tbody');
    const grandTotalElement = document.getElementById('grand-total');
    const removedServicesList = document.getElementById('removed-services-list'); // Lista de servicios eliminados

    // Actualiza el total al cargar la página
    updateTotal();

    // Agrega event listener a cada botón de eliminar
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const row = this.closest('tr');
            removeService(row);
        });
    });

    function removeService(row) {
        const serviceName = row.querySelector('td:first-child').innerText;
        const price = parseFloat(row.querySelector('.price').dataset.price);

        // Crear botón para reincorporar el servicio
        const reinstateButton = document.createElement('button');
        reinstateButton.textContent = `Reincorporar ${serviceName}`;
        reinstateButton.classList.add('reinstate-btn', 'btn', 'btn-secondary');
        reinstateButton.dataset.price = price;

        // Agregar el botón a la lista de servicios eliminados
        removedServicesList.appendChild(reinstateButton);

        // Eliminar la fila de la tabla
        row.remove();

        // Actualizar el total
        updateTotal();

        // Listener para reincorporar el servicio
        reinstateButton.addEventListener('click', function() {
            reinstateService(serviceName, price, this);
        });
    }

    function reinstateService(serviceName, price, button) {
        // Crear una nueva fila en la tabla con los detalles del servicio reincorporado
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${serviceName}</td>
            <td>Descripción del servicio</td>
            <td class="price" data-price="${price}">$${price.toLocaleString('es-CO', { minimumFractionDigits: 2 })}</td>
            <td class="total-price">$${price.toLocaleString('es-CO', { minimumFractionDigits: 2 })}</td>
            <td><a href="#" class="remove-item-btn">Eliminar</a></td>
        `;

        // Agregar la nueva fila al cuerpo de la tabla
        cartTableBody.appendChild(newRow);

        // Añadir el listener de eliminación al nuevo botón de "Eliminar"
        newRow.querySelector('.remove-item-btn').addEventListener('click', function(event) {
            event.preventDefault();
            const row = this.closest('tr');
            removeService(row);
        });

        // Eliminar el botón de reincorporación
        button.remove();

        // Actualizar el total
        updateTotal();
    }

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.cart-table .price').forEach(priceElement => {
            total += parseFloat(priceElement.dataset.price);
        });
        grandTotalElement.textContent = total.toLocaleString('es-CO', { minimumFractionDigits: 2 });
    }

});

const mp = new MercadoPago('APP_USR-de0b4c0c-c129-4fdb-a578-ed71bf0c2a21');
const bricksBuilder = mp.bricks();


mp.bricks().create("wallet", "wallet_container", {
    initialization: {
        preferenceId: "<PREFERENCE_ID>",
    },
 customization: {
  texts: {
   valueProp: 'smart_option',
  },
  },
 });
 