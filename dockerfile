# Use a imagem base do Node.js versão 14
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /src/index.js

# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./


# Instale as dependências da aplicação
RUN npm install

# Copie todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta em que a aplicação irá escutar (substitua pela porta correta da sua aplicação)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]


# # Use a imagem oficial do MySQL a partir do Docker Hub
# FROM mysql:latest

# # Defina a senha root para o MySQL (altere para uma senha segura)
# ENV MYSQL_ROOT_PASSWORD=root_password

# # Copie um script SQL para inicialização
# COPY init.sql /docker-entrypoint-initdb.d/

# # Exponha a porta do MySQL
# EXPOSE 3306