document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       UTILIDADES
    =============================== */
    function obtenerSaldo() {
        let saldo = localStorage.getItem("saldo");

        if (saldo === null) {
            saldo = 60000;
            localStorage.setItem("saldo", saldo);
        }

        return Number(saldo);
    }

    function obtenerContactos() {
        let contactos = JSON.parse(localStorage.getItem("contactos"));
        if (!contactos) {
            contactos = [
                {
                    nombre: "Juan Pérez",
                    banco: "Banco Estado",
                    alias: "juan.perez",
                    cbu: "111111111"
                },
                {
                    nombre: "María López",
                    banco: "Santander",
                    alias: "maria.lopez",
                    cbu: "222222222"
                },
                {
                    nombre: "Carlos Díaz",
                    banco: "BCI",
                    alias: "carlos.diaz",
                    cbu: "333333333"
                }
            ];
            localStorage.setItem("contactos", JSON.stringify(contactos));
        }
        return contactos;
    }

    function guardarContacto(contacto) {
        let contactos = obtenerContactos();
        contactos.push(contacto);
        localStorage.setItem("contactos", JSON.stringify(contactos));
    }

    function obtenerMovimientos() {
        let movimientos = JSON.parse(localStorage.getItem("movimientos"));
        if (!movimientos) {
            movimientos = [
                { texto: "Depósito inicial", monto: 60000 }
            ];
            localStorage.setItem("movimientos", JSON.stringify(movimientos));
        }
        return movimientos;
    }

    function guardarMovimiento(texto, monto) {
        let movimientos = obtenerMovimientos();
        movimientos.unshift({ texto, monto });
        localStorage.setItem("movimientos", JSON.stringify(movimientos));
    }

    /* ===============================
       LOGIN
    =============================== */
    const botonLogin = document.getElementById("botonLogin");

    if (botonLogin) {
        botonLogin.addEventListener("click", function () {

            const emailInput = document.getElementById("Email");
            const passwordInput = document.getElementById("passwordInput");

            if (!emailInput || !passwordInput) {
                console.error("Inputs de login no encontrados");
                return;
            }

            const usuario = emailInput.value;
            const pass = passwordInput.value;

            if (usuario === "correo@prueba.com" && pass === "123456") {
                localStorage.setItem("loginExitoso", "true");
                obtenerSaldo();
                window.location.href = "menu.html";
            } else {
                alert("Credenciales incorrectas");
            }
        });
    }

    /* ===============================
       MENU PRINCIPAL
    =============================== */
    const saldoElemento = document.getElementById("saldo");

    if (saldoElemento) {
        const saldo = obtenerSaldo();
        saldoElemento.textContent = `$${saldo}`;
    }

     /* ===============================
       DEPOSITO
    =============================== */
    const depositButton = document.getElementById("depositButton");
    if (depositButton) {
        depositButton.addEventListener("click", function (e) {
            e.preventDefault();
            const monto =
            Number(document.getElementById("depositAmount").value);
            if (monto <= 0 || isNaN(monto)){
                alert("Ingrese un monto valido");
                return;
            }

            let saldo = obtenerSaldo() + monto;
            localStorage.setItem("saldo", saldo);

            guardarMovimiento("Deposito a cuenta propia", monto)

            alert("Deposito realizado con exito");
            document.getElementById("depositAmount").value = "";
        });
    }

    /* ===============================
       SEND MONEY
    =============================== */

    if (window.location.pathname.includes("sendmoney.html")) {

        const select = document.getElementById("contactSelect");

        function cargarContactos() {
            const contactos = obtenerContactos();
            select.innerHTML = `<option value="">Seleccione un contacto</option>`;
            contactos.forEach(c => {
                const option = document.createElement("option");
                option.value = c.nombre;
                option.textContent = `${c.nombre} | ${c.alias} | ${c.banco}`;
                select.appendChild(option);
            });
        }

        cargarContactos();

        // AGREGAR CONTACTO
        const addButton = document.getElementById("addContactButton");
        if (addButton) {
            addButton.addEventListener("click", function () {
                const nombre = document.getElementById("newName").value.trim();
                const alias = document.getElementById("newAlias").value.trim();
                const banco = document.getElementById("newBank").value.trim();

                if (!nombre || !alias || !banco) {
                    alert("Complete todos los campos para agregar contacto");
                    return;
                }

                const cbu = Math.floor(100000000 + Math.random() * 900000000).toString();

                guardarContacto({ nombre, alias, banco, cbu });

                alert("Contacto agregado exitosamente");

                document.getElementById("newName").value = "";
                document.getElementById("newAlias").value = "";
                document.getElementById("newBank").value = "";

                cargarContactos();
            });
        }

        // ENVIAR DINERO
        const sendButton = document.getElementById("sendMoneyButton");
        if (sendButton) {
            sendButton.addEventListener("click", function () {
                const monto = Number(document.getElementById("sendAmount").value);
                const contacto = select.value;

                if (monto <= 0 || contacto === "") {
                    alert("Complete todos los campos para enviar dinero");
                    return;
                }

                let saldo = obtenerSaldo();
                if (monto > saldo) {
                    alert("Saldo insuficiente");
                    return;
                }

                saldo -= monto;
                localStorage.setItem("saldo", saldo);

                guardarMovimiento(`Transferencia a ${contacto}`, -monto);

                alert("Transferencia realizada");
                window.location.href = "menu.html";
            });
        }
    }

    /* ===============================
       TRANSACCIONES
    =============================== */

    if (window.location.pathname.includes("transactions.html")) {

        const lista = document.getElementById("listaMovimientos");
        const movimientos = obtenerMovimientos();

        lista.innerHTML = "";

        movimientos.forEach(m => {
            const li = document.createElement("li");
            const color = m.monto > 0 ? "text-success" : "text-danger";
            const signo = m.monto > 0 ? "+" : "-";

            li.className = "list-group-item d-flex justify-content-between px-4";
            li.innerHTML = `
                <span>${m.texto}</span>
                <span class="${color} font-weight-bold">
                    ${signo} $${Math.abs(m.monto)}
                </span>
            `;
            lista.appendChild(li);
        });
    }
});
