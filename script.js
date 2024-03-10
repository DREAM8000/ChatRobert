import requests
import json

# Configura tus credenciales de autenticación de ChatSonic
API_KEY = 'tu_api_key_de_chasonic'
SECRET_KEY = 'tu_secreto_de_chasonic'

# Define la URL base de la API de ChatSonic
BASE_URL = 'https://api.chatsonic.com'

# Función para obtener un token de autenticación
def get_auth_token():
    url = f'{BASE_URL}/auth'
    headers = {'Content-Type': 'application/json'}
    data = {'api_key': API_KEY, 'secret_key': SECRET_KEY}
    response = requests.post(url, headers=headers, data=json.dumps(data))
    if response.status_code == 200:
        return response.json().get('token')
    else:
        print(f'Error al obtener el token de autenticación: {response.text}')
        return None

# Función para enviar un mensaje a través de la API de ChatSonic
def send_message(message):
    token = get_auth_token()
    if token:
        url = f'{https://api.botsonic.ai/v1/botsonic/generate}/message'
        headers = {'Content-Type': 'application/json', 'Authorization': f'Bearer {token}'}
        data = {'message': message}
        response = requests.post(url, headers=headers, data=json.dumps(data))
        if response.status_code == 200:
            print('Mensaje enviado con éxito.')
        else:
            print(f'Error al enviar el mensaje: {response.text}')

# Ejemplo de cómo enviar un mensaje
send_message('¡Hola desde mi bot!')

# Ahora puedes generar el embed del chat utilizando los datos que obtengas de la API de ChatSonic