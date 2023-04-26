# JavaScript
## Selectores
> getElementsByClassName

```javascript
    const divs = document.getElementsByClassName('divClass');
```
>getElementsById

```javascript
    const div = document.getElementById('divId');
```

>querySelector

```javascript
const div = document.querySelector('.divId');
```

```javascript
var el = document.querySelector("div.user-panel.main input[name='login']");
```

>querySelectorAll

```javascript
    const divs = document.querySelectorAll('.divId');
```

>createElement('')

```javascript
    const newDiv = document.createElement('div');
```

>.innerHTML

```javascript
    const p = document.querySelector('#pId');
    console.log(p.innerHtml) // Va a imprimir el texto dentro del párrafo con el id 'pID'

    p.innerHTML = 'Nuevo texto'; // Acá estamos modificando el texto del párrafo mencionado anteriormente

    console.log(p.innerHTML); // Va a imprimir el nuevo texto que le seteamos, es decir: "Nuevo texto"
```
> .[attribute] y .setAttribute

```javascript
    const a = document.querySelector('#linkHenry'); // Obtengo el elemento a cuyo id es 'linkHenry'

    a.setAttribute('href', 'https://www.soyhenry.com/'); // Seteo el atributo href del elemento a para que redireccione a la página principal de Henry

    a.href = 'https://www.soyhenry.com/'; // Equivalente al anterior pero más corto
```

> .style

```javascript
    const div = document.querySelector('#divId');

    div.style.height = '300px'; // Le damos una altura de 300 pixeles al div cuyo id es 'divId'
    div.style.background = 'red'; // Le seteamos el color de fondo en rojo a dicho div
```

> .className y .id

```javascript
    const div = document.querySelector('#divId');

    console.log(div.id); // Utilizando ',id' accedemos al nombre de su id, en este caso 'divId'
    div.className = 'nuevaClase'; // Le seteamos la clase 'nuevaClase'
    div.id = 'nuevoId'; // Le seteamos el id 'nuevoId'
```
> .appendChild

```javascript
    const body = document.querySelector('body');
    const newDiv = document.createElement('div'); // Creamos un nuevo elemento div

    body.appendChild(newDiv); // Agregarmos el div recién creado dentro del body de la paǵina
```

> Click

```javascript
    const div = document.querySelector('#divId');
    div.onclick = function() {
        console.log('clickeado');
    };
```

> addEventListener y otros eventos

```javascript
    const div = document.querySelector('#divId');
    div.addEventListener('mouseenter', function() {
        console.log('El mouse entró!');
    });
```

> .value
NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre actualmente escrito dentro del input

```javascript
    if(input.value !== ''){
      let todo = new ToDo(input.value);
      toDoItems.push(todo);
      input.value = '';
      displayToDos();
    }
```

