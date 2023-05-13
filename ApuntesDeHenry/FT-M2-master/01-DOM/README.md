![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

<table class="hide" width="100%" style='table-layout:fixed;'>
  <tr>
   <td>
    <a href="https://airtable.com/shrHsDa2eamWqLAre?prefill_clase=01-DOM">
   <img src="https://static.thenounproject.com/png/204643-200.png" width="100"/>
   <br>
   Hacé click acá para dejar tu feedback sobre esta clase.
    </a>
   </td>
          <td>
     <a href="https://quiz.soyhenry.com/evaluation/new/606da62a656c8d23c2e60e8c">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/HSQuiz.svg/768px-HSQuiz.svg.png" width="100" height="100"/>
      <br>
      Hacé click acá completar el quizz teórico de esta lecture.
     </a>
  </td>
  </tr>
</table>


# **Dudas**


# **NOTAS**

## **Que es el DOM**
El Document Object Model (DOM) es una estructura de árbol que representa el contenido HTML de una página web. Permite a los desarrolladores acceder y manipular el contenido de una página web usando lenguajes de programación como JavaScript.

CSS, por otro lado, es un lenguaje utilizado para definir el aspecto visual de una página web. Se utiliza para establecer cosas como el color de fondo, la fuente del texto y el tamaño del elemento en una página web.

Cuando se combinan HTML, CSS y JavaScript, los desarrolladores pueden manipular el DOM para cambiar la apariencia de una página web en función de las acciones del usuario o de otros eventos.

En resumen, el DOM es una representación estructurada del contenido de una página web, y CSS se utiliza para definir cómo se ve ese contenido. Juntos, el DOM y CSS permiten a los desarrolladores crear páginas web interactivas y atractivas para los usuarios.
## **Que son los selectores del DOM**

Los selectores de elementos del DOM son una forma de identificar y seleccionar elementos HTML específicos dentro del Document Object Model (DOM).

Los selectores de elementos del DOM se escriben en CSS y se utilizan para aplicar estilos específicos a los elementos HTML en una página web. Por ejemplo, si se desea aplicar un estilo específico a un encabezado _h1_ en una página web, se puede utilizar un selector de elemento para seleccionar ese elemento específico.

Los selectores de elementos del DOM se basan en el nombre del elemento HTML, por lo que para seleccionar un elemento, simplemente se escribe el nombre del elemento precedido por un símbolo de hash (#) o un punto (.) según corresponda.

Por ejemplo, para seleccionar todos los elementos _p_ en una página web, se puede escribir:

```css
p {
  color: blue;
}
```

## **DOM Events**
Los eventos del DOM (Document Object Model) son acciones que ocurren en una página web y que pueden ser detectadas y manejadas por JavaScript. Algunos ejemplos de eventos del DOM incluyen hacer clic en un botón, mover el cursor sobre un elemento, escribir texto en un campo de entrada, cargar una página web, entre otros.

Los eventos del DOM son importantes porque permiten a los desarrolladores crear interacciones y comportamientos dinámicos en una página web. Cuando un evento ocurre, se puede activar una función de JavaScript que realiza una tarea específica, como cambiar el texto de un elemento o mostrar una ventana emergente.

Además, los eventos del DOM también pueden ser anulados o detenidos, lo que significa que se pueden evitar acciones no deseadas o prevenir que un evento propague a otros elementos en la página.

En resumen, los eventos del DOM son acciones que ocurren en una página web que pueden ser detectadas y manejadas por JavaScript, lo que permite a los desarrolladores crear interacciones dinámicas y personalizadas en una página web.

## **Motor del navegador y el parseo**
El motor del navegador es un software que interpreta el código HTML, CSS y JavaScript de una página web y lo convierte en una representación visual para el usuario.

El motor del navegador consta de varios componentes, incluyendo el motor de renderizado, que se encarga de interpretar el código HTML y CSS de una página web y renderizarlo en la pantalla del usuario. El motor de JavaScript también es una parte importante del motor del navegador, ya que se encarga de interpretar y ejecutar el código JavaScript en una página web.

Por otro lado, el parseo es el proceso de analizar y dividir el código fuente de una página web en diferentes componentes, como elementos HTML, atributos, etiquetas, entre otros. El parseo es una parte fundamental del motor del navegador ya que permite al motor de renderizado entender cómo se estructura el contenido de la página web.

En resumen, el motor del navegador es un software que interpreta y renderiza el código HTML, CSS y JavaScript de una página web, mientras que el parseo es el proceso de analizar y dividir el código fuente de una página web en diferentes componentes. Ambos son esenciales para el correcto funcionamiento y visualización de una página web en un navegador.

## **CSS PreProcessors**
Los preprocesadores nos ayudaran a definir al css de forma mas legible y facil de entender, esto se logra, gracias a que los preprocesadores añadiran caracteristicas como variables, mixins, selectores anidadosm entre otros.
Un ejemplo de estos es el `https://lesscss.org/`. si quisieramos o tendriamos dudas acerca de lees nos dirigimos a la documentacion.

![logoLess](/ApuntesDeHenry/FT-M2-master/_src/assets/02-CSS/logoLess.JPG)

Uno de los beneficios de los preprocesadores, es que no facilita en la modificacion del codigo, si tuvieramos que modificar el valor o el nombre de cualquier elemento varias veces, lo mejor seria guardar ese nombre en una variable y asi al cambiar la variable se cambia todo. 

En el hambito de los preprocesadores tambien existe el hosting (lassy evaluation). Cuando hacemos importaciones el lassy evaluaton no aplica para estas. 


# DOM

#### Introducción al *DOM*

<div class="hide">
En esta Lesson se verán los siguientes temas:

* `DOM`
* `script`
* `document`
* `document` Selectors
* Element Methods
* Event Handlers

</div>

El nombre `DOM` proviene de sus siglas en ingles de 'Document Object Model'. Cuando un navegador carga una página web, toma todo el contenido HTML y genera un modelo para dicho contenido. Utilizando código Javascript podemos acceder y manipular ese modelo ya sea agregando o quitando elementos, cambiando sus atributos y también modificando sus estilos.

## El elemento *script*

Es posible inyectar código Javascript dentro de una página HTML utilizando el elemento `script`. Para ello existen dos formas distintas de realizarlo:

1. Insertando la etiqueta `<script>` en el `<head>` de la página HTML:

```html
    <html>
        <head>
            <script>
                // Acá es donde irá el código Javascript
                alert('Inyectando código Javascript');
            </script>
        </head>
    </html>
```

2. Utilizar la etiqueta `<script>` para inyectar código Javascript contenido en un archivo externo en nuestra página HTML:

```html
    <html>
        <head>
            <script type="text/javascript" src="./index.js" async></script>
        </head>
    </html>
```

*Nota: el atributo `type` debe colocarse como "text/javascript" y en el `src` se debe indicar la ubicación del archivo con código Javascript que queremos inyectar. Es posible también incluir la palabra `async` al final de la etiqueta para indicarle al navegador que debe cargar dicho script de forma asincrónica*

## Document

Mediante la ejecución de Javascript tenemos la posibilidad de acceder a un objeto global denominado `document` que contiene las propiedades del DOM y métodos de su prototipo que nos permiten acceder a los elementos del DOM y manipularlos.

>En el motor de JS que se ejecuta en el browser, el objeto global es `document`, es decir que `this` apunta a `document` cuando lo usamos en el contexto global.

## Selectors

Cuando el Browser parsea el documento HTML, crea una estructura de árbol (el DOM), pensemos que el DOM es un modelo de la página en forma de objetos. JavaScript no sabe cómo trabajar con HTML, pero sí con objetos. Por lo tanto, cada elemento html que esté en el dom, podremos usarlo como un objeto, que tendrá sus propiedades y métodos. Dentro de todos los métodos que contiene `document` en su prototipo los más útiles son los **selectores**. Los **selectores** nos permitiran buscar y recuperar un elemento del DOM. (como cuando buscabamos un elemento en un árbol de búsqueda), sólo que ahora el elemento retornado es un objeto JS que representa una entidad HTML.

Los principales 5 selectores son los siguientes:

### getElementsByClassName

`document.getElementsByClassName` se encarga de encontrar elementos en función del nombre de su clase. Devuelve un array conteniendo los objetos que coincidieron con la búsqueda que puede ser iterado. Debemos brindarle como parámetro un string con el nombre de la clase que deseamos buscar. Ejemplo:

```javascript
    const divs = document.getElementsByClassName('divClass');
```

*En este ejemplo estamos buscando los elementos que contengan 'divClass' como su clase definida*

### getElementById

`document.getElementById` se encarga de encontrar un único elemento en función de su id, por lo que devolverá dicho elemento. Debemos brindarle como parámetro un string con el id del elemento que deseamos buscar. Ejemplo:

```javascript
    const div = document.getElementById('divId');
```

*En este ejempo estamos buscando el elemento cuyo id es igual a 'divId'*

## querySelector

`document.querySelector` es un método que busca los elementos basándose en uno o más selectores CSS. Recordemos que es posible hacer referencia a clases utilizando un `.`, a ids con `#` y a elementos usando el nombre de su etiqueta directamente. Es recomendable utilizar sólo ids con `querySelector` ya que sólo retornará el primer elemento que coincida con el selector indicado. Ejemplo:

```javascript
    const div = document.querySelector('.divId');
```

*En este ejemplo obtendremos el primer elemento con la clase 'divId' pero si hay más elementos con dicha clase no los tendrá en cuenta*

### querySelectorAll

`document.querySelectorAll` funciona de la misma forma que `querySelector` pero en vez de devolver únicamente el primer elemento que coincida con el selector devolverá un array con todos los elementos que coincidan it returns an array like object containing all elements that match the selector. Ejemplo:

```javascript
    const divs = document.querySelectorAll('.divId');
```

*En este ejemplo obtendremos un array con todos los elementos que contengan la clase 'divId'*

### createElement

En el caso de que queramos crear un elemento para agregarlo al `DOM` podemos utilizar `document.createElement`. Este método recibe como parámetro un string indicando el tipo de elemento que deseamos crear y devuelve un elemento vacío de dicho tipo. Ejemplo:

```javascript
    const newDiv = document.createElement('div');
    
```

*En este ejemplo estamos creando un nuevo elemento 'div' vacío*

## Element Methods

Una vez seleccionado el elemento podemos utilizar distintos métodos y propiedades para modificarlo como por ejemplo cambiar su estilo, cambiar de atributos, agregar/eliminar elementos anidados, agregar/eliminar `event listeners`. Algunos de los métodos más comunes son:

### .innerHTML

Con el método `innerHTML` podemos acceder a la información que se encuentra entre las etiquetas de apertura y cierre de un elemento HTML tanto para simplemente lectura o para su modificación. Ejemplo:

```javascript
    const p = document.querySelector('#pId');
    console.log(p.innerHtml) // Va a imprimir el texto dentro del párrafo con el id 'pID'

    p.innerHTML = 'Nuevo texto'; // Acá estamos modificando el texto del párrafo mencionado anteriormente

    console.log(p.innerHTML); // Va a imprimir el nuevo texto que le seteamos, es decir: "Nuevo texto"
```

### .[attribute] y .setAttribute

Podemos llamar al método `.setAttribute` para agregar un atributo a un elemento o sobreescribirlo en el caso de que ya se encuentre definido. Otra forma equivalente de realizarlo pero más corta sería llamando a `.[nombre del atributo] = [nuevo valor]`. Ejemplo:

```javascript
    const a = document.querySelector('#linkHenry'); // Obtengo el elemento a cuyo id es 'linkHenry'

    a.setAttribute('href', 'https://www.soyhenry.com/'); // Seteo el atributo href del elemento a para que redireccione a la página principal de Henry

    a.href = 'https://www.soyhenry.com/'; // Equivalente al anterior pero más corto
```

### .style

Podemos modificar el estilo de un elemento utilizando `.style`. Cabe mencionar que con esto no estamos accediendo al estilo CSS sino que lo que estamos haciendo es agregarle la propiedad `style` dentro de la etiqueta HTML. Ejemplo:

```javascript
    const div = document.querySelector('#divId');

    div.style.height = '300px'; // Le damos una altura de 300 pixeles al div cuyo id es 'divId'
    div.style.background = 'red'; // Le seteamos el color de fondo en rojo a dicho div
```

### .className y .id

Podemos utilizar `.className` y `.id` para acceder y modificar las clases o ids de los elementos. Esto es útil cuando ya tenemos definido en los estilos CSS un estilo en particular asociado a una clase o id y queremos simplemente modificando la clase o id del elemento cambiar su estilo sin tener que modificar propiedad por propiedad. Ejemplo:

```javascript
    const div = document.querySelector('#divId');

    console.log(div.id); // Utilizando ',id' accedemos al nombre de su id, en este caso 'divId'
    div.className = 'nuevaClase'; // Le seteamos la clase 'nuevaClase'
    div.id = 'nuevoId'; // Le seteamos el id 'nuevoId'
```

### .appendChild

Es posible agregar elementos directamente al `DOM` utilizando `.appendChild` sobre el elemento que queremos que sea su padre. Ejemplo:

```javascript
    const body = document.querySelector('body');
    const newDiv = document.createElement('div'); // Creamos un nuevo elemento div

    body.appendChild(newDiv); // Agregarmos el div recién creado dentro del body de la paǵina

```

## Event Listeners

Un `Event Listener` es una función que se ejecuta luego de que ocurra un determinado evento. Existen diferentes tipos de eventos, entre ellos se encuentran: un click, un desplazamiento del mouse por encima del elemento, el apretado de una tecla, etc. Para ver la lista completa pueden consultar el siguiente [link](https://developer.mozilla.org/es/docs/Web/Events)

### Click

El evento más común es el de 'click' y en particular es el único que posee la propiedad `.onclick` para asignarle una función que será ejecutada al clickear el componente indicado. Ejemplo:

```javascript
    const div = document.querySelector('#divId');
    div.onclick = function() {
        console.log('clickeado');
    };
```

*En este ejemplo lo que estamos haciendo es indicarle que cuando se clickee el div cuyo id es 'divId' se ejecute la función ahí definida que lo único que hará en este caso es escribir por consola "clickeado"*

### addEventListener y otros eventos

`.addEventListener` es un método que recibe como primer parámetro el tipo de evento que va a estar esperando y como segundo parámetro una función callback que es la que va a ejecutarse cuando ocurra dicho evento. Nota: es mejor utilizar addEventListener en todos los casos incluyendo los clicks. Ejemplo:

```javascript
    const div = document.querySelector('#divId');
    div.addEventListener('mouseenter', function() {
        console.log('El mouse entró!');
    });
```

*En este ejemplo lo que estamos haciendo es indicarle que cuando el mouse ingrese al div cuyo id es 'divId' se ejecute la función ahí definida que lo único que hará en este caso es escribir por consola "El mouse entró!"*

## Homework

Completa la tarea descrita en el archivo [README](https://github.com/soyHenry/FT-M2/blob/master/01-DOM/homework/README.md)
