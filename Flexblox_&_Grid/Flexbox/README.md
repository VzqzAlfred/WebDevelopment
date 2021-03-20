# Flexbox's properties.

1. ***display: flex;***
> or _inline-flex_
>> Define que una caja será flexbox de bloque o flexbox de línea. 


2. ***flex-direction: row;***
> _row | row-reverse | column | column-reverse_
>> Define el eje principal *(main axis)* ***row-x, column-y***.


3. ***flex-wrap: wrap;***
> _nowrap | wrap | wrap-reverse_
>> Define si la caja flexbox envuelve o NO a sus hijos.


4. ***flex-flow: column wrap;***
> Es un shorthand de ***flex-direction*** y ***flex-wrap***.


5. ***justify-content: flex-start;*** 
> _flex-start | center | flex-end | space-between | space-around | space-evenly_
>> Define la alineación de los hijos en el eje principal _(main axis)_.


6. ***align-items: stretch;***
> _strech | flex-start | flex-end | center | baseline_
>> Define la alineación de los hijos en el eje transversal _(cross axis), dentro de cada línea.


7. ***align-content: stretch;***
> _flex-start | flex-end | center | space-between | space-around | space-evenly | strech_
>> Define la alineación de los hijos en el eje transversal (cross axis), NO funciona cuando los hijos están en UNA sola línea (cuando 'flex-wrap: nowrap', la propiedad NO FUNCIONA).