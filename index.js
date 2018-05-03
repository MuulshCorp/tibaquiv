const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
   
    console.log("=================== LE BOT EST CONNECTER ! ===================")


})
bot.on('message', message => {



//Le menu de .help :
if (message.content === '.help')                { message.channel.send      (
    '.help: t\'en a besoin car tu oublie tout le temps mes commandes .\n' +
    '.credit:  pour savoir qui sont mes fabuleux créateurs .\n' + 
    '.id: mais qui suis je ?\n' + 
    '.dico: t\'es un peut con donc voilà un ami à moi :google .\n' + 
    '.afk help; affiche un menu de help pour le afk .\n' + 
    '.article: apprends les règle ! Malpoli va .\n' + 
    '.bonjour: petit bonjour .\n' + 
    '.attention: la prévention c\'est tout simple et super utile .\n' + 
    '.ami: quand tu te sens seul appelle moi !\n' + 
    '.ping : une parti deux contre deux \n' + 
    '.pong : une parti deux contre deux \n' + 
    '.ahah : le rire .\n' + 
    '.ah: farceur va .\n' + 
    '.kill: t\'aime pas quelqu\'un \n' + 
    '.kills: t\'aime pas le monde \n' + 
    '.boss: c\'est qui le boss? à ton avis?\n' + 
    '.maj: surprise ) }
    
//Menu du afk:    
else if (message.content === '.afk help')       { message.channel.send      ('.afk on (numéro de 1 à 7 (ou plus) = pour activé le afk .\n' +
    '.afk off (numéro de 1 à 7 (ou plus) = pour désactivé le afk .\n' + 
    '.afk r = affiché les raison .') }                                                                     


//raisons afk (1 a 5):
else if (message.content === '.afk on 1')       { message.reply             ('par en vacances') }
else if (message.content === '.afk off 1')      { message.reply             ('est revenu de vacances .') }
else if (message.content === '.afk on 2')       { message.reply             ('a faim: il va mangé .') }
else if (message.content === '.afk off 2')      { message.reply             ('a fini de mangé .') }
else if (message.content === '.afk on 3')       { message.reply             ('doit sauvé le monde il doit y allé.') }
else if (message.content === '.afk off 3')      { message.reply             ('a sauvé le monde: c\'est un héros .') }
else if (message.content === '.afk on 4')       { message.reply             ('pue la mort il va prendre une douche.' ) }
else if (message.content === '.afk off 4')      { message.reply             ('a prit ça douche il est propre comme une pomme .') }
else if (message.content === '.afk on 5')       { message.reply             ('a pas fait ces devoir: il doit allé travaillé .') }
else if (message.content === '.afk off 5')      { message.reply             ('a fini c\'est devoir: il va faire le con juste au bout de la nuit .') }
else if (message.content === '.afk on 6')       { message.reply             ('va coupé du bois car il a froid .') }
else if (message.content === '.afk off 6')      { message.reply             ('a fini de coupé du bois car il a chaud .') }
else if (message.content === '.afk on 7')       { message.reply             ('va cherché du pains pour son goûter .') }
else if (message.content === '.afk off 7')      { message.reply             ('est revenu de la boulangerie avec du pain et le ventre plein .') }
    
//Menu afk raison:
if (message.content === '.afk r')               { message.channel.send      (
    '1: par en vacances\n' +
    '1: est revenu de vacances .\n' + 
    '2: a faim: il va mangé .\n' + 
    '2: a fini de mangé .\n' + 
    '3: doit sauvé le monde il doit y allé.\n' + 
    '3: a sauvé le monde: c\'est un héros .\n' + 
    '4: pue la mort il va prendre une douche.\n' + 
    '4: a prit ça douche il est propre comme une pomme .\n' + 
    '5: a pas fait ces devoir: il doit allé travaillé .\n' + 
    '5: a fini c\'est devoir: il va faire le con juste au bout de la nuit . \n' +
    '6: va coupé du bois car il a froid . \n' +
    '6: a fini de coupé du bois car il a chaud .\n' +
    '7: va cherché du pains pour son goûter .\n' +
    '7: est revenu de la boulangerie avec du pains et le ventre plein .') }

//Menu article:
else if (message.content === '.article')        { message.channel.send      ('list des articles de bases de la plupart de serveur discord (de 1 à 5)') }

//raison article (1 a 5):
else if (message.content === '.article 1')      { message.channel.send      ('les insultes et toutes les méchanceté sont interdites ') }
else if (message.content === '.article 2')      { message.channel.send      ('la pub est interdite saufs pour les admin et les modo ') }
else if (message.content === '.article 3')      { message.channel.send      ('le racisme c\'est pas bien donc interdit ') }
else if (message.content === '.article 4')      { message.channel.send      ('le spam c\'est énervants donc tu faits pas ') }
else if (message.content === '.article 5')      { message.channel.send      ('on est des français ou Québécois donc pas de messages qui ne veulent rien dire comme esdfyuibnibvd') }
    
//Commande normal
else if (message.content === '.bonjour')        { message.channel.send      ('salut a toi misérables et inférieur larve que l\'on nomme "humains"') }
else if (message.content === '.attention')      { message.channel.send      ('vilain petit garnement tu as fait une bêtise tu vas avoir la punition ... t\'a de la chance je suis juste un programme je peut pas te punir ') }
else if (message.content === '.ami')            { message.channel.send      ('alors ? On a pas d\'amis oh c\'est pas grave moi je suis là pour toi ') }
else if (message.content === '.ping')           { message.channel.send      ('pong') }
else if (message.content === '.pong')           { message.channel.send      ('ping') }
else if (message.content === '.ahah')           { message.channel.send      ('MOUAAAAAAAAAAAAAAAAA (le rire de trop)') }
else if (message.content === '.ah')             { message.channel.send      ('ahhhhhhh j\'ai fait une crise cardiaque t\'es con') }
else if (message.content === '.kill')           { message.reply             ('a tué son ennemi ') }
else if (message.content === '.kills')          { message.reply             ('a tué tout le monde: c\'est un bon psychopathe ') }
else if (message.content === '.boss')           { message.channel.send      ('c\'est pas toi le boss, le patron ou le maître! Petit {user} c\'est mwa ahahahahahah ') }
else if (message.content === '.maj')            { message.channel.send      ('un jour ou l\'autre j\'aurai une mise à jour :sob:') }
else if (message.content === '.credit')         { message.channel.send      ('bot créé par <@!385337893553438720> avec l\'aide de <@!317968962656796674> car il a une grosse b... heu moi ?! nan JAMAIS ! (désolé mes créateur sont des hommes ils ont oublier le féminin c\'est des connards et ils sont vulgaires et font des fautes d\'orthographe)') }
else if (message.content === '.id')             { message.channel.send      ('salut moi je suis M. tib aquiv un bot de afk  super utile') }  
else if (message.content.startsWith('.dico'))   { message.channel.send      ('indisponible pour le moment ') }

//secret de la commande dico:
else if (message.content === '.dico caca')      { message.channel.send      ('t\'es fou toi!? chu pas dégueu  va le faire toi même (avec une image de mec qui caque sur ces chiottes)') }
else if (message.content === '.dico 404')       { message.channel.send      ('https://www.google.fr/timeurclebest') }

//Quand le mec dit un truc:
else if (message.content === '...')             { message.channel.send      ('-_-') }
else if (message.content === 'Non')             { message.channel.send      ('si ') }
else if (message.content === 'Si')              { message.channel.send      ('non ') }
else if (message.content === 'Oui')             { message.channel.send      ('nan') }
else if (message.content === 'Nan')             { message.channel.send      ('...') }
else if (message.content === 'M. Tib aquiv')    { message.channel.send      ('yo la stutt ') }
else if (message.content === 'Timeur2.0')       { message.channel.send      ('le grand dieu est arrivé sur Terre nous devons le vénéré et lui donné des cadeaux ') }
else if (message.content === 'Müulsh')          { message.channel.send      ('le dieu de la méchanceté est arrivé attention il va vous troller (attention au mecs qui n\'ont pas d\'humour lol) sinon c\'est tranche de rire à volonté .') }
else if (message.content === '#dieuxestla')     { message.channel.send      ('Ah tiens on ma reconnu merci .') }
else if (message.content === 'Allo')            { message.reply             ('comment tu va ?') }           
})

        


bot.login(process.env.TOKEN)
