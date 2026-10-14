const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

require('./database');

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Rutas
app.use('/api/empleados', require('./routes/empleado.routes'));

// Iniciando el servidor
app.listen(app.get('port'), () => {
  console.log('server activo en el puerto', app.get('port'));
});