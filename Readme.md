**Créez un réseau social d’entreprise**

_Compétences évaluées_

- [x] AuthentiKer un utilisateur et maintenir sa session

- [x] Implémenter un stockage de données sécurisé en utilisant une base de données

- [x] Développer l’interface d’un site web grâce à un framework front-end

_Scénario_

Vous êtes développeur depuis plus d'un an chez CONNECT-E, une petite agence web
regroupant une douzaine d'employés.
Votre directrice, Stéphanie, vient de signer un nouveau contrat avec Groupomania, un groupe
spécialisé dans la grande distribution, et l'un des plus fidèles clients de l'agence.

Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le
but de cet outil est de faciliter les interactions entre collègues. Le département RH de
Groupomania a imaginé plusieurs fonctionnalités pour favoriser les échanges entre collègues.
Après en avoir discuté avec Caroline, votre manager, elle vous envoie un mail pour vous briefer
sur votre mission :

Objet : Lancement projet Groupomania
De : Caroline
À : Moi
Bonjour,
Comme on a pu en parler, tu trouveras en pièce jointe le brief que j’ai pu établir à la suite des
différentes réunions effectuées avec Stéphanie et la représentante de Groupomania. Tu
trouveras également les logos de l’organisation pour l’habillage du site.
Pour résumer ta mission : à partir du brief, tu vas devoir produire une toute première version
du projet, que nous pourrons faire tester à quelques employés de Groupomania pour valider
la partie fonctionnelle.
En ce qui concerne l’aspect graphique, nous allons pour le moment limiter les choses au
minimum, c’est-à-dire :
respecter l’identité graphique fournie dans le brief ;
produire quelque chose de responsive qui s'adapte aux desktop, tablette et mobile ;
tout le reste est expliqué sur le brief. À part ça, tu as carte blanche, mais attention à ne
pas te lancer dans quelque chose de trop compliqué.
Côté technique aussi, nous sommes assez libres sur ce projet ; néanmoins il y a quelques
éléments qu’il faut avoir en tête avant de commencer le projet :
pour ce nouveau projet on part vraiment de zéro, tu vas donc devoir mettre en place le
backend, le frontend et la base de données ;
le projet doit être codé en JavaScript et respecter les standards WCAG ;
il est obligatoire d’utiliser un framework front-end JavaScript. Comme on part de zéro,
libre à toi d’utiliser celui que tu préfères (React, Vue, Angular...). Je te conseille d’utiliser
React, mais ça reste à toi de décider ;
pour la base de données, tu peux utiliser les outils de ton choix. Tu peux utiliser soit une
base de données non relationnelle, comme mongoDB par exemple, soit une base de
données relationnelle (en t’aidant d’un ORM si tu le souhaites) ;
pense à bien fournir un README avec ton code, expliquant comment installer le site sur
un nouveau poste.
Voilà, normalement tu as toutes les infos pour démarrer. Une fois cette première version
terminée, il faudra que tu m’envoies le lien vers le repo, et que tu me présentes le code en
détail.
Bon courage, je reste à ta dispo si besoin !
Caroline
Pièces jointes :
Brief mission Groupomania
Logo
Ça y est, vous avez toutes les informations pour démarrer votre développement. Choisissez bien
les outils et langages que vous souhaitez utiliser. A vous de coder !

Pour démarrer le rendu frontend:

cd client/
npm start

Pour démarrer le serveur node:

cd server/
npm start

Ajouter: un fichier .env dans le dossier config comprenant:

PORT=7000

DB_USER_PASS='mongodb+srv://carotte:carotte@cluster0.hmd49.mongodb.net/Groupo?retryWrites=true&w=majority'

TOKEN_SECRET='203475234uh5230945j20'
