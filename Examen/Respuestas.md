## Respuestas Cortas Parte 1

### 1. ¿Qué significa que el servidor responda con el código 200 OK?

Cuando el servidor responde con el código `200 OK` significa que la petición a la url especificada se realizó correctamente y que el servidor devolvió la información solicitada.

Un ejemplo de error común es el 404 Not Found, que significa que el recurso o la dirección solicitada no fue encontrada.

### 2. La respuesta llega entre corchetes [ ]. ¿Qué tipo de estructura de datos de JavaScript representa eso una vez que la conviertes con .json()?

Representan a un arreglo de JavaScript. Dentro del arreglo se encuentran varios objetos que contienen la información solicitada.

### 3. ¿Por qué es importante probar un endpoint en Postman antes de consumirlo desde React

Es importante probar el endpoint para poder comprobar que la dirección funciona, pero no solo eso, sino que tambien revisamos que el servidor responda correctamente. Tambien nos permite conocer la estructura de los datos antes de utilizarlos dentro de React.

---

## Parte 2 - Arquitectura React y Componentes

### 1. ¿Qué es una prop en React y para qué sirve?

Una prop es un dato que un componente padre envía a un componente hijo, algo similar a los parametros de una función en javaScript.

Sirve para que los componentes puedan recibir información y mostrar contenido diferente sin tener que repetir el mismo código.

En este proyecto, ListaNoticias envía cada noticia al componente TarjetaNoticia mediante la prop `info`.

Ejemplo:

```jsx
<TarjetaNoticia info={noticia} />
```

### 2. ¿Por qué TarjetaNoticia debería recibir el post completo como un solo objeto (info) en vez de recibir title y body como props separadas? Menciona una ventaja.

Porque el objeto que recibimos nos permite enviar todos los datos de la noticia en una sola prop.

Una ventaja es que, si después necesitamos usar otro campo como userId o imageUrl, no tenemos que agregar nuevas props una por una.

Ejemplo:

```jsx
<TarjetaNoticia info={noticia} />;
// Dentro del componente podemos acceder a:
info.id;
info.title;
info.body;
info.userId;
info.imageUrl;
```

### 3. Explica con tus palabras por qué dividir la app en 3 componentes (Header, ListaNoticias, TarjetaNoticia) es mejor práctica que escribir todo en un solo archivo App.jsx.

Dividir la app en componentes separados nos ayuda a que el codigo sea fácil de leer y sencillo de mantener ya que cada componente mantiene una responsabilidad específica y no tendriamos que buscar en un codigo de 5 mil lineas que contenga toda la aplicación sino que podriamos revisarlo desde un componente en específico.

Cada componente tiene una responsabilidad específica:

- `Header.jsx` muestra la cabecera.
- `ListaNoticias.jsx` administra y recorre las noticias.
- `TarjetaNoticia.jsx` muestra una noticia individual.

También permite reutilizar componentes es decir en vez de crear muchos div con el mismo contenido podriamos reutilizar el componente rapidamente sin crear tantas lineas de codigo y encontrar errores con mayor facilidad.

---

## Parte 3 - Consumo dinámico de la API

### 1. ¿Para qué sirve el arreglo de dependencias vacío [ ] en useEffect(() => {"{...}"}, [ ])? ¿Qué pasaría si lo quitas por completo?

El arreglo vacío nos indica que el efecto debe ejecutarse una sola vez.

Ejemplo:

```
useEffect(() => {
  // Código del fetch
}, []);
```

Si se elimina completamente el arreglo de dependencias, el efecto se ejecutará después de cada renderizado.

En este proyecto podría producir muchas peticiones repetidas a la API.

### 2. ¿Por qué React exige la prop key al renderizar una lista con .map()? ¿Qué problema evita?

La prop key nos permite que React identifique cada elemento de la lista de manera única algo asi como una llave o id único.

Esto ayuda a React a saber qué elemento fue agregado, eliminado o actualizado, evitando actualizaciones incorrectas y mejorando el rendimiento.

### 3. ¿Qué diferencia hay entre el estado `noticias` cuando el componente se monta por primera vez y cuando ya llegó la respuesta del fetch?

La diferencia radica en que al montar el componente por primera vez, el estado `noticias` es un arreglo vacío porque todavía no se ha realizado la petición a la API por lo que no habran datos para mostrar.

Y una vez que el `fetch` obtiene la respuesta correctamente, los datos se almacenan en el estado mediante `setNoticias(datos.slice(0, 12))`. En ese momento, `noticias` deja de estar vacío y pasa a contener un arreglo con los 12 objetos obtenidos de la API.
