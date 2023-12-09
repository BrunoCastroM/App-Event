# App-Event

# Este é o front-end da API-Event

## Para usar esse aplicativo você deve antes:

1. Baixar o Event-API e fazer os seguintes passos (clique no link para baixar): [https://github.com/BrunoCastroM/Event-API](https://github.com/BrunoCastroM/Event-API)):
    1. Deixar somente o nome ".env" em vez de ".env.example"
    2. Instalar o docker na sua máquina
    3. Abra o projeto e digite o comando: `docker compose up` (Esse comando serve para iniciar os serviços definidos em no arquivo **docker-compose.yml**)
    4. Digite outro comando para iniciar o servidor: `npm run dev`
        
        **OBS:** Caso a aplicação não esteja funcionando, é porque é necessário sincronizar o banco de dados, para isso é só usar o comando: `npx prisma migrate dev`
        
    5. Agora é so usar o postman ou outro programa se sua preferência para testar a API. A base das rotas é `http://localhost:3001/`, qualquer dúvida o item 6 da lista ou verificar no arquivo **route.ts** dentro da pasta src.
    6. Rotas API (informações sobre a API):
        - **Criar Categoria:**
            - Método: POST
            - Endpoint: `http://localhost:3001/category`
            - Parâmetros da requisição: name: string
            - Exemplo (Corpo da requisição): JSON
                
                ```json
                {
                  "name": "Nome da categoria"
                }
                ```
                
        - **Criar Local:**
            - Método: POST
            - Endpoint: `http://localhost:3001/location`
            - Parâmetros da requisição: name: string, address: string
            - Exemplo (Corpo da requisição): JSON
                
                ```json
                {
                  "name": "Nome do local",
                  "address": "Endereço do local"
                }
                ```
                
        - **Criar Evento:**
            - Método: POST
            - Endpoint: `http://localhost:3001/event`
            - Parâmetros da requisição: name: string, date: datetime, description: string, locationId: string, categoryId: string
            - Exemplo (Corpo da requisição): JSON
                
                ```json
                {
                  "name": "Show de música",
                  "date": "yyyy/mm/dd",
                  "description": "Show do capital incial",
                  "categoryId": "8a0b2a87-aab4-43c2-9f66-b0338047e543",
                  "locationId": "31f8317f-0595-47fd-86f9-7c50bb99380e"
                }
                ```
                
        - **Listar todas as categorias:**
            - Método: GET
            - Endpoint: `http://localhost:3001/category`
        - **Listar uma categoria específica:**
            - Método: GET
            - Endpoint: `http://localhost:3001/category/id`
        - **Listar todos os locais:**
            - Método: GET
            - Endpoint: `http://localhost:3001/location`
        - **Listar um local específico:**
            - Método: GET
            - Endpoint: `http://localhost:3001/location/id`
        - **Listar todos os eventos:**
            - Método: GET
            - Endpoint: `http://localhost:3001/event/`
        - **Listar eventos pela Categoria:**
            - Método: GET
            - Endpoint: `http://localhost:3001/events/category/nome da categoria`
        - **Listar eventos pelo Local:**
            - Método: GET
            - Endpoint: `http://localhost:3001/events/location/nome do local`
        - **Listar eventos pela Data:**
            - Método: GET
            - Endpoint: `http://localhost:3001/events/date/yyyy-mm-dd`
            - Exemplo: `http://localhost:3001/events/date/2023-11-18`
        - **Listar eventos pelo Nome:**
            - Método: GET
            - Endpoint: `http://localhost:3001/events/event/nome-do-evento`
        - **Listar um evento específico:**
            - Método: GET
            - Endpoint: `http://localhost:3001/event/id`
        - **Editar um Evento:**
            - Método: PUT
            - Endpoint: `http://localhost:3001/event/id`
            - Exemplo (Corpo da requisição): JSON
                
                ```json
                {
                "name": "Nome do Evento",
                "date": "YYYY-mm-ddT00:00:00.000Z",
                "description": "Descrição do Evento",
                "categoryId": "ID da Categoria",
                "locationId": "ID do Local"
                }
                ```
                
        - **Editar um Local:**
            - Método: PUT
            - Endpoint: `http://localhost:3001/location/id`
            - Exemplo (Corpo da requisição): JSON
                
                ```json
                {
                "name": "Nome do Local",
                "address": "Endereço do Local"
                }
                ```
                
        - **Editar uma Categoria:**
            - Método: PUT
            - Endpoint: `http://localhost:3001/category/id`
            - Exemplo (Corpo da requisição): JSON
                
                ```json
                {
                "name": "Nome da Categoria"
                }
                ```
                
        - **Deletar um Evento:**
            - Método: DELETE
            - Endpoint: `http://localhost:3001/event/id`
            - Eventos podem ser deletetados normalmente
        - **Deletar uma Categoria:**
            - Método: DELETE
            - Endpoint: `http://localhost:3001/category/id`
            - Categoria só pode ser deletada se os eventos relacionados com a categoria específica forem deletados
        - **Deletar um Local:**
            - Método: DELETE
            - Endpoint: `http://localhost:3001/location/id`
            - Local só pode ser deletado se os eventos relacionados ao local forem deletados
    7. Estrutura de dados:
        1. **Event:**
            - **id**: Identificador único do evento (UUID).
            - **name**: Nome do evento.
            - **date**: Data do evento.
            - **description**: Descrição do evento.
            - **category**: Relacionamento com a tabela **Category** usando a chave estrangeira **categoryId**.
            - **categoryId**: Chave estrangeira referenciando a tabela **Category**.
            - **location**: Relacionamento com a tabela **Location** usando a chave estrangeira **locationId**.
            - **locationId**: Chave estrangeira referenciando a tabela **Location**.
            - **created_at**: Data e hora de criação do evento (valor definido para o momento atual).
        2. **Category:**
            - **id**: Identificador único da categoria (UUID).
            - **name**: Nome da categoria.
            - **events**: Lista de eventos relacionados à categoria.
            - **created_at**: Data e hora de criação da categoria (valor definido para o momento atual).
        3. **Location:**
            - **id**: Identificador único da localização (UUID).
            - **name**: Nome da localização.
            - **address**: Endereço da localização.
            - **events**: Lista de eventos relacionados à localização.
            - **created_at**: Data e hora de criação da localização (valor definido para o momento atual).
2. Agora com todas as informações da API passadas. Podemos baixar essa aplicação.
3. Abrindo em um editor de código você deve digitar o comando `npm install`.
4. Depois de instalado todos os pacotes necessários você deve usar o comando: `npm run dev`.
5. Depois disso é so pegar o link e colocar no seu browser, para ver a aplicação funcionando.
6. Informações sobre a aplicação:
    1. Esta aplicação foi desenvolvida para consumir a API-Event. Ela possui uma página principal que descreve os eventos cadastrados no backend da aplicação. Nela, você pode visualizar a data em que o evento ocorrerá, o nome, o local, a hora, a categoria e um botão que permite mostrar a descrição do evento.
    2. Na página “buscar evento” você consegue selecionar eventos por nome, categoria, data e local e fazer uma busca pelos eventos já cadastrados.
    3. Já a página de “criar evento” como o nome já diz, você consegue criar um evento, de acordo com as necessidades dos campos. **OBS:** É necessário você criar antes um local e uma categoria na api, para conseguir selecionar alguma categoria e local na apliacação front-end.