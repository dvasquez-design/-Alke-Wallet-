Notas-editor

A continuacion se detallan aquellos conceptos utilizados en la realizacion de la Alke Wallet que no fueron repasados en clase.

localStorage
    Es un almacenamiento del navegador. Guarda datos de forma persistente y no se pierden al recargar ni cerrar el navegador. Solo guarda texto.

    Se utilizaron
        localStorage.setItem(key, value)  -> Guarda dato
        localStorage.getItem(key)         -> Obtiene dato
        localStorage.removeItem(key)      -> Elimina dato

        Ejemplo:
        localStorage.setItem("saldo", "60000");
        let saldo = localStorage.getItem("saldo");

    Su uso en la Wallet fue para guardar datos simulando una base de datos local, especificamente:
        -guardar saldo
        -guardar contactos
        -guardar movimientos


Json.stringify() / Json.parse()
    Producto de que localStorage solo puede guardar texto, pero no listas ni objetos, json permite convertir de objeto a texto (stringify), y texto a objeto (parse).

    Ejemplo:
        const persona = { nombre: "Juan", edad: 30 };
        localStorage.setItem(
            "persona",
            JSON.stringify(persona);
        );

        const recuperado = 
            JSON.parse(localStorage.getItem("persona"));

    Su uso en la Wallet fue para guardar contactos en la lista de contactos y registrar movimientos en el historial de movimientos.

Metodos de Arrays

    push() -> Agrega un elemento al final de un array
        Ejemplo:
            let numeros = [1,2];
            numeros.push(3);
        Su uso en la Wallet fue para agregar contactos
            contactos.push(contacto);

    unshift() -> agrega un elemento al inicio del array
        Ejemplo:
            let numeros = [2,3];
            numeros.unshift(1);
        Se uso en la Wallet para agregar movimientos en el primer puesto de la lista de transacciones
            movimientos.unshift(nuevoMovimiento);

    forEach()
        Recorre un array elemento por elemento sin retornar nada
        Ejemplo:
            let nombres = ["Ana", "Luis"];
            nombres.forEach(nombre => {
                console.log(nombre)
            });
        Se utilizo en la Wallet para mostrar contactos y movimientos.


event.preventDefault()
    Ya que los formularios recargan la pagina por defecto, preventDefault cancela ese comportamiento.
        Ejemplo:
            form.addEventListener("submit", function(e) {
                epreventDefault();
            });
        Se utilizo en el wallet para evitar recarga del navegador al depositar y para mantener control total con JavaScript.

window.location
    Representa la URL actual del navegador
    Tiene propiedades como:
        window.location.href -> Redirigir
        window.location.pathname -> ruta actual
    Ejemplo:
        window.location.href = "menu.html";
        window.location.pathname.includes("deposit.html");
    Se utilizo en la Wallet para
        -Redirigir al menu luego del Log in exitoso.
        -Detectar pagina actual
        -Usar un solo script de JS para todo.

En conclusion, para dotar a la pagina de interactividad mas alla de solo mostrar su dise;o, se utilizo las herramientas para simular: el saldo del usuario, lista de contacto e historial de movimientos.