# Docker Learning Repository

This repository contains various Docker and Docker Compose examples for learning and practice purposes.

## Project Structure

### `/aulas` (Lessons)

Contains the main learning examples:

- **nginx**: Basic Nginx setup with custom HTML and proxy configuration

  - Demonstrates reverse proxy setup with Laravel
  - Contains both development and production Dockerfiles

- **laravel**: PHP Laravel application setup

  - Multi-stage build example for production
  - Development and production configurations
  - Runs with Nginx as reverse proxy

- **node**: Simple Node.js application
  - Express.js server example
  - MySQL database integration
  - Uses Dockerize for container orchestration

### `/desafio-golang` (Golang Challenge)

- Minimal Golang application example
- Multi-stage build to create an optimized image
- Outputs "Full Cycle Rocks!!" message

### `/desafio-node-nginx` (Node.js + Nginx Challenge)

- Full-stack application setup with:
  - Node.js backend with Express
  - Nginx as reverse proxy
  - MySQL database
  - Uses Faker.js to generate random names
  - Demonstrates proper container networking

## Network Types Used

- **bridge**: Default network type for container communication
- **host**: Merges Docker network with host network
- **overlay**: Used for container communication across different machines (Swarm mode)
- **none**: No network access

## Key Features

- Multi-stage builds for optimized production images
- Container orchestration with Docker Compose
- Database persistence with volumes
- Reverse proxy configurations
- Environment variable management
- Container networking examples
- Development and production configurations

## Running the examples

To run the Laravel example with Nginx:

```bash
cd aulas
docker-compose -f docker-compose.laravel.yml up -d
```

To run the Node.js challenge:

```bash
cd desafio-node-nginx
docker-compose up -d
```

To run the Golang challenge:

```bash
cd desafio-golang
docker run gabrielmssantiago/fullcycle
```

Access the applications:

- Laravel: http://localhost:8080
- Node.js Challenge: http://localhost:8080
