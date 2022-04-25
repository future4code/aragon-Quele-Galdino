Navegue até a pasta components e perceba que nosso projeto contém 4 componentes.

No nosso projeto temos duas funções principais: uma para atualizar o estado e outra para renderizar o componente atual na tela.

Hoje iremos fazer uma renderização condicional comandada por um estado localizado na linha 5 do seu App.js. 
Dependendo do número atual da propriedade componente do seu estado, o componente de número correspondente irá renderizar na tela. 

Também temos na linha 14 do App.js, uma função responsável por alterar o estado. Essa função irá adicionar 1 no estado atual. Caso o componente atual seja o 1, ao invocar essa função, o estado será 2 e consequentemente o componente renderizado na tela será o 2.

Na linha 22, temos a chamada da função responsável pela renderização condicional. O trabalho dessa função é retornar o componente de número correspondente ao estado atual.

Na linha 24, temos o botão com um evento onClick que invoca nossa função responsável por alterar o estado.

O fluxo é o seguinte: O usuario clica no botão, o estado é alterado e o novo componente é renderizado na tela.