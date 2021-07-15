# Persistencia de Datos

## REST vs CRUD
* **REST** *(Representation State Transfer)*: Se basa en las Operaciones del protocolo HTTP, siendo:
    - POST
    - GET
    - PUT
    - DELETE

* **CRUD** *(CREATE, READ, UPDATE & DELETE)*: En computación se usa para referirse a las funciones básicas que un sistema utiliza para interactuar con su capa de presistencia (Base de Dato).


## MySQL vs MongoBD
* **MySQL**: Es `transaccional y relacional`. 
    - SQL
    - Utiliza tablas para agregar Registros.

* **MongoDB**: Son `Documentales, Orientado a Objetos`. 
    - NoSQL - BSON
    - Hace colecciones en documentos.


## MongoDB sintaxis
### Operaciones en colecciones de 'MongoDB'

* **collection.save:** Guarda/actualiza un documento.
* **collection.insert:** Inserta un documento. 
* **collection.findOne:** Recupera un documento.
* **collection.find:** Recupera varios documentos.
* **collection.remove:** Borra uno o varios documentos.
* **collection.drop:** Elimina la colección.
* **collection.rename:** Cambia de nombre la colección.
* **collection.count:** Número de documentos.


### Operadores de Búsqueda

- `$gt / $gte`: _mayor / mayor o igual._
- `$lt / $lte`: _menor / menor o igual._
- `$ne`: _diferente._
- `$in / $nin`: _en / no en array de valores._

Ejemplo: 
```javascript
    micol.findOne({valor: {$in:[5,15]} }, cb)`
```


### Operadores Lógicos
- `$or`: _Se cumple alguna cláusula._
- `$and`: _Se cumplen todas las cláusulas._
- `$nor`: _El resultado opuesto._
- `$not`: _No se cumple todas las cláusulas._

Ejemplo:
```javascript
    micol.finOne({
        $or:[
            {valor: 5},
            {
                precio: { $gt: 15 }
            }
        ]
    }, callback)
```


### Consultas
- El operador _find(...)_ devuelve un cursor.
- **cursor.count(cb):** Cantidad de documentos.
- **cursor.limit(n):** Limitar a 'n' documentos.
- **cursor.skip(n):** Saltarse los 'n' primeros documentos.
- **cursor.nextObject(cb):** Siguiente documento.
- **cursor.each(cb):** Para cada doc, en orden.
- **cursor.toArray(cb):** Convierte el cursor en array.


### Ordenación
`cursor.sort(opciones, [cb])`
* _Ordenar los resultados._
* _Opciones del tipo:_
    - `[["campo", 1], ["otroCampo", -1]]`
    - _1 para ascendente, -1 para descendente._

Ejemplo:
```javascript
    coleccion.find()
        .sort([['a', -1]])
        .nextObject((err, item) => {
            // ...
        })
```


### Inserción
`insert(<documento o array>)`
* _Inserta uno o varios documentos en la colección._

Ejemplo:
```javascript
    db.micol.insert([
        {nombre: "Usuario Prueba"},
        {nombre: "Usuario Prueba 2"}
    ])
```


### Modificación
_El operador más sencillo para modificar:_ `save`
* Si el documento es nuevo _(no tiene _id)_, lo inserta.
* Si el documento ya existe, lo modifica.

Ejemplo:
```javascript 
    db.micol.save({nombre: "Usuario Prueba"})
```


### Eliminación 
`remove(<patrón>)`
* Elimina los documentos que satisfaga la búsqueda.

Ejemplo:
```javascript
    db.micol.remove({nombre: "Usuario Prueba."})
```


<hr>

* _Documentation MongoDB:_ https://docs.mongodb.com/manual/reference/operator/query/