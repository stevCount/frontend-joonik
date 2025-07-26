# Proyecto Frontend - Lista de Sedes

Este proyecto es un frontend construido con **React**, **TypeScript** y **Material UI** que consume un endpoint protegido con API Key para mostrar una lista de sedes en tarjetas estilizadas.

## Tecnologías utilizadas

- React 18+
- TypeScript
- Material UI
- Axios
- Jest + React Testing Library (para pruebas unitarias)
- Docker (para contenerización)
- Vite (para desarrollo rápido)

### Dependencia de contenedores

Asegúrate de que el backend esté funcionando correctamente, ya que el frontend depende de su endpoint para cargar la información. El backend debe estar disponible en:

```
http://localhost:8080/api/locations
```

o visitar el repo: 

```
https://github.com/stevCount/backend-joonik.git
```

> Si el backend no está activo o la API Key no es válida, no se mostrará ninguna sede.

## Requisitos Previos

Para poder ejecutar este frontend de forma local, es necesario tener instalado lo siguiente en el entorno:

- Docker Desktop  
- WSL2 (Windows Subsystem for Linux)  
- Virtualización activada desde la BIOS  

> Se recomienda utilizar **Windows** para mayor compatibilidad con WSL2 y Docker.

## Instrucciones de instalación y ejecución

1. Clonar este repositorio (si es necesario):

```bash
git clone https://github.com/stevCount/frontend-joonik.git
```

Ingresar a la carpeta del repositorio:

```bash
cd frontend-joonik
```

2. Copiar el archivo `.env` (si se requiere) en la raíz del proyecto, el archivo se comparte de forma personal :

3. Ejecutar el contenedor Docker:

```bash
docker-compose up --build
```

Esto instalará dependencias y levantará el servidor de desarrollo automáticamente, puede tomar unos minutos.

## Visualización del Frontend

Una vez el proyecto esté levantado, puedes acceder a la aplicación en tu navegador a través de:

```
http://localhost:5173/
```

### ¿Qué muestra la aplicación?

Una interfaz profesional construida con **React + TypeScript** y estilizada con **Material UI**, donde se presenta una lista de sedes consumidas desde el backend protegido con API Key. Cada sede incluye:

- Nombre
- Código
- Imagen
- Fecha de creación


## Ejecutar pruebas unitarias

Este proyecto incluye pruebas unitarias usando **Jest** y **React Testing Library**.

Para correr las pruebas localmente:

```bash
docker exec -t frontend-joonik-frontend-1 npm test
```

## Licencia y Derechos de Autor

Este proyecto ha sido desarrollado por **Jhon Steven Vique Rodríguez** © 2025.

## Contacto

Datos de contacto:

- **Correo:** jhonsteven827@gmail.com  
- **Teléfono:** +57 304 272 8958
