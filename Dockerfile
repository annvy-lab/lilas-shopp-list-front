# Usar imagem oficial do Node.js
FROM node:20-alpine

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar e instalar arquivos de dependências
COPY package*.json ./

RUN npm install

# Copiar todo o restante do código fonte
COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]