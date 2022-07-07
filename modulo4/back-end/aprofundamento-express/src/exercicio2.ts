//exercicio 2

//Acesse a API do JSONPlaceholder e analise os endpoints que buscam afazeres (”todos”). Crie um array de afazeres para servir como base de dados da nossa API e insira 2 afazeres para cada usuário no respectivo array (2 a 3 usuários). Cada afazer será representado pelas seguintes propriedades:
//• userId: Usuário que é responsável pelo afazer.
//• id: Identificação de um afazer na lista.
//• title: Descrição de um afazer.
//• completed: Status do afazer, alternando entre completo (true) ou incompleto (false)

//Observação: Não se preocupem quanto a criar e tipar os usuários, nesta atividade eles serão representados apenas pelo seu userId.

//Dicas:
//• Os afazeres devem ser representados por um type específico, com as propriedades definidas anteriormente.
//• A lista de afazeres será um type[ ].
//• Você pode armazenar esta lista dentro do próprio arquivo da atividade ou criar um arquivo .json e importá-la (e também tipar) para o contexto da atividade.

export type Tarefa = {
userId: string
id: Number
title: string
complited: boolean
}

export const tarefas: Tarefa[] = [
{userId: "um",
id: 1,
title: "lavar a louça", 
complited: true
},

{
userId: "dois",
    id: 2,
title: "limpar o chão",
complited: false
},

{
    userId: "tres",
    id: 3,
    title: "cuidar das plantas",
    complited: true
},

{
    userId: "quatro",
    id: 4,
    title: "lavar roupas",
    complited: true
},

{
    userId: "cinco",
    id: 5,
    title: "fazer almoço",
    complited: false
}
]
