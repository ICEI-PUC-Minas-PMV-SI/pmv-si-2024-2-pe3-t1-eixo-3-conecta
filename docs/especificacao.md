# 3. DOCUMENTO DE ESPECIFICAÇÃO DE REQUISITOS DE SOFTWARE

Nesta seção será apresentada a documentação de requisitos da aplicação Conecta.

## 3.1 Objetivos deste documento

O objetivo desse documento é descrever e especificar as necessidades para o desenvolvimento do sistema web que facilitará a conexão entre ONGs, voluntários de tecnologia e patrocinadores que querem apoiar causas sociais relevantes.

## 3.2 Escopo do produto

### 3.2.1 Nome do produto e seus componentes principais

A aplicação web que será desenvolvida para esse projeto será o Conecta, e seus principais componentes são:

* Módulo de cadastro de ONGs: permite o registro de organizações não governamentais, incluindo dados como área de atuação, localização, e tipo de atividades que necessitam de voluntários;
* Módulo de gerenciamento de demandas: permite que as ONGs publiquem oportunidades de voluntariado, e voluntários possam se inscrever em atividades específicas;
* Módulo de cadastro de voluntários: permite que profissionais se registrem, informando suas habilidades, interesses e disponibilidade para atividades de voluntariado;
* Módulo de cadastro de patrocinadores: permite que patrocinadores interessados em ajudar as ONGs, cadastrem seu perfil e ofereçam patrocínio;
* Módulo de correspondência: responsável por conectar ONGs, voluntários e patrocinadores com base nas necessidades das ONGs e nas habilidades dos voluntários.

### 3.2.2 Missão do produto

A missão do Conecta é facilitar a conexão entre ONGs e voluntários de tecnologia, fornecendo uma plataforma de fácil utilização, que centraliza as necessidades das ONGs e as habilidades dos voluntários, promovendo o impacto social positivo por meio do voluntariado. Além disso, a plataforma também irá facilitar para que patrocinadores possam ajudar nas causas sociais.

### 3.2.3 Limites do produto

O Conecta não gerencia compensações financeiras para os voluntários, nem o pagamento de atividades remuneradas. Ele também não abrange o gerenciamento completo de projetos ou tarefas internas das ONGs. Além disso, o produto não oferece suporte a ONGs ou voluntários fora do país ou de regiões não cobertas pelo serviço.

### 3.2.4 Benefícios do produto

| # 	| Benefício 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 | Valor para o Cliente |
|----|---------------------------------------------------|----------------------|
| 1 | Facilidade no cadastro e gerenciamento de demandas tecnológicas. | Essencial |
| 2 | Facilidade na comunicação entre ONGs, voluntários e patrocinadores. | Essencial |
| 3 | Facilidade em consultar demandas disponíveis. | Essencial |
| 4 | Facilidade ao se candidatar a demandas. | Essencial |
| 5 | Segurança no acesso e compartilhamento de dados. | Essencial |
| 6 | Interface intuitiva e responsiva para dispositivos móveis e desktop. 	| Essencial |
| 7 | Notificações automáticas sobre novas oportunidades. | Recomendável |
| 8 | Acesso rápido a histórico de colaborações. | Recomendável |

## 3.3 Descrição geral do produto

### 3.3.1 Requisitos Funcionais

| Código | Requisito Funcional (Funcionalidade) 	 	 	 	| Descrição 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	|
|--------|---------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RF1 | Gerenciar o acesso das ONGs. | A aplicação deve permitir que as ONGs criem usuário e senha para acessar o sistema. Podendo editar ou excluir as informações de acesso. 	|
| RF2 | Gerenciar acesso do voluntário. | A aplicação deve permitir que os voluntários criem usuário e senha para acessar o sistema. Podendo editar ou excluir as informações de acesso. Além disso, é possível selecionar uma ou mais categorias favoritas para receber notificação caso uma nova demanda seja criada dentro dessas categorias. |
| RF3 | Gerenciar acesso do patrocinador. | A aplicação deve permitir que os patrocinadores criem usuário e senha para acessar o sistema. Podendo editar ou excluir as informações de acesso. |
| RF4 | Gerenciar perfil das ONGs. | A aplicação deve permitir que as ONGs criem, visualizem, editem e excluem informações do perfil. |
| RF5 | Gerenciar perfil do voluntário. | A aplicação deve permitir que os voluntários criem, visualizem, editem e excluem informações do perfil. |
| RF6 | Gerenciar perfil do patrocinador. | A aplicação deve permitir que os patrocinadores criem, visualizem, editem e excluem informações do perfil. |
| RF7 | Gerenciar as demandas. | A aplicação deve permitir que as ONGs criem, visualizem, editem ou excluem informações sobre as demandas. |
| RF8 | Gerenciar feedback. | A aplicação deve permitir que as ONGs criem solicitações de feedback aos voluntários e visualizem os depoimentos em seus perfis. |
| RF9 | Gerenciar trabalhos voluntários. | O sistema deve permitir que o voluntário visualize a lista de oportunidades de trabalho voluntário que se candidatou, incluindo a descrição da vaga e localização. Também sendo possível desistir de uma demanda candidatada. |
| RF10 | Gerenciar patrocínios. | A aplicação deve permitir que as ONGs gerenciem os patrocínios recebidos e que os patrocinadores possam se conectar com as ONGs. |
| RF11 | Gerenciar conteúdo de páginas informativas. | A aplicação deve consumir o conteúdo das páginas informativas através de uma requisição HTTP ao banco de dados. |
| RF12 | Enviar notificação do trabalho voluntário. 	| A aplicação deve enviar uma notificação quando uma ONG expressa interesse em seu perfil. |
| RF13 | Enviar recomendação de demanda. | A aplicação deve enviar uma notificação ao voluntário caso uma demanda com categoria favoritada por ele seja criada. |
| RF14 | Entrar no sistema. | A aplicação deve permitir que os usuários façam login no sistema. |
| RF15 | Sair do sistema. | A aplicação deve permitir que os usuários saiam do sistema. |

### 3.3.2 Requisitos Não Funcionais

| Código | Requisito Não Funcional (Restrição) 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	|
|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RNF1 | O sistema deve oferecer uma interface com design responsivo que se adapte aos dispositivos móveis e desktops. |
| RNF2 | As senhas dos usuários devem ser criptografadas antes de serem armazenadas no banco de dados. |
| RNF3 | O sistema deve fornecer feedback visual claro para ações do usuário, como confirmações de envio e mensagens de erro. 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 	 |
| RFN4 | O sistema deve ser capaz de ser executado nas versões mais recentes dos principais navegadores do mercado, como: Chrome, Firefox, Edge e Safari. |
| RNF5 | O sistema deve ter um tempo de resposta inferior a 3 segundos, como processamento de formulários e buscas. |
| RNF6 | O sistema deve ter um tempo de resposta inferior a 5 segundos para a renderização de páginas e navegação geral, para assegurar uma boa experiência do usuário. |
| RNF7 | O sistema deve ter um design modular que facilite a adição de novos recursos e funcionalidades sem a necessidade de reescrever código existente. |

### 3.3.3 Usuários 

| Ator | Descrição |
|--------------------|------------------------------------|
| Representante da ONG |	Usuário que representa uma ONG e busca suporte técnico ou colaboração em projetos tecnológicos. É responsável por criar e gerenciar solicitações de suporte, acompanhar o progresso dos projetos e assegurar que as necessidades tecnológicas da ONG sejam atendidas. |
| Voluntário de TI |	Usuário que oferece suas habilidades e conhecimentos em tecnologia para apoiar as ONGs. Pode se inscrever em projetos, fornecer suporte técnico, desenvolver soluções para desafios específicos das ONGs, e compartilhar feedback sobre sua experiência por meio de depoimentos. |
| Patrocinador | Usuário que pode ser uma entidade ou indivíduo que fornece recursos financeiros ou apoio material para as ONGs e seus projetos. Ele pode ser uma empresa, uma fundação ou um investidor social interessado em promover causas sociais e comunitárias. |
| Administrador | Usuário gerente do sistema. Possui acesso geral do sistema garante a segurança e integridade dos dados. |

## 3.4 Modelagem do Sistema

### 3.4.1 Diagrama de Casos de Uso

Como observado no diagrama de casos de uso da Figura 1, o representante da ONG poderá gerenciar o acesso à plataforma, gerenciar seu perfil, gerenciar as demandas, gerenciar os feedbacks dos voluntários e gerenciar os patrocínios recebidos. O voluntário poderá gerenciar o acesso ao sistema, gerenciar seu perfil e gerenciar os trabalhos voluntários aos quais se candidatou. O patrocinador poderá gerenciar o acesso à aplicação, gerenciar seu perfil e gerenciar os patrocínios. Por fim, o administrador terá acesso geral à plataforma, além de poder enviar recomendações de demandas, gerenciar os conteúdos das páginas informativas e notificar o voluntário sobre trabalhos voluntários.

#### Figura 1: Diagrama de Casos de Uso do Sistema.

![dcu](./assets/design/diagramas/diagrama-de-casos-de-uso-conecta.png)
### 3.4.2 Descrições de Casos de Uso

#### Gerenciar o acesso das ONGs (CSU01)

**Sumário**: Este caso de uso permite que o representante da ONG gerencie seu acesso na plataforma, incluindo a criação, modificação e exclusão de acesso. O objetivo principal é garantir que o representante da ONG tenha controle sobre suas informações dentro do sistema.

**Ator Primário**: Representante da ONG.

**Ator Secundário**: Administrador.

**Pré-condições**: Não existem.

**Fluxo Principal**: Cadastro da ONG.

1) 	O representante da ONG acessa a página de login.
2) 	Insere seus dados.
3) 	O sistema valida os dados fornecidos.
4) 	O cadastro da ONG é criado.
5) 	O representante da ONG acessa o sistema.

**Fluxo Alternativo**: Alteração de senha.

a)	O representante da ONG acessa a página de editar perfil. <br>
b)	Seleciona a opção de alterar senha. <br>
c)	Insere a senha atual e a nova senha. <br>
d)	A senha do representante da ONG é alterada. <br>

**Fluxo Alternativo**: Exclusão de acesso.

a)	O representante da ONG acessa a página de editar perfil. <br>
b)	Seleciona a opção de excluir conta. <br>
c)	Confirma a exclusão. <br>
d)	Conta do representante da ONG é excluída. <br>

**Pós-condições**: Conta do representante da ONG deve existir ou ser excluída.

#### Gerenciar acesso do voluntário (CSU02)

**Sumário**: Este caso de uso permite que o voluntário gerencie seu acesso ao sistema, incluindo a criação, modificação e exclusão de acesso. O objetivo principal é garantir que o voluntário tenha controle sobre suas informações dentro da plataforma.

**Ator Primário**: Voluntário de TI.

**Ator Secundário**: Administrador.

**Pré-condições**: Não existem.

**Fluxo Principal**: Cadastro de voluntário.

1) 	O voluntário acessa a página de cadastro.
2) 	Insere seus dados.
3) 	O cadastro do voluntário é criado.
4) 	O voluntário faz login no sistema.

**Fluxo Alternativo**: Alteração de senha.

a)	O voluntário acessa a página de editar perfil. <br>
b)	Seleciona a opção de alterar senha. <br>
c)	Insere a senha atual e a nova senha. <br>
d)	A senha do voluntário é alterada. <br>

**Fluxo Alternativo**: Exclusão de acesso.

a)	O voluntário acessa a página de editar perfil. <br>
b)	Seleciona a opção de excluir conta. <br>
c)	Confirma a exclusão. <br>
d)	Conta do voluntário é excluída do sistema. <br>

**Pós-condições**: Conta do voluntário deve existir ou ser excluída.

#### Gerenciar acesso do patrocinador (CSU03)

**Sumário**: Este caso de uso permite que o patrocinador gerencie seu acesso na plataforma, incluindo a criação, modificação e exclusão de sua conta. O objetivo é garantir que o patrocinador tenha controle total sobre suas informações dentro do sistema.

**Ator Primário**: Patrocinador.

**Ator Secundário**: Administrador.

**Pré-condições**: Não existem.

**Fluxo Principal**: Cadastro do patrocinador.

1) 	O patrocinador acessa a página de cadastro.
2) 	O patrocinador insere seus dados pessoais e de contato.
3) 	O sistema valida as informações fornecidas.
4) 	A conta do patrocinador é criada.
5) 	O patrocinador acessa o sistema utilizando as credenciais cadastradas.

**Fluxo Alternativo**: Alteração de senha.

a)	O patrocinador acessa a página de editar perfil. <br>
b)	Seleciona a opção de alterar senha. <br>
c)	Insere a senha atual e a nova senha. <br>
d)	A senha do patrocinador é alterada. <br>

**Fluxo Alternativo**: Exclusão de acesso.

a)	O patrocinador acessa a página de editar perfil. <br>
b)	Seleciona a opção de excluir conta. <br>
c)	Confirma a exclusão. <br>
d)	A conta do patrocinador é excluída do sistema. <br>

**Pós-condições**: A conta do patrocinador deve existir ou ser excluída, conforme as ações realizadas.

#### Gerenciar perfil das ONGs (CSU04)

**Sumário**: Este caso de uso permite que o representante da ONG gerencie as informações do seu perfil no sistema. O objetivo principal é garantir que o representante da ONG possa atualizar seus dados de contato, criar demandas para recrutar voluntários e acompanhar suas demandas e possíveis voluntários.

**Ator Primário**: Representante da ONG.

**Ator Secundário**: Administrador.

**Pré-condições**: O representante da ONG deve estar cadastrado no sistema com um login e senha válidos.

**Fluxo Principal**: Criar perfil da ONG.

1)  O representante da ONG acessa a página de cadastro.
2)  Insere seus dados.
3)  O sistema valida os dados fornecidos.
4)  O perfil da ONG é criado.

**Fluxo Alternativo**: Editar perfil da ONG.

a)  O representante da ONG faz login no sistema e acessa a área de perfil. <br>
b)  É exibida as informações atuais do perfil da ONG. <br>
c)  O representante da ONG pode editar as informações de contato, como endereço de e-mail, número de contato e as demandas. <br>
d)  O representante da ONG confirma as alterações clicando em "Salvar". <br>
e)  O sistema valida as informações e salva as alterações. <br>

**Fluxo Alternativo**: Exclusão de perfil da ONG.

a)  O representante da ONG acessa a página de perfil. <br>
b)  Seleciona a opção de excluir conta. <br>
c)  Confirma a exclusão. <br>
d)  A conta da ONG é excluída do sistema. <br>

**Pós-condições**: O perfil da ONG é criado, atualizado ou excluído, conforme as ações realizadas.

#### Gerenciar perfil do voluntário (CSU05)

**Sumário**: Este caso de uso permite que o voluntário gerencie as informações do seu perfil no sistema. O objetivo principal é garantir que o voluntário possa atualizar seus dados de contato, habilidades, e acompanhar seu envolvimento em demandas de suporte às ONGs.

**Ator Primário**: Voluntário de TI.

**Ator Secundário**: Administrador.

**Pré-condições**: O voluntário deve estar cadastrado no sistema com um login e senha válidos.

**Fluxo Principal**: Criar perfil do voluntário.

1) 	O voluntário acessa a página de cadastro.
2) 	Insere seus dados.
3) 	O sistema valida os dados fornecidos.
4) 	O perfil do voluntario é criado.

**Fluxo Alternativo**: Editar perfil do voluntário

a) 	O voluntário faz login e acessa a área de perfil. <br>
b) 	O sistema exibe as informações atuais do perfil do voluntário. <br>
c) 	O voluntário pode editar as informações do perfil. <br>
d) 	O voluntário confirma as alterações clicando em "Salvar". <br>
e)  O sistema valida as informações e salva as alterações. <br>

**Fluxo Alternativo**: Exclusão de perfil.

a) 	O voluntário acessa a página de perfil. <br>
b) 	Seleciona a opção de excluir conta. <br>
c) 	Confirma a exclusão. <br>
d) 	A conta do voluntário é excluída do sistema. <br>

**Pós-condições**: O perfil do voluntário é criado, atualizado ou excluído, conforme as ações realizadas.

#### Gerenciar perfil do patrocinador (CSU06)

**Sumário**: Este caso de uso permite que o patrocinador gerencie as informações do seu perfil no sistema. O objetivo principal é garantir que o patrocinador possa atualizar seus dados de contato, informações da empresa, e acompanhar seu envolvimento em projetos de suporte a ONGs.

**Ator Primário**: Patrocinador.

**Ator Secundário**: Administrador.

**Pré-condições**: O patrocinador deve estar cadastrado no sistema com um login e senha válidos.

**Fluxo Principal**: Criar perfil do patrocinador.

1) 	O patrocinador faz login e acessa a área de perfil.
2) 	O sistema exibe as informações atuais do perfil do patrocinador.
3) 	O patrocinador pode editar as informações de contato, como endereço de e-mail, número de telefone e dados da empresa.
4) 	O patrocinador confirma as alterações clicando em "Salvar".
5) 	O sistema valida as informações e salva as alterações.

**Fluxo Alternativo**: Editar perfil do patrocinador.

a) 	O patrocinador faz login e acessa a área de perfil. <br>
b) 	O sistema exibe as informações atuais do perfil do patrocinador. <br>
c) 	O patrocinador pode editar as informações do perfil. <br>
d) 	O patrocinador confirma as alterações clicando em "Salvar". <br>
e)  O sistema valida as informações e salva as alterações. <br>

**Fluxo Alternativo**: Exclusão de perfil.

a) 	O patrocinador acessa a página de perfil. <br>
b) 	Seleciona a opção de excluir conta. <br>
c) 	Confirma a exclusão. <br>
d) 	A conta do patrocinador é excluída do sistema. <br>

**Pós-condições**: O perfil do patrocinador é criado, atualizado ou excluído, conforme as ações realizadas.

#### Gerenciar as demandas (CSU07)

**Sumário**: O representante da ONG realiza a gestão (criação, consulta, alteração e exclusão) dos dados sobre as demandas. O objetivo principal é garantir que o representante da ONG tenha controle sobre suas demandas.

**Ator Primário:** Representante da ONG.

**Ator Secundário:** Não existe.

**Pré-condições:** O representante da ONG deve estar autenticado e validado pelo sistema.

**Fluxo Principal**: Gerenciar as demandas.

1) 	O representante da ONG requisita gestão de demandas.
2) 	É apresentada as operações que podem ser realizadas: criação, consulta, alteração e exclusão de dados de uma demanda.
3) 	O representante da ONG seleciona a operação desejada: criação, consulta, alteração e exclusão.
4) 	Após realizar a operação, o sistema confirma a ação e retorna ao menu de gestão de demandas.

**Fluxo Alternativo:** Criar demanda.

a) O representante da ONG requisita a inclusão de uma nova demanda. <br/>
b) É apresentado um formulário solicitando o nome, tipo e descrição da demanda. <br/>
c) O representante da ONG preenche o formulário com as informações solicitadas. <br/>
d) O sistema valida os dados fornecidos e uma nova demanda é incluída. <br/>

**Fluxo Alternativo:** Consultar a demanda.

a) O representante da ONG requisita a consulta de uma demanda. <br/>
b) É apresentada a lista de demandas que atendam aos critérios de busca. <br/>
c) O representante da ONG seleciona uma demanda da lista. <br/>
d) O sistema exibe os detalhes da demanda selecionada. <br/>

**Fluxo Alternativo:** Editar a demanda.

a) O representante da ONG seleciona uma demanda existente para editar. <br/>
b) É exibido as informações atuais da demanda. <br/>
c) O representante da ONG altera os dados desejados. <br/>
d) O sistema valida as informações e salva as alterações da demanda. <br>

**Fluxo Alternativo:** Excluir a demanda.

a) O representante da ONG seleciona uma demanda existente e requisita a sua remoção. <br/>
b) O sistema valida se a demanda pode ser excluída. <br/>
c) A demanda existente é removida. <br/>

**Pós-condições**: Uma demanda foi criada, consultada, atualizada ou excluída com sucesso, de acordo com a operação escolhida pelo representante da ONG. <br/>

#### Gerenciar feedback (CSU08)

**Sumário**: Este caso de uso permite que o voluntário envie, visualize e exclua feedbacks relacionados às demandas que participou. O objetivo principal é coletar experiências dos voluntários para incentivar outros voluntários.

**Ator Primário**: Voluntário de TI.

**Ator Secundário**: Representante da ONG.

**Pré-condições**: O voluntário deve ter participado de uma demanda que foi finalizada.

**Fluxo Principal**: Envio de feedback.

1) 	O representante da ONG solicita feedback do voluntário.
2) 	O voluntário recebe e-mail com link para enviar feedback.
3) 	O voluntário acessa o link e preenche o formulário.
4) 	O feedback é disponibilizado na página da ONG.

**Fluxo Alternativo**: Exclusão de feedback.

a) 	O voluntário acessa a página de feedback. <br/>
b) 	Seleciona o feedback que deseja excluir. <br/>
c) 	Confirma a exclusão. <br/>
d) 	O feedback é removido da página. <br/>

**Pós-condições**: Feedback deve ser enviado, visualizado ou excluído.

#### Gerenciar trabalhos voluntários (CSU09)

**Sumário**: O voluntário realiza a gestão (criação, consulta, alteração e exclusão) dos dados sobre os trabalhos candidatados. O objetivo principal é garantir que o voluntário tenha controle sobre suas candidaturas dentro do sistema.

**Ator Primário**: Voluntário de TI.

**Ator Secundário**: Não existe.

**Pré-condições** O voluntário deve estar autenticado e validado pelo sistema.

**Fluxo Principal**: Gerenciar os trabalhos voluntários.

1) 	O voluntário faz a gestão de trabalhos voluntários.
2) 	São apresentadas as operações que podem ser realizadas: inclusão, alteração, exclusão e consulta de dados de uma candidatura.
3) 	O voluntário seleciona a operação desejada: criação, consulta, alteração e exclusão ou opta por finalizar a ação.
4) 	Após realizar a operação, o sistema confirma a ação e retorna ao menu de gestão de demandas.

**Fluxo Alternativo**: Criar uma solicitação de trabalho voluntário.

a)  O voluntário inclui de uma nova candidatura. <br/>
b)  É apresentado um formulário solicitando o nome, CPF, e-mail, telefone e descrição de suas capacidades para a candidatura. <br/>
c)  O voluntário preenche o formulário com as informações solicitadas. <br/>
d)  O sistema valida os dados fornecidos e uma nova candidatura é incluída. <br/>

**Fluxo Alternativo**: Consultar uma solicitação de trabalho voluntário.

a)  O voluntário faz a consulta de uma candidatura, podendo buscar pelo tipo e status. <br/>
b)  É apresentada a lista de demandas que atendem aos critérios de busca. <br/>
c)  O voluntário seleciona uma candidatura da lista. <br/>
d)  O sistema exibe os detalhes da demanda selecionada. <br/>

**Fluxo Alternativo**: Editar uma solicitação de trabalho voluntário.

a)  O voluntário seleciona uma candidatura existente para alterar e solicita a edição dos seus dados. <br/>
b)  É apresentado os dados atuais da candidatura para edição. <br/>
c)  O voluntário altera os dados desejados. <br/>
d)  O sistema valida as informações e salva as alterações. <br/>

**Fluxo Alternativo**: Excluir uma solicitação de trabalho voluntário.

a)  O voluntário seleciona uma candidatura existente e requisita a sua remoção. <br/>
b)  O sistema valida se a demanda pode ser excluída. <br/>
c)  A demanda existente é removida do sistema. <br/>

**Pós-condições**: 	Uma candidatura foi consultada, atualizada ou excluída com sucesso, de acordo com a operação escolhida pelo voluntário.

#### Gerenciar patrocínios (CSU010)

**Sumário**: Este caso de uso permite que as ONGs gerenciem os patrocínios recebidos e que os patrocinadores possam se conectar com as ONGs. O objetivo é facilitar a interação entre ONGs e patrocinadores, garantindo que os patrocínios sejam registrados e acompanhados de maneira eficaz.

**Ator Primário**: Patrocinador.

**Ator Secundário**: Representante da ONG.

**Pré-condições**: As ONGs e patrocinadores devem estar cadastrados no sistema e ter acesso ao mesmo.

**Fluxo Principal**: Criar patrocínio.

1) 	O patrocinador faz login no sistema e acessa a área de patrocínios.
2) 	O patrocinador acessa a lista de ONGs disponíveis.
3) 	O patrocinador seleciona a ONG que deseja patrocinar.
4) 	O sistema exibe as informações da ONG selecionada e solicita os detalhes do patrocínio.
5) 	O patrocinador insere as informações e confirma a criação do patrocínio.
6) 	O sistema valida as informações e registra o novo patrocínio na conta da ONG.

**Fluxo Alternativo**: Editar patrocínio.

a) 	O patrocinador acessa a lista de seus patrocínios registrados. <br>
b) 	O patrocinador seleciona o patrocínio que deseja editar. <br>
c) 	O sistema exibe as informações atuais do patrocínio. <br>
c) 	O patrocinador faz as alterações necessárias e confirma as mudanças. <br>
d) 	O sistema valida as informações e atualiza o patrocínio. <br>

**Fluxo Alternativo**: Excluir patrocínio.

a) 	O patrocinador acessa a lista de seus patrocínios registrados. <br>
b) 	O patrocinador seleciona o patrocínio que deseja excluir. <br>
c) 	O sistema solicita a confirmação da exclusão. <br>
d) 	O patrocinador confirma a exclusão do patrocínio. <br>
c) 	O sistema remove o patrocínio da lista. <br>

**Pós-condições**: O patrocínio é registrado, atualizado ou excluído no sistema conforme as ações realizadas, mantendo a lista de patrocínios da ONG organizada e atualizada.

#### Gerenciar conteúdo de páginas informativas (CSU11)

**Sumário**: O administrador pode gerenciar (criar, editar, excluir) o conteúdo de páginas informativas do sistema. O objetivo principal é garantir que as informações exibidas nas páginas estejam atualizadas e sejam relevantes para os usuários.

**Ator Primário**: Administrador.

**Ator Secundário**: Não existe.

**Pré-condições**: O administrador deve estar autenticado no sistema e possuir permissões para gerenciar o conteúdo das páginas informativas.

**Fluxo Principal**: Administrador gerencia o conteúdo de uma página.

1)  O administrador acessa a área de gerenciamento de conteúdo no sistema.
2)  O administrador seleciona a opção para criar, editar ou excluir uma página informativa.
3)  O administrador insere ou altera o conteúdo necessário (texto, imagens, links) na página.
4)  O administrador confirma as alterações e o sistema salva o conteúdo atualizado.
5)  O sistema exibe uma mensagem de confirmação de que o conteúdo foi gerenciado com sucesso.

**Fluxo Alternativo**: Conteúdo inválido ou campos obrigatórios não preenchidos.

a)  O sistema verifica se todos os campos obrigatórios foram preenchidos corretamente. <br>
b)  Caso algum campo esteja em branco ou com informações inválidas, o sistema exibe uma mensagem de erro solicitando correção. <br>
c)  O administrador corrige os campos e submete novamente as alterações. <br>

**Fluxo Alternativo**: Página não encontrada.

a)  O administrador tenta editar ou excluir uma página que não existe mais, o sistema exibe uma mensagem de erro informando que a página não foi encontrada. <br>
b)  O administrador é redirecionado a tela inicial para escolher uma página válida. <br>

**Pós-condições**: O conteúdo da página informativa é atualizado, criado ou excluído, e as informações corretas são exibidas para os usuários finais.

#### Enviar notificação do trabalho voluntário (CSU12)

**Sumário**: Descreve o processo de envio de notificações para os voluntários de TI que estão inscritos em um projeto de uma ONG. O objetivo é garantir que os voluntários recebam atualizações sobre o andamento do projeto, novas tarefas e comunicados importantes.

**Ator Primário**: Representante da ONG.

**Ator Secundário**: Voluntário de TI.

**Pré-condições**: O voluntário deve estar cadastrado e vinculado a um projeto na plataforma Conecta, o representante da ONG deve estar autenticado no sistema, o projeto deve estar ativo na plataforma.

**Fluxo Principal**: Enviar notificação de atualização do projeto.

1) O representante da ONG acessa a plataforma e faz login.
2) O representante navega até a seção de projetos e seleciona o projeto desejado.
3) O sistema exibe a lista de voluntários vinculados ao projeto.
4) O representante redige a mensagem da notificação e escolhe o destinatário.
5) O sistema envia a notificação para o voluntário selecionado.
6) O voluntário recebe a notificação por e-mail.
7) O sistema registra o envio da notificação no histórico do projeto.

**Fluxo Alternativo**: Falha no envio da notificação.

a) Um erro de rede é identificado. <br>
b) É exibida uma mensagem de erro sugerindo que o representante tente novamente mais tarde. <br>
c) O sistema armazena a notificação como pendente e tenta enviá-la assim que a conexão for restabelecida. <br>
d) O representante pode consultar o status do envio no histórico do projeto. <br>

**Fluxo Alternativo**: Voluntário não vinculado ao projeto.

a) O representante tenta enviar uma notificação para um voluntário que não está vinculado ao projeto. <br>
b) Uma mensagem de erro é exibida. <br>
c) O sistema não permite o envio da notificação e solicita que o representante adicione o voluntário ao projeto antes de tentar novamente. <br>

**Pós-condições**: O voluntário é informado sobre as atualizações ou novas tarefas do projeto.

#### Enviar recomendação de demanda (CSU13)

**Sumário**: O sistema envia recomendações de demandas voluntárias para o voluntário, com base no perfil e nas candidaturas anteriores registradas no sistema. O objetivo é facilitar o acesso a novas oportunidades de trabalho voluntário.

**Ator Primário**: Administrador.

**Ator Secundário**: Voluntário de TI.

**Pré-condições**: O voluntário deve estar autenticado e possuir candidaturas ou informações de perfil relevantes registradas no sistema.

**Fluxo Principal**: Enviar uma recomendação de demanda.

1) 	O sistema analisa as candidaturas e o perfil do voluntário.
2) 	O sistema gera uma lista de demandas que se alinham ao perfil do voluntário.
3) 	O sistema envia uma notificação para o voluntário com as recomendações de demandas disponíveis.
4) 	O voluntário recebe a notificação e acessa as demandas recomendadas.

**Fluxo Alternativo**: Nenhuma demanda disponível.

a) 	O voluntário é informando que não há novas demandas disponíveis no momento. <br/>
b) 	O sistema retorna ao início do fluxo principal e permanece aguardando novas demandas. <br/>

**Fluxo Alternativo**: O voluntário ignora a recomendação.

a) 	O sistema mantém as recomendações no histórico de notificações para consulta posterior. <br/>
b) 	O voluntário pode acessar as recomendações quando desejar. <br/>

**Pós-condições**: O voluntário recebe as recomendações de novas demandas, podendo consultar as oportunidades que melhor correspondem ao seu perfil. Caso não haja demandas disponíveis, o Voluntário é notificado da ausência de recomendações no momento.

#### Entrar do sistema (CSU14)

**Sumário**: Este caso de uso permite que o usuário faça login no sistema de forma segura. O objetivo principal é garantir que as sessões de usuário sejam iniciadas adequadamente.

**Ator Primário**: Todos os usuários.

**Ator Secundário**: Não existe.

**Pré-condições**: O usuário não deve estar autenticado no sistema.

**Fluxo Principal**: Entrar na aplicação.

1) 	O usuário clica no botão "Login" disponível no menu do sistema.
2) 	O usuário insere o e-mail e senha.
3) 	O usuário seleciona a opção entre "voluntário", "ONG" ou "patrocinador".
4) 	O usuário submete o formulário.

**Fluxo Alternativo**: Cancelar login.

a) 	O usuário clica no botão "Cancelar". <br>
b) 	O sistema retorna para a página inicial. <br>

**Pós-condições**: A sessão do usuário é iniciada.

#### Sair do sistema (CSU15)

**Sumário**: Este caso de uso permite que o usuário saia do sistema de forma segura. O objetivo principal é garantir que as sessões de usuário sejam encerradas adequadamente.

**Ator Primário**: Todos os usuários.

**Ator Secundário**: Não existe.

**Pré-condições**: O usuário deve estar autenticado no sistema, com uma sessão ativa.

**Fluxo Principal**: Sair da aplicação.

1) 	O usuário clica no botão "Sair" disponível no menu do sistema.
2) 	O sistema exibe uma mensagem de confirmação perguntando se o usuário deseja realmente sair.
3) 	O usuário confirma que deseja sair clicando em "Sim".
4) 	A sessão é encerrada e o usuário é redirecionado para a página de login.
5) 	O sistema exibe uma mensagem informando que o logout foi realizado com sucesso.

**Fluxo Alternativo**: Cancelar logout.

a) 	O usuário clica no botão "Cancelar" após a mensagem de confirmação. <br>
b) 	O sistema mantém a sessão ativa e retorna ao menu principal. <br>
c) 	O usuário continua a interagir com o sistema normalmente. <br>

**Pós-condições**: A sessão do usuário é encerrada e não pode mais ser acessada até que um novo login seja realizado.

### 3.4.3 Diagrama de Classes 

A Figura 2 mostra o diagrama de classes do sistema, possui diversas entidades como usuários, organizações, patrocinadores, voluntários, demandas e feedbacks. A classe principal é Usuário, que contém atributos como nome, e-mail, senha, e métodos para operações CRUD (criação, leitura, atualização, exclusão) e alteração de senha. Dela, derivam três classes: Patrocinador, ONG e Voluntário. A classe Patrocinador tem atributos como CNPJ, CPF e telefone, além de métodos para patrocinar ou remover o patrocínio de uma ONG. A classe ONG inclui informações como CNPJ, telefone, redes sociais e está associada a um Endereço. Ela é responsável por gerar demandas no sistema, e pode ter várias demandas associadas. Já a classe Voluntário possui CPF e telefone, e métodos que permitem ao voluntário candidatar-se a demandas e enviar feedbacks sobre as demandas em que participou. <br>

A classe Demanda contém atributos que descrevem o nome, a descrição, o status e o tipo da demanda, além de métodos para gerenciar (criar, consultar, atualizar, excluir) essas demandas. Cada demanda também pode ter vários feedbacks associados. A classe Feedback, por sua vez, armazena o ID do voluntário que o forneceu e o comentário em si, com métodos para gerenciar o feedback. No que diz respeito às associações, os patrocinadores podem estar vinculados a diversas ONGs, e uma ONG pode ter várias demandas. Voluntários podem se candidatar a várias demandas, e cada demanda pode ter múltiplos voluntários associados. Além disso, uma demanda pode gerar múltiplos feedbacks, fornecendo um ciclo completo de interação entre os atores do sistema. <br>

#### Figura 2: Diagrama de Classes do Sistema.

![dcu](assets/design/diagramas/diagrama-de-classe-conecta.png)

### 3.4.4 Descrições das Classes 

| # | Nome         | Descrição                                                                                                                                                                                |
|---|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | Usuário      | Representa um usuário genérico no sistema, contendo informações como nome, e-mail, imagem e senha. A classe inclui métodos para criar, consultar, atualizar e deletar usuários.          |
| 2 | ONG          | Herda de Usuário. Representa uma organização sem fins lucrativos (ONG). Armazena informações como CNPJ, telefone, endereço, e redes sociais. Está associada a demandas e patrocinadores. |
| 3 | Voluntário   | Herda de Usuário. Representa uma pessoa que atua como voluntária, com atributos como CPF e telefone. Pode se candidatar a demandas e fornecer feedbacks.                                 |
| 4 | Patrocinador | Herda de Usuário. Representa uma entidade ou pessoa que patrocina ONGs. Possui atributos como CNPJ, CPF, e telefone, e métodos para criar patrocinar e remover patrocínios.              |
| 5 | Demanda      | Representa uma necessidade ou tarefa aberta por uma ONG, com informações como nome, descrição, status, tipo, e data de criação. Está vinculada a voluntários e feedbacks.                |
| 6 | Feedback     | Representa comentário feito por um voluntário em uma demanda. Contém atributos como o ID do voluntário e o comentário. Tem métodos para criar, atualizar e deletar.                      |
| 7 | Endereço     | Representa o endereço de uma ONG, com atributos como CEP, rua, número, cidade e estado. Faz parte da classe ONG.                                                                        |

