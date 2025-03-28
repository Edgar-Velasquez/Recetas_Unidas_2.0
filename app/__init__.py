from flask import Flask
from flask_sqlalchemy import SQLAlchemy

# Crear la aplicación Flask
app = Flask(__name__)

# Configurar la conexión a la base de datos PostgreSQL remota
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'postgres://u3jvest6il2h4e:p1ab1a1e99148f39e3e97f263725f5535d974e474699f2902cfcbe1459f23acba@ccba8a0vn4fb2p.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d7j4rfo19hsug4'
)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializar la extensión SQLAlchemy
db = SQLAlchemy(app)

# Definir modelos y rutas aquí