FROM node

# diretorio para salvar as informações referentes ao container do projeto
WORKDIR /usr/app

# #de onde vem para onde vai
COPY package.json ./

# npm pois nem todas as img tem o yarn instalado
RUN npm install

# copia tudo para dentro da porta raiz
COPY . .

EXPOSE 3333

# passamos sempre dentro de um array
CMD ["npm", "run", "dev"]