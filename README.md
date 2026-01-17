 -Alke-Wallet-

Este proyecto corresponde a una aplicacion web tipo Wallet desarrollada como simulacion funcional, orientada a demostrar el flujo basico de una billetera virtual desde la perspectiva del usuario final.

La aplicacion permite realizar operaciones comunes como visualizar saldo, depositar dinero, enviar transferencias y revisar movimientos, todo desde una interfaz clara y responsiva.

---

## Funcionalidades principales

La Wallet permite al usuario:

- Iniciar sesion mediante credenciales de prueba
- Visualizar el saldo disponible
- Realizar depositos de dinero
- Enviar dinero a contactos
- Agregar nuevos contactos
- Visualizar el historial de movimientos
- Mantener la informacion durante la navegacion

---

## Acceso a la aplicacion (credenciales de prueba)

Para efectos de demostracion y pruebas, utilice las siguientes credenciales:

- Usuario: `correo@prueba.com`
- Contrasena: `123456`

---

## Flujo de uso de la aplicacion

1. El usuario accede a la pantalla de Login
2. Al ingresar credenciales validas, se redirige al Menu Principal
3. Desde el menu puede:
   - Depositar dinero
   - Enviar dinero a contactos existentes o nuevos
   - Revisar el historial de movimientos
4. Cada operacion actualiza automaticamente el saldo y el historial

---

## Manejo de informacion

La aplicacion utiliza almacenamiento local del navegador para:

- Conservar el saldo del usuario
- Guardar contactos registrados
- Mantener el historial de movimientos

No se utilizan servidores ni bases de datos externas, ya que se trata de una simulacion frontend.

---

## Tecnologias utilizadas

- HTML5 – Estructura del proyecto
- CSS3 + Bootstrap – Diseno visual y responsive
- JavaScript – Logica y comportamiento

---

## Estructura del proyecto

- login.html → Pantalla de acceso
- menu.html → Menu principal y saldo
- deposit.html → Deposito de dinero
- sendmoney.html → Transferencias y contactos
- transactions.html → Historial de movimientos
- js/script.js → Logica central de la aplicacion


