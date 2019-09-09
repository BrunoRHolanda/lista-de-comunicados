# Lista de Comunicados

## Licença Apache 2.0

Copyright 2019 Bruno R. Holanda

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Resumo do projeto

 - Estrutura
    ---- build
    ---- endpoints
    -------- files
    ---- src
    -------- components
    -------- features
    ------------ comunicados
    -------- http
    -------- layouts
    ------------ default
    -------- plugins
    -------- scss
    -------- store
    ---- test

### build

São arquivos essenciais para rodar a aplicação em modo de desenvolvimento e construir a SPA em modo de produção com otimizações.

### endpoints e files

São os arquivos que via json-server simulam o backend.

### src/components

Onde ficam localizados os componentes globais.

### src/features (/comunicados...)

Onde ficam as implementações de telas da aplicação.

### src/http

Onde estão localizados os arquivos de rotas e o router da aplicação, além de configurar o axios.

### src/layouts (/default)

É aqui que ficam os layouts da aplicação que são carregados de acordo com o nome do layout informado pelo arquivo routes.

### src/plugins

Configuração de plugins para o vue.

### src/scss

Sass a serem compilados globalmente.

### src/store

Arquivos globais para o vuex manter o estado ou muda-lo.

### tests

Tests unitários.

## Executando

Para executar basta instalar o node 10 ou superior e rodar os seguintes comandos.

Em um terminal:

> npm install

> npm run server

Abra outro terminal:

> npm run dev
