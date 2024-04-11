Página de Cadastro:

Os usuários poderão se cadastrar fornecendo um nome de usuário, e-mail válido e senha.
A validação dos campos será realizada para garantir que os dados fornecidos sejam adequados.
Após o cadastro bem-sucedido, os usuários serão redirecionados para a página de login.
Página de Login:

Os usuários cadastrados poderão fazer login utilizando seu e-mail e senha.
A autenticação será realizada através do Firebase Authentication.
Após o login bem-sucedido, os usuários serão redirecionados para a página principal da galeria.
Página Principal da Galeria:

A página principal exibirá todas as mídias (fotos, vídeos, arquivos) que foram carregadas pelos usuários.
As mídias serão exibidas em uma grade responsiva, permitindo que os usuários visualizem facilmente o conteúdo.
Os usuários poderão clicar em uma mídia para visualizá-la em tela cheia ou em um modal.
Upload de Mídia:

Após fazer login, os usuários terão a opção de fazer upload de fotos, vídeos ou arquivos para a galeria.
O upload será realizado utilizando o Firebase Storage para armazenamento de mídia.
Os usuários poderão selecionar múltiplos arquivos para upload de uma vez.
Durante o processo de upload, os usuários poderão adicionar descrições ou tags às suas mídias.
Painel de Controle de Usuário:

Os usuários autenticados terão acesso a um painel de controle onde poderão visualizar e gerenciar suas próprias mídias.
No painel de controle, os usuários poderão editar ou excluir suas mídias, bem como atualizar suas informações de perfil.
Integração Firebase:

O Firebase será utilizado para autenticação de usuários, armazenamento de mídia, gerenciamento de banco de dados e hospedagem do aplicativo.
Serão utilizadas as funcionalidades do Firebase Authentication, Firestore e Storage.
Estilização com Styled Components:

Todo o design da galeria será implementado utilizando Styled Components para garantir uma aparência consistente e flexível.
O design será responsivo para proporcionar uma experiência agradável em dispositivos móveis e desktops.
Roteamento com React Router:

Utilizaremos o React Router para gerenciar a navegação entre diferentes páginas da galeria, como a página de login, a página principal e o painel de controle de usuário.
