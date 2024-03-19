<h2 align="center"> PetAdote: Sistema de Adoção de Animais </h2>
<p align="center"> Projeto desenvolvido durante a disciplina de Programação Orientada a Objetos </p>

<hr>
  
### 💻 Stack
Frontend:
  - Typescript
  - React.js
  - Tailwind
  - Axios
  - ?

Backend:
  - Java 17
  - SpringBoot
  - PostgreSQL
  - ?
<hr>

Requisitos:
Necessário ter Git, Node, Java 17 e Maven instalado  

### ⌨️ Rodando o backend:
```bash
# Clone este repositório
$ git clone https://github.com/reidn3r/petadote

# Acesse a pasta do projeto no terminal/cmd
$ cd petadote/backend

#Opção 1:
  # Build dos container's
  $ cd petadote/backend/demo
  $ docker-compose up -d

#Opção 2:
  # Configurar o arquivo application.properties
  spring.datasource.url=jdbc:postgresql://localhost:5432/NOME_BANCO_DE_DADOS
  spring.datasource.username=USERNAME_POSTGRES
  spring.datasource.password=SENHA_POSTGRES

# Execute a aplicação em modo de desenvolvimento
$ mvn spring-boot:run
```

### ⌨️ Rodando o frontend:
```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd petadote/frontend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```

