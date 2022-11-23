# Redux

Flujo de manejo de **Reduxs**

![Flujo de Redux](https://www.google.com/imgres?imgurl=https://d33wubrfki0l68.cloudfront.net/08d01ed85246d3ece01963408572f3f6dfb49d41/4bc12/assets/images/reduxasyncdataflowdiagram-d97ff38a0f4da0f327163170ccc13e80.gif&imgrefurl=https://platzi.com/clases/1613-redux/20653-explicacion-teorica-ciclo-completo-de-redux/&tbnid=ZhOxgS2UFT7uOM&vet=1&docid=8zvnrSQmAqczFM&w=1440&h=1080&source=sh/x/im)

1. **Store**: Contiene el _state_, (uno por aplicación).
1. **Dispatch**: Ejecuta una acción que actualizará el _state_.
1. **Action**: Objeto JS con 2 propiedades: _type_ y _payload_(datos).
1. **Subscribe**: Es un manejador de eventos para el _state_.
1. **Reducers**: Son funciones que gestionan los _actions_
