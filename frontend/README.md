# 💻 Hito 1 Módulo React: Pizzería Mama Mía.

Objetivo: Mostrar un menú de pizzas. Utilizando React y Bootstrap para el diseño. La aplicación permite visualizar diferentes pizzas con sus ingredientes y precios.

## 📝 Descripción

- **Navbar (Barra de Navegación)**:
  - Contiene opciones de navegación como "Home", "Profile", "Login", "Register" y "Logout".
  - Muestra el total de la compra (simulado por el momento).
  - Los botones no tienen funcionalidad, solo se simula un **Token**.

- **Home**: Página principal donde se visualizan los siguientes componentes:
  - **Header**: Un encabezado con un título y una pequeña descripción de la pizzería.
  - **CardPizza**: Cada pizza es presentada en una tarjeta, mostrando información como nombre, precio, ingredientes y una imagen. (El botón "Ver más" no tiene funcionalidad por el momento.)

- **Footer**: Pie de página con el mensaje de derechos reservados.

---

# 💻 Hito 2 Módulo React: Pizzería Mama Mía.

## 📝 Descripción

- **Formulario de Registro**:
  - se crea un formulario de registro que contiene Email, Password y Confirmación de Password.
  Para que muestre un mensaje exitoso:
  - Todas las casillas deben estar completas.
  - El password debe contener más de 6 caracteres.
  - El password y la confirmación de password deben ser iguales.
  De lo contrario debe mostrarse un mensaje personalizado en cada una de las situaciones anteriores.

- **Formulario de Login**:
  - se crea un formulario de registro que contiene Email y Password .
  Para que muestre un mensaje exitoso:
  - Todas las casillas deben estar completas.
  - El password debe contener más de 6 caracteres.
    De lo contrario debe mostrarse un mensaje personalizado en cada una de las situaciones anteriores.

# 💻 Hito 3 Módulo React: Pizzería Mama Mía.

## 📝 Descripción

- **Home Pizzas**:
   - Recorre el array de pizzas y renderiza un componente <CardPizza />.


- **CardPizza**:
  -Muestra la información de cada pizza utilizando props.
  -Itera por la lista de ingredientes de cada pizza y renderiza un <li> por cada ingrediente.



- **Carrito de Compra**:
  - Se simula un carrito de compra tomando extrayendo objetos desde un array contenido en un archivo JS.
  - Recorre el array de pizzaCart y muestra la información de cada pizza en el carrito.
  - Agrega botones para aumentar y disminuir la cantidad de pizzas en el carrito.
  - Calcula el total de la compra y muestra en el carrito.


# 💻 Hito 4 Módulo React: Pizzería Mama Mía.

## 📝 Descripción

Manejo del estado en React utilizando useState y useEffect para realizar peticiones asincrónicas a una API de pizzas. El objetivo fue obtener y mostrar los detalles de las pizzas, incluidos los ingredientes y el precio.

- **Home.jsx**:
   - Recorre el array de pizzas obteniendo datos de Api cargado en el backend  y renderiza un componente <CardPizza />.


- **Pizza.jsx**:
  - Recorre el array de una pizza obteniendo datos de Api cargado en el backend y renderiza.

