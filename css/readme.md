# Colors Configuratios
_A todo color!!!_

---
## Sintaxis
```javascript
prettyJson(myObject, myConfig, myColors);
```
Hay dos formas de configurar los colores de prettyJson usando su tercer parametro, un string con la ruta de su archivo CSS o un objeto detallando cada color elejido.

### Archivo CSS
Puede preparar su propia hoja de estilos sobre escribiendo las clases usadas por prettyJson, y pasar la ruta de dicho archivo empezando desde la raiz del sitio. Todas las clases usadas por prettyJson tienen el prefijo `CM-` para evitar que entren en conflicto con otras hojas de estilo. 

#### Colores y detalles de uso de las clases CSS
* ![.CM-all #000](https://img.shields.io/badge/CM--all-%23000-%23000 "#000")
  : usada como color general de todo el codigo, aplicara a todo lo que no se halla establecido un color diferente. Afectara a signos de puntuacion como por ejemplo `, . : {} [] `, etc.
* ![CM-txt #D68B03](https://img.shields.io/badge/CM--txt-%23D68B03-%23D68B03 "#D68B03")
  : usada para todos los tipo string, tanto como valor de un atributo como para valores en variables dentro de las funciones.
* ![CM-num #A272F7](https://img.shields.io/badge/CM--num-%23A272F7-%23A272F7 "#A272F7")
  : usada para todos los valores numericos.
* ![.CM-bool #4A7E96](https://img.shields.io/badge/CM--bool-%234A7E96-%234A7E96 "#4A7E96")
  : usada para valores booleanos
* ![.CM-null #CC0404](https://img.shields.io/badge/CM--null-%23CC0404-%23CC0404 "#CC0404")
  : usada para valores `null`
* ![.CM-udf #CC0404](https://img.shields.io/badge/CM--udf-%23CC0404-%23CC0404 "#CC0404")
  : usada para valores `undefined`. Solo surgira efecto si se establece el parseo de valores no permitidos.
* ![.CM_index #444](https://img.shields.io/badge/CM--index-%23444-%23444 "#444") 
  : usada para los numeros de linea. Solo tendra efecto si se establece el uso de `index` del objeto de configuraciones.
 * ![.CM-x #F00](https://img.shields.io/badge/CM--x-%23F00-%23F00 "#F00")
   : usada para los operadores matematicos y logicos en general, ejemplos `<>=+/ &!?`, etc.
 * ![.CM-wu #080](https://img.shields.io/badge/CM--wu-%23080-%23080 "#080")
   : usada para nombres de metodos, ya sean propios de javascript o creados por el ususario.
 * ![.CM-wc #F75DB0](https://img.shields.io/badge/CM--wc-%23F75DB0-%23F75DB0 "#F75DB0")
   : usada para palabras reservadas de control de bloques y bucles, ejemplo `for`, `while`, `try`, `catch`, `break`, `if else`, etc.
 * ![.CM-w #088AC5](https://img.shields.io/badge/CM--w-%23088AC5-%23088AC5 "#088AC5")
    : usada para palabras reservadas propias del lenguaje que no sean de control de bloques, ejemplo `function`, `class`, `let`, `const`, `this`, etc.
  * ![.CM-ags #7A8C1B](https://img.shields.io/badge/CM--ags-%237A8C1B-%237A8C1B "#7A8C1B")
    : usada para los argumentos de las funciones.
 * ![.CM-comm #333](https://img.shields.io/badge/CM--comm-%23333-%23333 "#333")
    : usada para commentarios en el codigo, solo afecta a los establecido dentro de funciones, no detecta comentarios multilinea (`/*...*/`), solo comentarios de una linea (`//some txt`)
 * ![.CM-key #000](https://img.shields.io/badge/CM--key-%23000-%23000 "#000")
    : usada para las propiedades del objeto a parsear

