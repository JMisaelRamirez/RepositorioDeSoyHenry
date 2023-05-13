# **Diseño a mano alzada de la pagina web**
1. Buscar ejemplos dentro de las paginas web.
2. Hacer el esquema. 

# **Creacion de direcctorios**
1. Abrimos la consola. 
2. Creamos una nueva carpeta con el nombre del proyecto. 
3. Creamos la carpeta en un directorio git.
4. Subimos el directorio a un repositoio git hub creando el directorio en git hub y enlazando el repositorio local con el repositorio de git hub. 
5. Creamos las carpetas necesarias; _src/assets/style,img/,_src/less, index.html, script.js, 

# **Archivos .less**
1. Creamos las variables de los colores en un archivo _.less_.
2. Guardamos los colores en formato hexadecimal en en variables diferentes con el nombre del tipo de color. 
3. Asociamos las variables de los colores a diferentes variables con nombres de cada elementos al que asociaremos ese color. A eso lo definimos como apuntadores (pointers).
4. Creamos un archivo _reset.less_ el cual tendra como contenido los selectores y las declaraciones para evitar inconsistencias entre los diferentes browsers. El contenido lo copiaremos de http://meyerweb.com/eric/tools/css/reset/.
5. Crearemos un archivo _mixins.less_ el cual tendra en su contenido todos los mixins que utilizaremos en los siguientes archivos _.less_.
6. Creamos varios archivos .less. Cada archivo tendra el nombre de cada seccion de la pagina web; header, navigation, global, footer, etc. 
7. *Crearemos un archivo _index.less_ donde importaremos todos los archivos _.less_ utilizando @import '_nombreDelArchivo_'

# **Creacion del contenido HTML**
1. Definimos el lenguaje en la etiqueta html.
2. Definimos el titulo de la pagina web en la etiqueta title
3. definimos el charset en la etiqueta meta 

