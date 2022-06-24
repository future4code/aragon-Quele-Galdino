# INSTRUÇÕES GERAIS
Este modelo tem o objetivo de orientar, passo a passo, a utilização do REST Client no VSCode.

## PASSO 1 - INSTALAÇÃO
Abra o VSCode e acesse a aba Extensions (atalho: Ctrl+Shift+X).
Na aba de pesquisa, digite REST Client e instale a extensão (nota: criador se chama Huachao Mao)

## PASSO 2 - CRIAÇÃO DE ARQUIVO
Crie um arquivo na pasta desejada com o nome request e extensão de arquivo .rest, da seguinte forma: request.rest
Abra o arquivo criado para sua utilização.

## PASSO 3 - UTILIZAÇÃO PARA UMA ÚNICA REQUISIÇÃO
As requisições no REST Client devem seguir a seguinte sequência de códigos:

### 1º LINHA
Inserimos o método (GET, POST, PUT, DELETE, etc) seguido do endereço url da requisição.
Observação: Params e queries são incluídos na url.

### 2º LINHA E 3º LINHA
Inserimos os Headers (Authorization, por exemplo) e a configuração do body (formato JSON, XML, etc).
Exemplo:
```
Authorization: nome-sobrenome-turma
Content-Type: application/json
```

### 4º LINHA
Nesta linha, damos um espaço para separar as configurações do body.
Observação. Se não dermos este espaço, a requisição não funcionará.

### 5ºLINHA EM DIANTE
Inserimos o Body e suas respectivas propriedades.
Exemplo:
```
{
    "name": "Colorado Appia",
    "description": "Cerveja baseada em trigo e mel, clara e amargor leve",
    "rating": 8
}
```

### EXEMPLO FUNCIONAL
LINHA 1 - METODO ENDEREÇO_URL
LINHA 2 - CONFIGURAÇÕES DO HEADERS
LINHA 3 - CONFIGURAÇÃO DO BODY
LINHA 4 - em branco
LINHA 5 EM DIANTE - BODY

### EXEMPLO PRÁTICO
```
POST https://labedrink.herokuapp.com/drink
Authorization: nome-sobrenome-turma
Content-Type: application/json
{
    "name": "Colorado Appia",
    "description": "Cerveja baseada em trigo e mel, clara e amargor leve",
    "rating": 8
}
```

## PASSO 4 - MÚLTIPLAS REQUISIÇÕES
Para criação de múltiplas requisições, é necessário separar as requisições utilizando ###. Como exemplo:
```
GET https://labedrink.herokuapp.com/drink
Authorization: nome-sobrenome-turma

###
POST https://labedrink.herokuapp.com/drink
Authorization: nome-sobrenome-turma
Content-Type: application/json
{
    "name": "Colorado Appia",
    "description": "Cerveja baseada em trigo e mel, clara e amargor leve",
    "rating": 8
}
```

## PASSO 5 - CONSUMO DAS REQUISIÇÕES
Para consumir as requisições, posicione o cursor na primeira linha da requisição desejada (onde está o método e a url) e rode o atalho Ctrl+Alt+R. A partir desta, uma nova aba será aberta no VSCode com a resposta da requisição.
O conteúdo na nova aba terá o seguinte formato:
```
HTTP/1.1 200 OK
Server: Cowboy
Connection: close
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 313
Etag: W/"139-0DGDUalBg48w4eBNgnlZ28SFOnE"
Date: Thu, 28 Apr 2022 16:48:44 GMT
Via: 1.1 vegur

RESULTADO ESPERADO
```