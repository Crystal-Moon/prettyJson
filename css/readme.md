# Colors Configurations
_A todo color!!!_ :art:

## Sintaxis
```javascript
prettyJson(myObject, myConfig, myColors);
```
Hay dos formas de configurar los colores de _prettyJson_, sobrescribiendo las clases CSS por defecto o pasando por tercer parámetro un objeto detallando cada color elegido.

### :pencil2: Con archivo CSS
El script carga automáticamente los archivos css necesarios para su funcionamiento. Puede preparar su propia hoja de estilos sobrescribiendo las clases que se describen aquí abajo. Todas las clases usadas por _prettyJson_ tienen el prefijo `CM-`, para evitar que entren en conflicto con otras hojas de estilo. 

#### Colores y detalles de uso de las clases CSS
![CM-all #FFF](https://img.shields.io/badge/CM--all-%23FFF-%23FFF "#FFF")  como color general de todo el código, aplicara a todo lo que no se halla establecido un color diferente. Afectara a signos de puntuacion como por ejemplo `,.:{}[]`, etc.

![CM-key #FFF](https://img.shields.io/badge/CM--key-%23FFF-%23FFF "#FFF")  para el nombre de las propiedades del objeto a parsear, su valor por defecto es `inherit`, por lo que toma el color de su padre: CM-all.
    
![CM-back #181A21](https://img.shields.io/badge/CM--back-%23181A21-%23181A21 "#181A21")  `background-color` del bloque de código. _prettyJson_ aplicará esta clase al elemento donde se coloca su retorno.

![CM_index #888](https://img.shields.io/badge/CM--index-%23888-%23888 "#888")  para los numeros de linea. Se debe establecer el uso de `index` del objeto de configuraciones.

![CM-txt #F3DB66](https://img.shields.io/badge/CM--txt-%23F3DB66-%23F3DB66 "#F3DB66")  para todos los tipo string, tanto como valor de un atributo como para valores en variables dentro de las funciones.
  
![CM-num #5588B5](https://img.shields.io/badge/CM--num-%235588B5-%235588B5 "#5588B5")  para valores numericos.

![CM-bool #5588B5](https://img.shields.io/badge/CM--bool-%235588B5-%235588B5 "#5588B5")  para valores booleanos.

![CM-1xx #F3F37C](https://img.shields.io/badge/CM--1xx-%23F3F37C-%23F3F37C "#F3F37C") ![CM-2xx #7FFF00](https://img.shields.io/badge/CM--2xx-%237FFF00-%237FFF00 "#7FFF00") ![CM-3xx #02E2E2](https://img.shields.io/badge/CM--3xx-%2302E2E2-%2302E2E2 "#02E2E2") ![CM-4xx #FFA500](https://img.shields.io/badge/CM--4xx-%23FFA500-%23FFA500 "#FFA500") ![CM-5xx #F12525](https://img.shields.io/badge/CM--5xx-%23F12525-%23F12525 "#F12525") para códigos _HTTP_. No tendrá efecto si no se establece `api` en el objeto de configuraciones.
  
![CM-null #A272F7](https://img.shields.io/badge/CM--null-%23A272F7-%23A272F7 "#A272F7")  para valores `null`.
  
![CM-udf #A272F7](https://img.shields.io/badge/CM--udf-%23A272F7-%23A272F7 "#A272F7")  para valores `undefined`. Solo surgira efecto si se establece el parseo de valores no permitidos.
  
![CM-x #B90404](https://img.shields.io/badge/CM--x-%23B90404-%23B90404 "#B90404") para los operadores matematicos y lógicos en general, ejemplo `<>=+/%&!?`, etc. 
   
![CM-wu #01AD01](https://img.shields.io/badge/CM--wu-%2301AD01-%2301AD01 "#01AD01")  para nombres de metodos, ya sean propios de javascript o creados por el usuario. Solo sera visible si se acepta el parseo de valores no permitidos. 
   
![CM-wc #E8007D](https://img.shields.io/badge/CM--wc-%23E8007D-%23E8007D "#E8007D")  para palabras reservadas de control de bloques y bucles, ejemplo `for`, `while`, `try-catch`, `break`, `if-else`, etc. 
   
![CM-w #2BB9F9](https://img.shields.io/badge/CM--w-%232BB9F9-%232BB9F9 "#2BB9F9")  para palabras reservadas propias del lenguaje que no sean de control de bloques, ejemplo `function`, `class`, `let`, `const`, `this`, etc. 
    
![CM-ags #F5A004](https://img.shields.io/badge/CM--args-%23F5A004-%23F5A004 "#F5A004")  para los argumentos de las funciones.
    
![CM-comm #555](https://img.shields.io/badge/CM--comm-%23555-%23555 "#555")  para commentarios en el código. Solo afecta a los establecido dentro de funciones, no detecta comentarios multilinea (`/*...*/`), solo comentarios de una linea (`//...`), aun asi, si el comentario sobrepasa los 50 caracteres se le agregaran `/*` y `*/` al principio y final.

### :pencil2: Con objeto (no recomendado)

Puede elegir un conjunto de colores distinto cada vez que utilice la función _prettyJson_ y pasarlo como tercer parametro. Tenga en cuenta que al hacerlo de esta manera se estará estableciendo estilos _inline_, con sus respectivos pros y contras.

##### Ejemplo de objeto
```javascript
let myColors={                // clases CSS que representan
      all: '#775392',         // CM-all
      string: '#721140',      // CM-txt
      number: '#f75db0',      // CM-num
      boolean: '#f75db0',     // CM-bool
      null: '#894723',        // CM-null
      undef: '#850382',       // CM-udf
      key: '#775392',         // CM-key
      x: '#738944',           // CM-x
      words: '#759267',       // CM-w
      words_ctrl: '#775235',  // CM-wc
      words_user: '#721140',  // CM-wu
      args: '#759267',        // CM-args
      index: '#123689',       // CM-index
      comment: '#478952',     // CM-comm
      back: '#180018'         // CM-back
  }

prettyJson(myObject, myConfig, myColors);
```

:information_source: Para llevar a cabo cada estilo independiente, _prettyJson_ utiliza expresiones regulares, por lo que existe una pequeña posibilidad de haber confusiones entre estilos en linea y palabras reservadas del lenguaje.  
:warning: Se ruega encarecidamente usar valores **hexadecimales** para minimizar coincidencias indeseadas con `RegExp`.  
:information_source: Se recomienda solo usar este método para el parseo de objetos JSON válidos.

---

_Hecho con amor por [**CrystalMoon**](https://www.linkedin.com/in/perla-stto/)_ :heart: