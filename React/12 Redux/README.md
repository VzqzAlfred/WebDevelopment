# Redux

Flujo de manejo de **Reduxs**

![Flujo de Redux](https://images.app.goo.gl/N3PHyAy56gjXkupb9)

1. **Store**: Contiene el _state_, (uno por aplicación).
1. **Dispatch**: Ejecuta una acción que actualizará el _state_.
1. **Action**: Objeto JS con 2 propiedades: _type_ y _payload_(datos).
1. **Subscribe**: Es un manejador de eventos para el _state_.
1. **Reducers**: Son funciones que gestionan los _actions_
