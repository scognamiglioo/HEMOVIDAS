# Especificações Do Projeto

Pré-requisitos: [Documentação de Contexto](https://github.com/ICEI-PUC-Minas-PMGCC-TI/tiaw-pmg-cc-m-20212-doacao-de-sangue/blob/master/Documentacao/1-Contexto.md)

> Neste documento, será abordado o que o grupo visa para o projeto. São os pilares que guiarão o desenvolvimento de toda a aplicação.
> 
> Fora utilizado o [miro](https://miro.com/) para elaboração das especificações.

## Personas

> ### Doador
> Matheus Alves tem 27 anos, é uma pessoa extrovertida e muito empática. Atualmente é professor de educação física e sua prioridade é cuidar de sua saúde. Doa sangue sempre que possível mas gostaria que o processo fosse mais simples para que pudesse doar mais vezes e perder menos tempo, pois possui uma agenda muito apertada entre as aulas que leciona. 

> ### Não Doador
> André Castro foi criado numa família classe média alta e exerce a função de Engenheiro Ambiental e atua na área de problemas ambientais. Aos 36 anos de idade seu desejo é morar fora do país pois acredita que a política pública está falida. Já se deparou algumas vezes com campanhas de incentivo à doação de sangue, conversou com conhecidos que já doaram, no entanto nunca visitou um centro de coleta para realizar uma doação.

> ### Receptor
> Ao descobrir que tem câncer de tireoide, Nicole Alves iniciou sua quimioterapia e constantemente necessita repor plaquetas e glóbulos no sangue. Tem 21 anos e sonha em tornar-se médica, profissão em que todos em sua volta conseguem imaginá-la exercendo. É uma mulher radiante mas que comumente se depara com a falta de estoques de sangue para recuperar-se de sua quimioterapia, deixando-a agoniada.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Doador  | Agendar doação de sangue de uma maneira mais simples e rápida | Doar mais vezes |
|Não Doador | Agendar doação de sangue através de algum dispositivo com acesso à internet | Tornar-se doador |
|Receptor  | Informar de maneira eficiente o maior número de pessoas possíveis que precisa de sangue | Viver  |
|Centro de Coleta  | Automatizar agendamentos de doação de sangue | Atrair mais pessoas para doar sangue |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro de Doadores | ALTA | 
|RF-002| Cadastro de Receptores | ALTA |
|RF-003| Cadastro de Centros de Coleta | ALTA |
|RF-004| Agendamento de coletas nos Centros | ALTA |
|RF-005| Disponibilidade dos Centros de Coleta | MÉDIA |
|RF-006| Interação entre Doador e Receptor | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA |  


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre 2/2021 |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não há financiamentos ou investimentos reais

