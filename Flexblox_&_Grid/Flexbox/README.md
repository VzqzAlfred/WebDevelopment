# Flexbox's properties.

## Properties for the Parent (flex container)

1. ***display: flex;***
> or _inline-flex_
>> Define que una caja será flexbox de bloque o flexbox de línea. 


2. ***flex-direction: row;***
> _row | row-reverse | column | column-reverse_
>> Define el eje principal *(main axis)* ***row-x, column-y***.


3. ***flex-wrap: nowrap;***
> _nowrap | wrap | wrap-reverse_
>> Define si la caja flexbox envuelve o NO a sus hijos.


4. ***flex-flow: row wrap;***
> Es un shorthand de ***flex-direction*** y ***flex-wrap***.


5. ***justify-content: flex-start;*** 
> _flex-start | center | flex-end | space-between | space-around | space-evenly_
>> Define la alineación de los hijos en el eje principal _(main axis)_.


6. ***align-items: stretch;***
> _stretch | flex-start | flex-end | center | baseline_
>> Define la alineación de los hijos en el eje transversal _(cross axis), dentro de cada línea.


7. ***align-content: flex-start;***
> _flex-start | flex-end | center | space-between | space-around | space-evenly | stretch_
>> Define la alineación de los hijos en el eje transversal _(cross axis)_, NO funciona cuando los hijos están en UNA sola línea (cuando ***'flex-wrap: nowrap'***, la propiedad NO FUNCIONA).





## Properties for the Children (flex-item)

1. ***flex-grow: 0;***
> Cuando la caja flexbox tenga espacio sobrante, es la habilidad o el factor de crecer, ***NO acepta valores negativos***.


2. ***flex-shrink: 1;***
> Cuando la caja flexbox NO tenga espacio sobrante, es la habilidad o el factor de encogerse, ***NO acepta valores negativos***.


3. ***flex-basis: auto;***
> Es el tamaño del elemento hijo dentro de la línea de la caja flexbox. 
* Si la caja flexbox tiene dirección de fila, flex-basis representa el width. 
* Si la caja flexbox tiene dirección de columna, flex-basis representa el height.


4. ***flex: 0 1 auto;***
> Es un shorthand de las propiedades: ***flex-grow flex-shrink flex basis***, en ese orden.