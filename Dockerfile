# Étape 1 : Utilisation de Node.js pour installer et construire l'application
FROM node:18-alpine AS build

# Installer Ionic CLI globalement
RUN npm install -g @ionic/cli

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application pour la production
RUN ionic build --prod

# Étape 2 : Utilisation de NGINX pour servir l'application Ionic
FROM nginx:alpine

# Copier les fichiers générés par la construction Ionic vers NGINX
COPY --from=build /app/www /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer NGINX pour servir l'application
CMD ["nginx", "-g", "daemon off;"]
