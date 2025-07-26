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

## Requisitos Previos

Para poder ejecutar este frontend de forma local, es necesario tener instalado lo siguiente en el entorno:

- Docker Desktop  
- WSL2 (Windows Subsystem for Linux)  
- Virtualización activada desde la BIOS  

> Se recomienda utilizar **Windows** para mayor compatibilidad con WSL2 y Docker.

## Instrucciones de instalación y ejecución

1. Clonar este repositorio:

```bash
git clone https://github.com/stevCount/frontend-joonik.git
cd frontend-joonik
```

2. Copiar el archivo `.env` en la raíz del proyecto, el archivo se comparte de forma personal :

3. Ejecutar el contenedor Docker:

```bash
docker-compose up --build
```

Esto instalará dependencias y levantará el servidor de desarrollo automáticamente.

## Ejecutar pruebas unitarias

Este proyecto incluye pruebas unitarias usando **Jest** y **React Testing Library**.

Para correr las pruebas localmente:

```bash
npm test
```

## Licencia y Derechos de Autor

Este proyecto ha sido desarrollado por **Jhon Steven Vique Rodríguez** © 2025.

## Contacto

Datos de contacto:

- **Correo:** jhonsteven827@gmail.com  
- **Teléfono:** +57 304 272 8958
