# **Desafio para Desenvolvedor(a) Frontend**

Agradecemos imensamente por considerar fazer parte do nosso time!
Você encontrará, a seguir, todas as informações que precisa para começar o seu teste técnico.

### O Que Esperamos Que Seja Desenvolvido?
Desenvolva uma página web com um formulário de login. Os dados preenchidos deverão ser enviados para uma API que, se os dados estiverem corretos, retornará um token de autenticação; se incorretos, uma mensagem de erro.

Aqui estão algumas tarefas específicas que precisam ser abordadas:

- Valide as informações inseridas nos campos de email e senha
- Mostre mensagens de erro quando a autenticação falhar
- Exiba um modal de sucesso quando o login for realizado com sucesso
- Redirecione para uma página específica se o usuário tentar acessar a página /produtos sem autenticação
- Armazene o token de autenticação no localStorage

### Fluxo de Utilização Esperado
1. **Login:** O usuário clica em "Login" e um modal aparece para inserção das credenciais. ![Login](./assets/imagens/1.png)
2. **Preenchimento dos Dados:** O usuário preenche suas credenciais e clica em "Entrar". ![Dados](./assets/imagens/2.png)
3. **Feedback de Sucesso:** Exibição de um modal confirmando o sucesso no login. ![Sucesso](./assets/imagens/3.png)
4. **Acesso Negado:** Redirecionamento para página de erro se tentar acessar /produtos sem autenticação. ![Erro](./assets/imagens/4.png)

*Nota: A página /produtos é meramente um placeholder e ficará em branco.*

## Alguns Pontos Importantes Antes de Começar

- Se tiver dificuldades para acessar o Figma, screenshots estão disponíveis na pasta assets. Não é obrigatório aderir estritamente ao layout proposto no Figma, ele está aqui para nortear o desafio.
  
- Sobre a entrega: ative a autenticação em dois fatores em sua conta GitHub e configure a chave SSH seguindo estes tutoriais: [Autenticação em Duas Etapas](https://help.github.com/pt/github/authenticating-to-github/configuring-two-factor-authentication) e [Adicionando uma nova chave SSH na sua conta GitHub](https://help.github.com/pt/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

- **Para começar, crie uma branch a partir da `main` seguindo este padrão de nomenclatura: dd-mm-yy/nome-sobrenome (por exemplo, 30-04-20/meu-nome).**
- **Concluído o teste, crie uma PR (Pull Request) da sua branch para a main e informe ao recrutador que finalizou.**
- Sinta-se livre para tirar qualquer dúvida com o recrutador.
  
Respire fundo, você consegue! Estamos torcendo por você! 🚀

## Figma
[Link do Design](https://www.figma.com/file/gzIs5GonMky67OYQopwiHT/Frontend-Challenge?node-id=0%3A1)

## Tecnologias a serem utilizadas
- HTML
- CSS
- Javascript

## Como Iniciar?
- Clone o repositório: `git clone [LINK_DO_REPOSITORIO]`
- Abra a pasta `[NOME_DA_PASTA]` com seu editor de texto preferido e mãos à obra!

### ⚠️ Preste Atenção! ⚠️

**1 -** Seu desafio será uma aplicação web simples, que servirá para avaliarmos suas habilidades como desenvolvedor(a) frontend.
**2 -** Utilize uma API mock (como JSON Server) para simular os serviços de CRUD e autenticação.
**3 -** Mantenha seu código limpo e organizado.
**4 -** Use estruturas e padrões que considera adequados.
**5 -** Se for JR e tiver alguma dúvida ou receio, relaxe! Avaliaremos tudo com muito carinho.
**6 -** Adoraríamos ver suas habilidades em melhorar e otimizar o desafio proposto.

### **API**
Utilize a seguinte API para autenticação: https://api-mock-autenticacao.com/v1

**Rotas:** 
- `POST: /auth`

**Parâmetros da API:**
(Use as credenciais corretas e incorretas conforme explicado no texto original)


### **Habilidades Avaliadas**

- **HTML:**
  - Estrutura semântica do HTML5 e acessibilidade.
  - Uso de elementos e atributos apropriados para cada componente.
  - Compatibilidade cross-browser (considerando os últimos 2 lançamentos de versões dos principais navegadores).

- **CSS:**
  - Uso de técnicas de design responsivo e mobile-first.
  - Uso de pré-processadores CSS (como SASS ou LESS) será considerado um plus.
  - Aplicação de estilos consistentes e reutilização de código.
  - Aplicação de animações e transições para melhorar a experiência do usuário.

- **JavaScript:**
  - Uso de técnicas de programação assíncrona (Promises, Async/Await).
  - Uso adequado do DOM para manipular elementos na página.
  - Estruturação do código e organização (utilizando módulos, classes e/ou funções).
  - Manutenção de estado e gerenciamento de dados (como lidar com o estado de um usuário logado, por exemplo).
  - Implementação de rotas de forma clara e funcional (utilizando bibliotecas, como o React Router, se necessário).
  
- **Git:**
  - Organização e clareza nos commits.
  - Uso correto dos fluxos de trabalho do Git (branches, merges, pull requests, etc.).

### **Algumas Dicas e Orientações:**
- Apreciamos a implementação de funcionalidades extras e/ou melhorias no design!
- Iremos avaliar cada pequeno detalhe, padrão ou conceito que você aplicar.
- Considere fazer commits pequenos e bem descritos!

### **Links que podem ser úteis**:
- https://github.com/BeeTech-global/bee-stylish/tree/master/commits
- https://www.conventionalcommits.org/en/v1.0.0/

Se tiver qualquer problema, não hesite em entrar em contato com o recrutador.

**BOA SORTE!** 🚀🚀🚀
