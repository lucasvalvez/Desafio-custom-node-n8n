FROM n8nio/n8n:latest

USER root

COPY customNode /home/node/.n8n/custom/customNode
WORKDIR /home/node/.n8n/custom/customNode

ENV NODE_ENV=development
RUN npm install && npm run build || true


RUN chown -R node:node /home/node/.n8n

USER node

ENV N8N_CUSTOM_EXTENSIONS=/home/node/.n8n/custom