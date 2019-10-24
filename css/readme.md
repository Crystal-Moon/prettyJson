readme.md
readme.md
# Colors Configuratios
_A todo color!!!_ :art:

---
## Sintaxis
```javascript
prettyJson(myObject, myConfig, myColors);
```
Hay dos formas de configurar los colores de _prettyJson_, sobrescribiendo las clases CSS por defecto o pasando por tercer parámetro un objeto detallando cada color elegido.

### :pencil2: Con archivo CSS
El script carga automáticamente los archivos css necesarios para su funcionamiento. Puede preparar su propia hoja de estilos sobrescribiendo las clases que se describen aquí abajo. Todas las clases usadas por _prettyJson_ tienen el prefijo `CM-`, para evitar que entren en conflicto con otras hojas de estilo. 

#### Colores y detalles de uso de las clases CSS
![.CM-all #000](https://img.shields.io/badge/CM--all-%23000-%23000 "#000")  como color general de todo el codigo, aplicara a todo lo que no se halla establecido un color diferente. Afectara a signos de puntuacion como por ejemplo `,.:{}[]`, etc.

![.CM-key #000](https://img.shields.io/badge/CM--key-%23000-%23000 "#000")  para el nombre de las propiedades del objeto a parsear, su valor es `inherit`, por lo que toma el color de su pader: CM-all.
    
![CM-txt #D68B03](https://img.shields.io/badge/CM--txt-%23D68B03-%23D68B03 "#D68B03")  para todos los tipo string, tanto como valor de un atributo como para valores en variables dentro de las funciones.
  
![CM-num #A272F7](https://img.shields.io/badge/CM--num-%23A272F7-%23A272F7 "#A272F7")  para todos los valores numericos.
  
![.CM-bool #4A7E96](https://img.shields.io/badge/CM--bool-%234A7E96-%234A7E96 "#4A7E96")  para valores booleanos.
  
![.CM-null #CC0404](https://img.shields.io/badge/CM--null-%23CC0404-%23CC0404 "#CC0404")  para valores `null`.
  
![.CM-udf #CC0404](https://img.shields.io/badge/CM--udf-%23CC0404-%23CC0404 "#CC0404")  para valores `undefined`. Solo surgira efecto si se establece el parseo de valores no permitidos.
  
![.CM_index #444](https://img.shields.io/badge/CM--index-%23444-%23444 "#444")  para los numeros de linea. Se debe establecer el uso de `index` del objeto de configuraciones.
  
![.CM-x #F00](https://img.shields.io/badge/CM--x-%23F00-%23F00 "#F00") para los operadores matematicos y logicos en general, ejemplos `<>=+/%&!?`, etc. 
   
![.CM-wu #080](https://img.shields.io/badge/CM--wu-%23080-%23080 "#080")  para nombres de metodos, ya sean propios de javascript o creados por el ususario. Solo sera visible si se acepta el parseo de valores no permitidos. 
   
![.CM-wc #F75DB0](https://img.shields.io/badge/CM--wc-%23F75DB0-%23F75DB0 "#F75DB0")  para palabras reservadas de control de bloques y bucles, ejemplo `for`, `while`, `try`, `catch`, `break`, `if else`, etc. 
   
![.CM-w #088AC5](https://img.shields.io/badge/CM--w-%23088AC5-%23088AC5 "#088AC5")  para palabras reservadas propias del lenguaje que no sean de control de bloques, ejemplo `function`, `class`, `let`, `const`, `this`, etc. 
    
![.CM-ags #7A8C1B](https://img.shields.io/badge/CM--args-%237A8C1B-%237A8C1B "#7A8C1B")  para los argumentos de las funciones.
    
![.CM-comm #333](https://img.shields.io/badge/CM--comm-%23333-%23333 "#333")  para commentarios en el codigo. Solo afecta a los establecido dentro de funciones, no detecta comentarios multilinea (`/*...*/`), solo comentarios de una linea (`//...`),  aun asi, si el comentario sobrepasa los 50 caracteres se le agregaran `/*` y `*/` al principio y final.

### :pencil2: Con objeto (no recomendado)

Puede elegir un conjunto de colores distinto cada vez que utilice la función _prettyJson_. Tenga en cuenta que hacerlo de esta manera se estará estableciendo estilos en linea lo que afecta al rendimiento general del sitio. Para llevar a cabo cada estilo independiente, _prettyJson_ utiliza expresiones regulares, por lo que existe una pequeña posibilidad de haber confusiones entre estilos en linea y palabras reservadas del lenguaje. 
Se recomienda solo usar este parámetro para el parseo de objetos simples.

##### Ejemplo de objeto
```javascript
let myColor={       //clases CSS que representan
  all: '#775392',     // CM-all
  string: '#721140',    // CM-txt
  number: '#f75db0',    // CM-num
  boolean: '#f75db0',   // CM-bool
  null: '#894723',    // CM-null
  undef: '#850382',   // CM-udf
  key: '#775392',     // CM-key
  x: '#738944',     // CM-x
  words: '#759267',   // CM-w
  words_ctrl: '#775235',  // CM-wc
  words_user: '#721140',  // CM-wu
  args: '#759267',    // CM-args
  index: '#123689',   // CM-index
  comment: '#478952'    // CM-comm
}
```
:warning: _Se ruega encarecidamente usar valores **hexadecimales** para evitar coincidencias indeseadas con `RegExp`._
