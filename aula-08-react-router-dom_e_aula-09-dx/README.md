# Aula 08 - Prática: Lista de Usuários com Navegação

Nesta prática, as tarefas foram:

- instalar o React Router DOM usando como base o exercício da aula anterior (“Lista de usuários”);
- criar uma pasta pages dentro da pasta src;
- criar 3 páginas dentro desta pasta pages:
    * Home (página que irá conter a lista de usuários);
    * Details (página que irá exibir os detalhes de cada usuário);
    * Error (página que será exibida quando o endereço informado na url for inválido);
- implementar o componente Router, responsável pelo roteamento;
- implementar no componente Item um botão “Ver detalhes”, o qual, ao ser clicado, deve redirecionar o usuário para a página Details;
- ao acessar a aplicação:
    * na página Home, deve-se exibir a lista de usuários;
    * ao clicar no botão “Ver detalhes”, o usuário deve ser redirecionado para a página que contém os detalhes do usuário específico;
    * a página Details deve exibir nome, descrição e uma imagem do usuário;
- deve ser possível retornar à página ”Home”;
- ao acessar uma url inexistente, deve ser exibida a página Error, com a mensagem “Página não encontrada” e uma opção para voltar à página Home.

## Resultado
<img height="260em" src="https://github.com/GiovaniDamian/front-end-awari/assets/60575219/66b43dec-bb74-434f-8e3a-ed067c3b43fc"/>
<img height="360em" src="https://github.com/GiovaniDamian/front-end-awari/assets/60575219/a8024f6c-0254-42bc-a694-7f382adb8b23"/>
<img height="260em" src="https://github.com/GiovaniDamian/front-end-awari/assets/60575219/5cab5bcf-1043-4be7-8d7f-4b8bf29f899f"/>


# Aula 09 - Prática: Lista de Usuários com Navegação Aprimorada

Esta prática usará como base o exercício da aula anterior, “Lista de usuários”, com navegação entre páginas. As tarefas foram:

adicionar à configuração do ESLint, que já vem com o Create React App, as seguintes regras:
semi com o chave/valor “error” e “always”, para sempre utilizar “;” no projeto;
quotes com o chave/valor “error” e “single”, para sempre utilizar aspas simples no projeto;
adicionar o comando lint aos scripts do projeto eslint ./src/**/*.{js,jsx};
criar o arquivo .editorconfig com uma configuração padrão, para padronizar a indentação do código;
instalar o CommitLint com @commitlint/config-conventional para estender o padrão Conventional Commits;
instalar o Husk;
adicionar o hook pre-commit para executar o comando nom run lint;
adicionar o hook commit-msg para validar as mensagens de commit.