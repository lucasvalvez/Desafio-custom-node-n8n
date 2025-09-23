# Random Number Generator

Este projeto é uma extensão do n8n, que adiciona um **custom node** para gerar números aleatórios usando a API do [random.org](https://random.org). Ele inclui um workflow de exemplo, um HTML de teste e integração com Docker para facilitar a execução e compartilhamento.

---

## Tecnologias utilizadas

* [n8n](https://n8n.io/) – ferramenta de automação de workflows
* Node.js + npm
* Docker & Docker Compose
* HTML, CSS, JavaScript (para teste frontend)
* Axios (para chamadas HTTP no custom node)
* Postgres (como banco de dados para n8n)

---

## Funcionalidades

* Node custom `RandomNode` que gera números aleatórios entre `min` e `max`.
* Workflow de exemplo integrando Webhook → RandomNode → Respond to Webhook.
* Página HTML para teste do node e do workflow.
* Configuração pronta com Docker Compose, incluindo banco Postgres e volume persistente.

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

* [Docker Desktop para Windows](https://www.docker.com/products/docker-desktop)
* [Node.js + npm](https://nodejs.org/)
* [Git para Windows](https://git-scm.com/download/win) (opcional, para clonar o projeto)

---

## Configuração do projeto

1. **Clone o repositório**:

```powershell
git clone https://github.com/lucasvalvez/Desafio-custom-node-n8n.git
cd Desafio-custom-node-n8n
```

2. **Suba o Docker Compose**:

```powershell
docker-compose up -d --build  
```

3. **Acesse o n8n**:

Abra [http://localhost:5678](http://localhost:5678) no navegador.

---

## Importando e ativando o workflow
1. Clique em **Create Workflow** no canto superior direito
2. Clique nos **três pontinhos** no canto superior direito e selecione **"Import from file"**.
3. Selecione o arquivo `workflows/workflow.json`.
4. Ative o workflow alterando o switch **para "Active"**.

---

## Testando o HTML de integração

1. Abra o arquivo `index.html` na raiz do projeto no navegador.
2. Preencha os campos `Mínimo` e `Máximo` e clique em **Consultar**.
3. O resultado aleatório será exibido e os valores de min/max atualizados.

---

## Estrutura do projeto

```
─ customNode/            # Node custom com build do RandomNode
  ├─ nodes/
  │  └─ Random/
  │     └─ RandomNode.node.ts
  ├─ workflows
  │  └─ workflow.json    # Workflow criado para teste do custom node
  ├─ gulpfile.js         # Responsável por adicionar a logo ao custom node
  ├─ package.json
  └─ tsconfig.json
─ docker-compose.yml
─ index.html             # Página de teste frontend
```

---

## Observações importantes

* Para parar o projeto:

```powershell
docker-compose down
```

---
