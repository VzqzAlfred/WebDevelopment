# Redux

Flujo de manejo de **Reduxs**

![Flujo de Redux](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)

1. **Store**: Contiene el _state_, (uno por aplicación).
1. **Dispatch**: Ejecuta una acción que actualizará el _state_.
1. **Action**: Objeto JS con 2 propiedades: _type_ y _payload_(datos).
1. **Subscribe**: Es un manejador de eventos para el _state_.
1. **Reducers**: Son funciones que gestionan los _actions_
