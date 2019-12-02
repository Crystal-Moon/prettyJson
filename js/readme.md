# Pretty Configurations
_Una función, cientos de posibilidades_ :sparkles:

## Sintaxis
```javascript
let myConfig = {
		replacer: null,
		indent: 2,
		comillas: true,
		font: '"Inconsolata", sans-serif',
		index: true,
		noJson: 'all', 
		functions: 'arrow'
	}
//todas las propiedades son opcionales :D
let pretty = prettyJson(myObject,myConfig);
```
## Detalles
`replacer`
   : Al igual que el segundo parametro de [_stringify_](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/stringify#Par%C3%A1metros), prettyJson puede recibir una función que altera el comportamiento del proceso de conversión a  texto, o un array de `String` o `Number` que representan una lista de elementos válidos que se incluyen en la cadena resultante.

`indent`
   : Un numero positivo entre **1** y **10** que indica el espacios a usar como espacios en blanco; este espacio se representa en medida `em` del CSS. Si es mayor que 10, el valor es sólo `10`. Los valores inferiores a 1 o valores no numéricos son rechazados. Por default es **1**, lo que genera una indentación de `1em`.

`comillas` 
   : Por defecto al usar _stringify_ se aplica comillas dobles (`""`) a todos las propiedades del objeto, como a sus valores. Estableciendo esta opcion en `false` se omitirán las comillas en el nombre de los atributos. Los valores de tipo String _siempre_ tendrán comillas, independientemente del valor establecido. Por default es `true`.

`font`
   : Puede elegir una tipografía personal o una incluida en el navegador. Para usar una tipografía que no este entre las propias del navegador, deberá tenerla adjunta en una clausula `@import` de su archivo css, o bien en una etiqueta `<style>`. Por defecto se usa la tipografía [ubuntu-mono](https://fonts.google.com/specimen/Ubuntu+Mono).

`index`
   : _prettyJosn_ agrega números de linea al margen izquierdo del bloque de código estableciendo esta propiedad en `true`. Por defecto es `false`.

`noJson`
   : _prettyJson_ da la posibilidad de parsear tipos de datos que la sintaxis de JSON normalmente rechazaría. Tiene cuatro posibilidades:
      * `false` (**default**) Convertirá todos los valores no permitidos a `null` y los valores del tipo Date aplicara `toISOString()` siempre que sea posible.
      * `"function"` Convertirá las funciones a string y les aplicara el sistema de colores e indentado. El tamaño de las tabulaciones dentro de una función es de _1.2em_, y no se ve afectado por la opción `indent`.
      * `"object"` Convertirá todos los valores no permitidos (excepto funciones) a una sintaxis tal cual se ve en un archivo de código, aplicándole también el sistema de colores.
      * `"all"` Convertirá todos los valores no permitidos por la sintaxis JSON a elementos html y los presentara tal cual usted lo ve en un archivo JS.

`functions`
   : Elija en que formato se expresaran las funciones. Solo tendrá relevancia si la propiedad `noJson` se encuentra en `"function"` o `"all"`. Hay tres opciones:
      * `null` (**default**) Las funciones son presentadas tal cual fueron declaradas en su archivo de código.
      * `"function"` Las funciones son presentadas con la sintaxis que mantuvo javascript hasta ES5. (`function(){...}`)
      * `"arrow"` Las funciones son presentadas con la nueva sintaxis ES6, funciones de flecha. (`()=>{...}`)

_Para conocer las opciones de colores dirijase [aqui](../css/readme.md)._

---

_Hecho con amor por [**CrystalMoon**](https://www.linkedin.com/in/perla-stto/)_ :heart: