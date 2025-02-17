# API DE PRUEBA - CURSO GRATIS NG 19

## Clonar repo:
```bash
git clone 
```

## Instalar dependencias
```bash
npm i
```

## Correr el servicio
```bash
node app.js
```

## Llamadas: (todas con método GET)

- Get trainers by type: `http://localhost:3030/mkw/api/trainers/:type`
- Get trainer image (by trainer id): `http://localhost:3030/mkw/api/trainer/image/:id`
- Get trainers types: `http://localhost:3030/mkw/api/trainer-types`


## Tipos de zapatillas
```javascript
const trainerTypes = {
    SPORT: 'sport',
    CASUAL: 'casual',
    STREET: 'formal'
};
```
