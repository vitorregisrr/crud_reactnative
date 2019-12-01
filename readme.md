# Plan Sender
## Sistema para envio e gerenciamento de planos de estudo para UFS  

### Como rodar localmente:
Para rodar o sistema completo: Usa-se o concurrently para isso. Basta executar o comando "npm run dev" (vide package.json)  
Para rodar apenas o client: Executar o comando "npm run client"  
Para rodar apenas o server: Executar o comando "npm run server"  

### Branchs default:
- dev_front: Features para o front-end;
- dev_back: Features para o back-end;
- release: Merge das versões estáveis do dev_front e dev_back, deve sempre antenceder ao homolog;
- homolog: Ultima versão do projeto, usada no deploy, tome muito cuidado!;

### Regras para pull requests: 
- Sempre verifique todas as alterações realizadas antes de lançar um commit;
- Não faça um commit com dezenas de features juntas. Faça commits bem separados e estruturalmente bem-pensados;
- Ter um bom commit message, iniciando sempre com uma palavra no infinitivo como "Add, Init, Fix", uma breve descrição, e depois uma mensagem longa explicando. [Um artigo interessante sobre isso](https://medium.com/@rafael.oliveira/como-escrever-boas-mensagens-de-commit-9f8fe852155a);
- Use o seu próprio branch, caso queira fazer um merge na release, faça apenas;

### To-do List
- [x] Estrutura que integre back-end e front-end no mesmo projeto
- [ ] ...