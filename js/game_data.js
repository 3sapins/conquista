// Données des étapes du jeu - Parcours Cortés
const stepsData = [
    // Étape 0 : Les motivations
    {
        title: "Les motivations",
        subtitle: "Espagne, 1518",
        image: "images/Cortès_portrait.jpg",
        narrative: "Vous êtes Hernán Cortés, hidalgo sans fortune à Cuba. Des récits fabuleux parlent de cités d'or au Yucatán, rapportés par l'expédition de Juan de Grijalva. À 34 ans, vous avez déjà tenté l'aventure aux Antilles, mais sans grand succès. Le gouverneur Velázquez cherche un capitaine pour une nouvelle expédition. Cette fois, c'est votre chance de faire fortune, d'obtenir gloire et reconnaissance. Mais pourquoi vraiment partir ?",
        essential: "Les explorateurs du XVIe siècle cherchaient ce qu'on appelait « Dieu, Or et Gloire » : évangéliser les païens, s'enrichir personnellement, et obtenir renommée et pouvoir politique. Ces trois motivations étaient souvent entremêlées et justifiaient des entreprises extrêmement risquées.",
        moreInfo: `
            <strong>Contexte économique et social :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>La petite noblesse espagnole (hidalgos) s'appauvrit après la Reconquista terminée en 1492</li>
                <li>Les guerriers formés au combat n'ont plus de guerre en Espagne, ils cherchent aventure ailleurs</li>
                <li>Le modèle antillais (Hispaniola, Cuba) a montré qu'on peut s'enrichir rapidement avec l'or et les esclaves</li>
            </ul>
            <strong>Les récits qui inspirent :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>En 1518, Grijalva revient du Yucatán avec de l'or et des récits de villes en pierre</li>
                <li>On parle d'une civilisation riche, organisée, avec des temples magnifiques</li>
                <li>Les Espagnols croient être proches des « Indes » de Marco Polo et de Christophe Colomb</li>
            </ul>
            <strong>Le catholicisme militant :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>L'Espagne sort de 700 ans de Reconquista contre les Maures (musulmans)</li>
                <li>Convertir les « païens » est vu comme une mission sacrée</li>
                <li>Le pape a accordé aux rois catholiques le droit de conquérir les terres « païennes »</li>
            </ul>
            <strong>L'ambition personnelle de Cortés :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés refuse d'être un simple colon, il veut commander et conquérir</li>
                <li>Il est lettré, connaît le droit, et sait manipuler les règles administratives espagnoles</li>
                <li>Sa devise : "Mieux vaut mourir glorieux que vivre déshonorés"</li>
            </ul>
        `,
        choices: [
            {
                text: "Motivation principale : L'OR. Je veux devenir riche, très riche. Les conquistadors qui ont réussi aux Antilles sont maintenant puissants. C'est mon tour.",
                effects: { richesses: 10, pouvoir: 5, humanisme: -5 },
                historical: false
            },
            {
                text: "Motivation principale : LA GLOIRE et le pouvoir. Je veux être gouverneur, avoir des terres, commander des hommes. L'or n'est qu'un moyen.",
                effects: { pouvoir: 15, richesses: 5, humanisme: -5 },
                historical: false
            },
            {
                text: "Motivation principale : ÉVANGÉLISER. Sauver ces âmes païennes est un devoir sacré. L'or et la gloire viendront comme récompenses divines.",
                effects: { humanisme: 10, pouvoir: 5, richesses: -5 },
                historical: false
            },
            {
                text: "Les TROIS motivations sont importantes. Dieu, Or et Gloire sont indissociables. Je ne peux réussir sans les trois.",
                effects: { pouvoir: 5, richesses: 5, humanisme: 5 },
                historical: true,
                feedback: "Cortés était effectivement animé par ces trois motivations entremêlées. Dans ses lettres à Charles Quint, il justifie la conquête par l'évangélisation, mais son obsession de l'or et du pouvoir est évidente dans ses actes."
            }
        ]
    },

    // Étape 1 : Financement de l'expédition
    {
        title: "Financement de l'expédition",
        subtitle: "Cuba, février 1519",
        image: "images/Navires_cortes.jpg",
        narrative: "Le gouverneur Velázquez vous confie l'expédition mais limite le budget. Vous devez équiper 11 navires et 550 hommes pour plusieurs mois en territoire inconnu. Le coût est énorme : navires, vivres, armes, chevaux... Velázquez apporte un tiers du financement, mais c'est insuffisant. Vous devez emprunter massivement, hypothéquer vos biens, convaincre des investisseurs. Chaque peso dépensé ici pourrait faire la différence entre victoire et défaite. Comment allez-vous répartir ce budget limité ?",
        essential: "Les expéditions de conquête n'étaient PAS financées par la Couronne d'Espagne, mais par des investisseurs privés dans un système appelé 'capitulation'. Les conquistadors s'endettaient lourdement et devaient réussir pour rembourser, ce qui explique leur détermination et leur violence.",
        moreInfo: `
            <strong>Le système des capitulations :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Contrat entre la Couronne et le conquistador : la Couronne prend 20% du butin (le "quinto real")</li>
                <li>Le reste est partagé entre les investisseurs selon leur mise de départ</li>
                <li>Source de conflits permanents : qui a investi combien ? qui mérite quelle part ?</li>
            </ul>
            <strong>Les coûts astronomiques :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Un cheval coûte 100-150 pesos (le salaire annuel d'un ouvrier)</li>
                <li>Un canon : 200-300 pesos</li>
                <li>Arquebuse : 50-80 pesos</li>
                <li>Armure complète : 30-50 pesos</li>
                <li>Vivres pour 6 mois pour 550 hommes : environ 2000 pesos</li>
            </ul>
            <strong>Les investisseurs :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Velázquez met environ 5000 pesos (un tiers du total)</li>
                <li>Cortés emprunte 4000-5000 pesos à des marchands de Cuba</li>
                <li>Les soldats eux-mêmes investissent (armes, chevaux) et attendent leur part</li>
            </ul>
            <strong>L'endettement = pression :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés doit des sommes colossales qu'il ne pourra JAMAIS rembourser sans un immense butin</li>
                <li>Cette dette le pousse à désobéir à Velázquez : impossible de faire marche arrière</li>
                <li>Les soldats aussi sont endettés, d'où leur férocité dans la recherche d'or</li>
            </ul>
        `,
        choices: [
            {
                text: "Budget équilibré : 16 chevaux (2000), 10 canons (1800), armures prioritaires (1500). Je m'endette de 2000 pesos supplémentaires pour sécuriser l'expédition.",
                effects: { pouvoir: 10, loyaute: 10, richesses: -10 },
                historical: true,
                feedback: "Cortés a effectivement choisi d'investir massivement dans chevaux et canons, tout en s'endettant lourdement. Son endettement l'a forcé à désobéir à Velázquez pour ne pas perdre sa mise.",
                equipment: ['chevaux', 'canons', 'armures', 'endetté']
            },
            {
                text: "Priorité militaire : Tous les chevaux possibles (2000), tous les canons (1800), toutes les arquebuses (800). Pas d'interprète, on improvisera.",
                effects: { pouvoir: 15, humanisme: -10, loyaute: 5 },
                historical: false,
                equipment: ['chevaux', 'canons', 'arquebuses']
            },
            {
                text: "Priorité diplomatie : Interprète expérimenté (500), marchandises d'échange (800), vivres supplémentaires (1000), médecins (600). Moins d'armes mais plus de survie.",
                effects: { humanisme: 15, loyaute: 10, pouvoir: -10 },
                historical: false,
                equipment: ['interprete', 'marchandises', 'vivres', 'medecins']
            },
            {
                text: "Économie maximale : Minimum d'équipement, on pillera sur place pour s'équiper. Je garde l'argent pour soudoyer des alliés plus tard.",
                effects: { richesses: 15, pouvoir: -15, loyaute: -10 },
                historical: false,
                gameOver: true,
                gameOverText: "Votre équipement insuffisant ne vous permet pas de faire face aux premiers combats. Vos hommes, mal équipés et affamés, se mutinent. L'expédition échoue avant même d'avoir commencé."
            }
        ]
    },

    // Étape 2 : Les innovations techniques
    {
        title: "Les innovations techniques",
        subtitle: "En mer, mars 1519",
        image: "images/Navires_cortes.jpg",
        narrative: "En mer vers le Yucatán. Les vagues sont hautes, le vent violent. Votre pilote Antón de Alaminos, qui a navigué avec Colomb et Grijalva, vous explique les instruments qui permettent cette traversée inédite. Sans ces innovations du XVe siècle, aucune exploration au-delà de l'Atlantique ne serait possible. Mais comprendre ces outils, c'est aussi comprendre la domination technique européenne qui vous permettra de conquérir un empire.",
        essential: "Les progrès nautiques du XVe siècle (caravelle, boussole, gouvernail d'étambot, astrolabe, canons embarqués) ont rendu possibles les explorations lointaines. Ces innovations techniques sont au cœur de l'expansion européenne.",
        moreInfo: `
            <strong>Les innovations nautiques majeures :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Caravelle :</strong> Navire portugais rapide et maniable, combine voiles triangulaires (louvoyage contre le vent) et carrées (vitesse)</li>
                <li><strong>Gouvernail d'étambot :</strong> Fixé à l'arrière du navire, remplace l'aviron latéral, permet précision</li>
                <li><strong>Boussole magnétique :</strong> D'origine chinoise, adoptée au XIIIe siècle, permet navigation hors vue des côtes</li>
                <li><strong>Astrolabe :</strong> Mesure la latitude en observant l'angle du soleil ou des étoiles</li>
                <li><strong>Portulans :</strong> Cartes maritimes détaillées des côtes (mais intérieur des terres reste inconnu)</li>
            </ul>
            <strong>Armes révolutionnaires :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Canons de bronze :</strong> Montés sur navires, permettent bombardement côtier et supériorité navale</li>
                <li><strong>Arquebuses :</strong> Premières armes à feu portatives, lentes à recharger mais terrifiantes</li>
                <li><strong>Arbalètes d'acier :</strong> Puissantes, traversent les armures en coton aztèques</li>
            </ul>
            <strong>La route vers l'ouest :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Colomb (1492) a prouvé qu'on peut atteindre une terre en allant vers l'ouest</li>
                <li>Traité de Tordesillas (1494) : partage du monde entre Espagne (ouest) et Portugal (est/Afrique)</li>
                <li>Les Espagnols cherchent toujours le passage vers les "vraies" Indes et la Chine</li>
            </ul>
        `,
        choices: [
            {
                text: "Je décide de SABOTER les navires après débarquement. Pas de retraite possible = engagement total des troupes. Victoire ou mort.",
                effects: { pouvoir: 20, loyaute: -10 },
                historical: true,
                feedback: "Cortés a effectivement fait couler ses navires (la légende dit 'brûler' mais il les a sabordés). Stratégie psychologique radicale : impossible de fuir, donc les hommes se battent avec désespoir. Cela a aussi empêché les soldats mécontents de retourner à Cuba pour prévenir Velázquez."
            },
            {
                text: "Je GARDE tous les navires intacts pour assurer une retraite en cas de désastre. La sécurité avant l'audace.",
                effects: { loyaute: 10, pouvoir: -15 },
                historical: false
            },
            {
                text: "Je garde 2 navires, sabote le reste. Compromis : retraite possible pour les blessés graves, mais engagement fort.",
                effects: { pouvoir: 5, loyaute: 5 },
                historical: false
            },
            {
                text: "J'envoie la moitié des navires chercher des renforts à Cuba. Nous serons plus nombreux pour conquérir.",
                effects: { pouvoir: -10, loyaute: -5 },
                historical: false,
                feedback: "Mauvaise idée : cela permettrait à Velázquez d'apprendre votre désobéissance et d'envoyer une expédition pour vous arrêter."
            }
        ]
    },

    // Étape 3 : Le départ de Cuba
    {
        title: "Le départ de Cuba",
        subtitle: "Cuba, mars 1519",
        image: "images/Cortes_brule_ses_navires.jpeg",
        narrative: "Tout est prêt. Les 11 navires sont chargés, les 550 hommes impatients. Mais hier soir, un messager vous a réveillé : Velázquez a changé d'avis. Il vous trouve trop ambitieux, trop indépendant. Il veut annuler l'expédition et nommer quelqu'un d'autre. Vos dettes sont écrasantes, vous avez tout investi. Si vous obéissez, vous êtes ruiné à jamais. Le port est encore endormi. Les navires peuvent partir maintenant, en secret. Mais c'est une rébellion ouverte contre l'autorité du gouverneur.",
        essential: "Les conquistadors partaient souvent contre les ordres officiels, dans un système d'investissement privé très risqué. L'insubordination était fréquente car les enjeux financiers étaient énormes.",
        moreInfo: `
            <strong>Pourquoi Velázquez se méfie-t-il ?</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés a déjà montré des signes d'insubordination dans le passé</li>
                <li>Il recrute trop de soldats, s'endette trop, semble vouloir conquérir plutôt qu'explorer</li>
                <li>Velázquez craint que Cortés ne lui vole la gloire et les richesses</li>
            </ul>
            <strong>Les risques de désobéir :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés devient un hors-la-loi, Velázquez peut envoyer des troupes pour l'arrêter</li>
                <li>Si la conquête échoue, Cortés sera pendu pour rébellion</li>
                <li>Même en cas de succès, il devra négocier directement avec le roi Charles Quint</li>
            </ul>
            <strong>Le calcul de Cortés :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Il est déjà trop endetté pour reculer : obéir = ruine totale</li>
                <li>S'il réussit la conquête, il peut se présenter au roi avec un empire conquis</li>
                <li>Le roi pardonnera sa désobéissance s'il apporte or et territoires</li>
            </ul>
        `,
        choices: [
            {
                text: "OBÉIR à Velázquez. Je ne peux pas me permettre de devenir un hors-la-loi. Je trouverai une autre opportunité plus tard.",
                effects: {},
                historical: false,
                gameOver: true,
                gameOverText: "Vous obéissez à Velázquez et renoncez à l'expédition. Criblé de dettes, vous perdez tout. Velázquez nomme quelqu'un d'autre qui conquiert le Mexique et devient immensément riche et puissant. Vous finissez votre vie comme petit colon obscur à Cuba, rongé par les regrets."
            },
            {
                text: "PARTIR EN SECRET immédiatement avec les 11 navires. Tant pis pour Velázquez, je négocie directement avec le roi Charles Quint ensuite.",
                effects: { pouvoir: 15, richesses: -5, loyaute: -5 },
                historical: true,
                feedback: "C'est exactement ce qu'a fait Cortés le 18 février 1519. Il est parti de nuit sans autorisation. Cette désobéissance l'a forcé à réussir absolument : impossible de rentrer à Cuba sans conquête. Il a ensuite envoyé des émissaires directement au roi en contournant Velázquez."
            },
            {
                text: "NÉGOCIER un compromis avec Velázquez. Je lui promets une part plus importante du butin s'il me laisse partir.",
                effects: { richesses: -10, pouvoir: -5 },
                historical: false,
                gameOver: true,
                gameOverText: "Velázquez refuse toute négociation. Pendant que vous perdez du temps, il fait arrêter vos lieutenants et confisque vos navires. Vous êtes emprisonné pour dettes. L'expédition part sans vous."
            },
            {
                text: "PARTIR avec FORCE : je mobilise mes hommes armés et je prends les navires de force si Velázquez tente de m'arrêter.",
                effects: { pouvoir: 10, loyaute: -10, humanisme: -10 },
                historical: false,
                feedback: "Trop agressif. Cortés est parti discrètement, pas en déclenchant une guerre civile à Cuba. Une confrontation armée aurait alerté toute l'île."
            }
        ]
    },

    // Étape 4 : Premiers contacts - Tabasco
    {
        title: "Premiers contacts - Tabasco",
        subtitle: "Côte du Yucatán, mars 1519",
        image: "images/combats_azteques_et_espgnols.png",
        narrative: "Après deux semaines de navigation, vous débarquez près de Tabasco. Les Mayas locaux vous observent avec méfiance. Vos interprètes tentent de communiquer : vous venez en paix, vous voulez échanger. Mais les Mayas se souviennent de l'expédition de Grijalva l'année dernière : violence, pillages. Ils refusent tout contact. Le lendemain, des milliers de guerriers mayas attaquent votre campement. Vos arquebuses tonnent, vos canons crachent le feu. Les Mayas n'ont jamais vu de chevaux - ils croient que cavalier et monture sont une seule créature monstrueuse. Terrifiés, ils reculent. Vous avez gagné, mais comment consolider cette victoire ?",
        essential: "La supériorité technologique espagnole (armes à feu, chevaux, armures d'acier, canons) a créé un choc psychologique majeur chez les peuples mésoaméricains. Mais les alliances avec les ennemis des Aztèques ont été tout aussi déterminantes que les armes.",
        moreInfo: `
            <strong>Supériorité technologique espagnole :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Arquebuses :</strong> Bruyantes, fumée, terreur psychologique, mais lentes à recharger (1 coup/minute)</li>
                <li><strong>Canons :</strong> Dévastateurs à courte portée, bruit assourdissant qui panique</li>
                <li><strong>Armures d'acier :</strong> Protègent contre flèches et armes d'obsidienne (pierre volcanique)</li>
                <li><strong>Épées d'acier :</strong> Tranchantes, durables, vs armes en bois et obsidienne (fragiles)</li>
                <li><strong>Arbalètes :</strong> Puissance de pénétration supérieure aux arcs</li>
            </ul>
            <strong>Le choc des chevaux :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Aucun cheval en Amérique depuis 10 000 ans (extinction de la mégafaune)</li>
                <li>Les Mayas et Aztèques n'avaient jamais vu de grands mammifères domestiques</li>
                <li>Ils pensaient que cavalier + cheval = une seule créature mythologique</li>
                <li>Cortés utilisait les chevaux pour des charges terrifiantes en terrain ouvert</li>
            </ul>
            <strong>Armes aztèques :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Macuahuitl :</strong> Épée en bois avec lames d'obsidienne (tranchante mais fragile)</li>
                <li><strong>Atlatl :</strong> Propulseur de javelots, grande portée</li>
                <li><strong>Arcs et flèches :</strong> Efficaces mais ne percent pas l'acier</li>
                <li><strong>Armures de coton matelassé :</strong> Légères, protègent des flèches mais pas des épées d'acier</li>
            </ul>
            <strong>Le facteur psychologique :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Le bruit des armes à feu terrorisait (tonnerre = colère divine dans la culture maya)</li>
                <li>Les Espagnols n'hésitaient pas à tuer massivement (guerre totale vs guerre rituelle aztèque)</li>
                <li>Les chiens de guerre espagnols (molosses) étaient dressés pour attaquer</li>
            </ul>
        `,
        choices: [
            {
                text: "MASSACRE pour terrifier. Je tue tous les guerriers capturés publiquement pour que la terreur se répande. Qu'ils sachent que résister = mort.",
                effects: { pouvoir: 10, richesses: 5, humanisme: -20, loyaute: -10 },
                historical: false,
                feedback: "Trop brutal même pour l'époque. Cortés utilisait la terreur mais de manière plus calculée."
            },
            {
                text: "DÉMONSTRATION DE FORCE puis alliance. Je fais une parade militaire : chevaux, canons, arquebuses. Puis je propose la paix et des échanges.",
                effects: { pouvoir: 15, humanisme: 10, loyaute: 5 },
                historical: true,
                feedback: "C'est ce qu'a fait Cortés. Après la bataille de Centla (14 mars 1519), il a négocié la paix. Les caciques mayas lui ont offert des cadeaux, dont 20 femmes esclaves, parmi lesquelles Malinche (Malintzin), qui deviendra son interprète et conseillère cruciale."
            },
            {
                text: "ALLIANCE IMMÉDIATE sans violence. Je propose commerce et protection contre leurs ennemis. La diplomatie plutôt que la force.",
                effects: { humanisme: 20, pouvoir: -10 },
                historical: false,
                feedback: "Impossible après qu'ils vous aient attaqué. Il fallait d'abord prouver votre force."
            },
            {
                text: "PILLAGE ET FUITE. Je prends l'or, les vivres, et je pars vite avant que d'autres guerriers n'arrivent.",
                effects: { richesses: 10, pouvoir: -15, loyaute: -10 },
                historical: false,
                feedback: "Mauvaise stratégie. Sans alliance locale, vous n'aurez ni guides, ni interprètes, ni informations sur l'intérieur des terres."
            }
        ]
    }
];

    // Étape 5 : L'alliance avec Tlaxcala
    {
        title: "L'alliance avec Tlaxcala",
        subtitle: "Tlaxcala, septembre 1519",
        image: "images/Codex_azcatitlan_représentation_des_espagnols.jpg",
        narrative: "Après plusieurs mois de marche vers l'intérieur, vous entrez sur le territoire de Tlaxcala. Votre interprète Malinche vous a expliqué : les Tlaxcaltèques sont les ennemis mortels des Aztèques, qui leur imposent un blocus économique depuis des décennies. Pas de sel, pas de coton, commerce coupé. Mais ils sont aussi fiers et méfiants. Ils vous attaquent d'abord : plusieurs batailles sanglantes. Vos chevaux et canons font la différence, mais vous perdez des hommes. Finalement, les caciques tlaxcaltèques proposent une alliance : ensemble contre Moctezuma. Mais à quelles conditions ?",
        essential: "Les divisions entre peuples mésoaméricains ont été déterminantes dans la conquête. Le système tributaire aztèque, oppressif et violent, avait créé de nombreux ennemis. Les Tlaxcaltèques fourniront jusqu'à 100 000 guerriers à Cortés.",
        moreInfo: `
            <strong>Le système tributaire aztèque :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>L'empire aztèque fonctionnait par tributs imposés aux peuples conquis</li>
                <li>Tributs = or, nourriture, tissus, mais aussi captifs pour sacrifices</li>
                <li>Les "guerres fleuries" (xochiyaoyotl) : batailles rituelles pour capturer des prisonniers</li>
                <li>Sacrifices humains massifs : jusqu'à 20 000 lors de l'inauguration du Templo Mayor (1487)</li>
            </ul>
            <strong>Tlaxcala : l'ennemi irréductible :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>République indépendante entourée par l'empire aztèque depuis 100 ans</li>
                <li>Blocus économique total : pas de sel, coton, cacao (produits de luxe)</li>
                <li>Guerres constantes avec les Aztèques (source de captifs pour les deux camps)</li>
                <li>Population : ~200 000 habitants, guerriers redoutables</li>
            </ul>
            <strong>Pourquoi les Tlaxcaltèques s'allient à Cortés :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Opportunité de détruire leur ennemi ancestral avec l'aide des "dieux" espagnols</li>
                <li>Calcul politique : mieux vaut s'allier que se faire conquérir</li>
                <li>Promesses de Cortés : liberté, fin du blocus, partage du butin</li>
            </ul>
            <strong>L'importance stratégique :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Sans Tlaxcala, Cortés n'aurait jamais pu conquérir Tenochtitlan</li>
                <li>Les 100 000 guerriers tlaxcaltèques ont fait le siège de la capitale aztèque</li>
                <li>Ils connaissaient le terrain, les tactiques aztèques, servaient de guides</li>
            </ul>
        `,
        choices: [
            {
                text: "ALLIANCE RESPECTUEUSE. Je traite les caciques tlaxcaltèques en égaux, promets liberté et partage équitable du butin aztèque.",
                effects: { pouvoir: 20, humanisme: 15, loyaute: 10 },
                historical: true,
                feedback: "Cortés a négocié une alliance relativement respectueuse avec Tlaxcala. Il leur a promis la liberté (pas de tribut espagnol) et le partage du butin aztèque. Cette alliance a été respectée : Tlaxcala a gardé des privilèges jusqu'à la fin de la période coloniale."
            },
            {
                text: "ALLIANCE avec CONVERSION FORCÉE. J'accepte l'alliance mais j'exige qu'ils détruisent leurs temples et se convertissent immédiatement au catholicisme.",
                effects: { pouvoir: 10, humanisme: -15, loyaute: -10 },
                historical: false,
                feedback: "Cortés était obsédé par la conversion, mais il était assez pragmatique pour ne pas tout exiger immédiatement."
            },
            {
                text: "REFUSER L'ALLIANCE. Je ne fais pas confiance à ces 'barbares'. Je peux conquérir seul avec mes 550 Espagnols.",
                effects: { pouvoir: -30, loyaute: -20 },
                historical: false,
                gameOver: true,
                gameOverText: "Sans les Tlaxcaltèques, vous êtes isolés en territoire hostile. Les Aztèques vous encerclent avec 50 000 guerriers. Votre petite troupe est anéantie. La conquête du Mexique échoue."
            },
            {
                text: "VASSALISER PAR LA FORCE. J'accepte l'alliance mais je place une garnison espagnole à Tlaxcala pour contrôler. Ils sont mes sujets, pas mes alliés.",
                effects: { pouvoir: 5, humanisme: -10, loyaute: -15 },
                historical: false,
                feedback: "Trop risqué. Vous n'avez pas assez d'hommes pour contrôler Tlaxcala par la force tout en marchant sur Tenochtitlan."
            }
        ]
    },

    // Étape 6 : Le massacre de Cholula
    {
        title: "Le massacre de Cholula",
        subtitle: "Cholula, octobre 1519",
        image: "images/combats_azteques_et_espgnols.png",
        narrative: "Vous arrivez à Cholula, grande cité religieuse alliée des Aztèques. Les Cholultèques vous accueillent... froidement. Vos alliés tlaxcaltèques, ennemis ancestraux de Cholula, sont nerveux. Malinche vous réveille en pleine nuit : elle a appris d'une femme cholultèque qu'un piège se prépare. Demain, quand vous traverserez la ville, des milliers de guerriers aztèques cachés vous attaqueront. Les rues étroites seront bloquées, vos chevaux inutiles. C'est un massacre programmé. Ou bien est-ce de la désinformation ? Les Tlaxcaltèques veulent peut-être juste une excuse pour piller leur vieille ennemie. Que faire ?",
        essential: "Le massacre de Cholula (octobre 1519) reste controversé : piège réel ou prétexte ? Cortés a fait massacrer entre 3 000 et 6 000 Cholultèques désarmés dans la place centrale. Stratégie de terreur préventive ou crime de guerre ?",
        moreInfo: `
            <strong>Cholula : ville sainte mésoaméricaine :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Deuxième plus grande ville après Tenochtitlan (~100 000 habitants)</li>
                <li>Centre religieux majeur, grande pyramide dédiée à Quetzalcóatl</li>
                <li>Alliée de Tenochtitlan, donc suspecte pour Cortés</li>
                <li>Ennemie traditionnelle de Tlaxcala (rivalités séculaires)</li>
            </ul>
            <strong>Le débat historique sur le "complot" :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Version espagnole :</strong> Complot réel organisé par Moctezuma pour piéger Cortés</li>
                <li><strong>Preuves :</strong> Malinche aurait été prévenue, guerriers cachés, barricades préparées</li>
                <li><strong>Version critique :</strong> Prétexte inventé par les Tlaxcaltèques pour piller leur ennemie</li>
                <li><strong>Aucune preuve archéologique de troupes aztèques massives à Cholula</strong></li>
            </ul>
            <strong>Le massacre du 18 octobre 1519 :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés fait rassembler les nobles cholultèques désarmés dans la place centrale</li>
                <li>Accusation publique de trahison</li>
                <li>Massacre systématique : arquebuses, canons, cavalerie</li>
                <li>Les Tlaxcaltèques se joignent au pillage et au massacre</li>
                <li>Bilan : 3 000 à 6 000 morts selon les sources (probablement ~3 000)</li>
            </ul>
            <strong>Conséquences du massacre :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Terreur : toutes les cités sur la route de Tenochtitlan se soumettent sans combattre</li>
                <li>Message envoyé à Moctezuma : résister = anéantissement</li>
                <li>Renforce l'alliance avec Tlaxcala (butin partagé)</li>
                <li>Mais aussi : preuve de la cruauté espagnole, arguments pour résistance future</li>
            </ul>
        `,
        choices: [
            {
                text: "MASSACRE PRÉVENTIF. Je rassemble les nobles cholultèques et je les fais exécuter. Puis mes hommes et les Tlaxcaltèques pillent la ville. Mieux vaut prévenir que guérir.",
                effects: { pouvoir: 20, richesses: 15, humanisme: -30, loyaute: -5 },
                historical: true,
                feedback: "C'est exactement ce qu'a fait Cortés le 18 octobre 1519. Le massacre a terrifié toute la région. Les villes sur la route de Tenochtitlan se sont soumises sans résister. Mais ce fut l'un des crimes les plus sanglants de la conquête."
            },
            {
                text: "ENQUÊTE PRUDENTE. J'envoie des éclaireurs vérifier s'il y a vraiment des troupes cachées. Si c'est vrai, j'agis. Sinon, je continue pacifiquement.",
                effects: { humanisme: 20, pouvoir: -10 },
                historical: false,
                feedback: "Plus humain, mais risqué. Si le piège est réel, vous perdez l'effet de surprise. Mais vous auriez évité un massacre peut-être inutile."
            },
            {
                text: "QUITTER LA VILLE IMMÉDIATEMENT. Trop dangereux. Je contourne Cholula et je continue vers Tenochtitlan.",
                effects: { pouvoir: -15, humanisme: 10, loyaute: -10 },
                historical: false,
                feedback: "Vos alliés tlaxcaltèques et vos propres soldats vous reprochent votre faiblesse. Fuir sans combattre = perte de crédibilité."
            },
            {
                text: "PUNITION CIBLÉE. J'arrête uniquement les chefs suspectés, les interroge, puis exécute seulement les coupables avérés.",
                effects: { pouvoir: 10, humanisme: 5, richesses: 5 },
                historical: false,
                feedback: "Compromis raisonnable mais moins efficace pour créer la terreur. La conquête aurait peut-être été plus difficile ensuite."
            }
        ]
    },

    // Étape 7 : Entrée dans Tenochtitlan
    {
        title: "Entrée dans Tenochtitlan",
        subtitle: "Tenochtitlan, novembre 1519",
        image: "images/tenochtitlan.avif",
        narrative: "8 novembre 1519. Vous approchez de Tenochtitlan par la chaussée d'Iztapalapa. Le spectacle vous coupe le souffle : une cité lacustre immense, bâtie sur une île, reliée à la terre par trois chaussées. Des pyramides, des palais, des jardins flottants (chinampas). 200 000 habitants, peut-être plus. Venise et Séville réunies sembleraient petites à côté. Moctezuma vous accueille en personne, porté sur un palanquin d'or, vêtu de plumes de quetzal. Il vous installe dans le palais d'Axayácatl. Hospitalité parfaite, cadeaux somptueux. Mais vous êtes 400 Espagnols au cœur d'un empire de millions de personnes. Une seule chaussée pour fuir si nécessaire. Un piège ?",
        essential: "L'accueil pacifique de Moctezuma reste l'une des grandes énigmes de l'Histoire. Pourquoi n'a-t-il pas écrasé Cortés quand il en avait la possibilité ? Hésitation politique, calculs diplomatiques, ou influence réelle des prophéties ?",
        moreInfo: `
            <strong>Tenochtitlan : capitale aztèque :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Population : 200 000 à 400 000 habitants (estimations variables)</li>
                <li>Plus grande que toute ville européenne de l'époque sauf Paris</li>
                <li>Construite sur le lac Texcoco, île artificielle agrandie</li>
                <li>3 chaussées la relient à la terre ferme, avec des ponts amovibles</li>
                <li>Système hydraulique sophistiqué : aqueducs, canaux</li>
                <li>Chinampas : jardins flottants ultra-productifs</li>
            </ul>
            <strong>Le dilemme de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Option 1 :</strong> Écraser les Espagnols en rase campagne (militairement possible)</li>
                <li><strong>Risque :</strong> Déclencher la révolte de Tlaxcala et des autres peuples tributaires</li>
                <li><strong>Option 2 :</strong> Diplomatie : accueillir, observer, négocier</li>
                <li><strong>Calcul :</strong> Si les Espagnols sont des dieux, les combattre = sacrilège</li>
                <li><strong>Si ce sont des hommes, on peut les contrôler en les gardant proches</strong></li>
            </ul>
            <strong>La question des "prophéties" :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Légende coloniale : Moctezuma croyait que Cortés = Quetzalcóatl de retour</li>
                <li>Quetzalcóatl : dieu serpent à plumes, avait quitté l'empire en promettant de revenir</li>
                <li><strong>Historiens modernes sceptiques :</strong> Probable reconstruction a posteriori</li>
                <li>Mais il est vrai que des présages inquiétants avaient été rapportés (comète, temple en feu, etc.)</li>
            </ul>
            <strong>Le piège involontaire :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés est au cœur de l'empire, entouré de centaines de milliers d'Aztèques</li>
                <li>Une seule chaussée pour fuir, avec des ponts contrôlés par les Aztèques</li>
                <li>Moctezuma peut couper les vivres, isoler les Espagnols, les affamer</li>
                <li>Mais Cortés a une carte : prendre Moctezuma en otage</li>
            </ul>
        `,
        choices: [
            {
                text: "CAPTURER MOCTEZUMA IMMÉDIATEMENT. Entrer dans son palais avec 30 hommes armés et le prendre en otage. Contrôler l'empereur = contrôler l'empire.",
                effects: { pouvoir: 25, humanisme: -20, loyaute: -10 },
                historical: false,
                feedback: "Trop précipité. Cortés a attendu une semaine pour observer la situation et trouver le bon prétexte."
            },
            {
                text: "ACCEPTER L'HOSPITALITÉ et observer. Étudier la ville, ses défenses, rencontrer les nobles, comprendre les divisions politiques. Puis agir.",
                effects: { pouvoir: 10, humanisme: 10, richesses: 5 },
                historical: true,
                feedback: "C'est ce qu'a fait Cortés initialement. Pendant une semaine (8-14 novembre 1519), il a visité la ville, admiré le Templo Mayor, rencontré les nobles, et cherché les failles du pouvoir aztèque. Puis il a trouvé un prétexte pour capturer Moctezuma."
            },
            {
                text: "EXIGER un TRIBUT IMMÉDIAT. Je demande à Moctezuma de me livrer tout l'or de Tenochtitlan en échange de la paix.",
                effects: { richesses: 10, pouvoir: -15, humanisme: -10 },
                historical: false,
                feedback: "Trop brutal sans avoir établi de contrôle. Moctezuma peut refuser et vous faire massacrer."
            },
            {
                text: "PROPOSER une ALLIANCE ÉGALITAIRE. Cortés et Moctezuma co-gouvernent, commerce entre Espagne et Mexique, paix mutuelle.",
                effects: { humanisme: 20, pouvoir: -25 },
                historical: false,
                gameOver: true,
                gameOverText: "Anachronique et irréaliste. Moctezuma refuse cette proposition absurde. Vous n'avez aucun pouvoir de négociation sans otage. Vos soldats vous abandonnent, déçus. Vous êtes capturés et sacrifiés au Templo Mayor."
            }
        ]
    },

    // Étape 8 : La Noche Triste
    {
        title: "La Noche Triste",
        subtitle: "Tenochtitlan, juin 1520",
        image: "images/noche_triste.jpg",
        narrative: "Le désastre. Pendant votre absence (vous êtes parti combattre une expédition de Velázquez venue vous arrêter), votre lieutenant Pedro de Alvarado a paniqué. Pendant une fête religieuse aztèque dans le Templo Mayor, il a ordonné un massacre : 600 nobles désarmés tués. La population de Tenochtitlan explose de rage. Quand vous revenez, la ville entière s'est révoltée. Moctezuma, votre otage, est tué (par les Espagnols ou par son propre peuple, les versions divergent). Les Aztèques détruisent les ponts des chaussées. Vous êtes piégés. Il faut fuir, de nuit, chargés de l'or que vos hommes refusent d'abandonner. La 'Noche Triste' commence : 30 juin 1520, nuit de cauchemar.",
        essential: "La 'Noche Triste' (Nuit Triste) est la plus grande défaite de Cortés. La violence excessive d'Alvarado a déclenché une révolte populaire aztèque. Cortés perd 600 Espagnols et des milliers d'alliés tlaxcaltèques. La fuite est chaotique et sanglante.",
        moreInfo: `
            <strong>Le massacre du Templo Mayor (mai 1520) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés est parti à la côte combattre Pánfilo de Narváez (envoyé par Velázquez)</li>
                <li>Il laisse 80 hommes à Tenochtitlan sous le commandement de Pedro de Alvarado</li>
                <li>Pendant la fête de Toxcatl, 600 nobles aztèques dansent désarmés dans le Templo Mayor</li>
                <li>Alvarado, paniqué (il craint un soulèvement), ordonne le massacre</li>
                <li>Les Espagnols tuent les nobles, pillent leurs bijoux en or et plumes</li>
            </ul>
            <strong>La révolte populaire :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Toute la ville se soulève contre les "barbares" espagnols</li>
                <li>Les ponts des chaussées sont détruits ou retirés</li>
                <li>Les Espagnols sont assiégés dans le palais d'Axayácatl</li>
                <li>Moctezuma, toujours prisonnier, est tué (pierre lancée par un Aztèque ou assassinat espagnol ?)</li>
                <li>Cuitláhuac, frère de Moctezuma, devient nouvel empereur et organise la résistance</li>
            </ul>
            <strong>La fuite de la Noche Triste (30 juin 1520) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés décide de fuir de nuit vers Tlaxcala (alliée)</li>
                <li>Les soldats sont chargés d'or pillé (jusqu'à 40 kg chacun pour certains)</li>
                <li>Sur la chaussée de Tlacopan, les Aztèques attaquent de partout (terre et canots)</li>
                <li>Les ponts sont coupés, les chevaux glissent, les hommes se noient sous le poids de l'or</li>
                <li>Massacre pendant 8 heures de fuite dans la nuit</li>
            </ul>
            <strong>Bilan de la Noche Triste :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Pertes espagnoles : 600 morts sur 1 300 (+ 1 000 nouveaux arrivés de Narváez)</li>
                <li>Pertes alliées : 4 000 à 8 000 Tlaxcaltèques tués</li>
                <li>Tout l'or pillé est perdu au fond du lac</li>
                <li>Tous les canons perdus, presque tous les chevaux tués</li>
                <li>Cortés pleure sous un arbre (el árbol de la Noche Triste, légende)</li>
            </ul>
        `,
        choices: [
            {
                text: "FUITE PRÉCIPITÉE avec l'or. Chaque homme emporte le maximum d'or possible. Tant pis si ça nous ralentit, on ne renonce pas au butin !",
                effects: { richesses: 10, pouvoir: -20, loyaute: -20, humanisme: -10 },
                historical: true,
                feedback: "C'est malheureusement ce qui s'est passé. Beaucoup d'hommes, alourdis par 30-40 kg d'or, se sont noyés dans le lac Texcoco. Ceux qui ont survécu sont ceux qui ont abandonné l'or. Les pertes humaines ont été catastrophiques : 600 Espagnols et 4 000 alliés tués."
            },
            {
                text: "FUITE ORGANISÉE, abandon de l'or. Je fais jeter tout l'or avant de partir. Priorité à la survie, on reviendra le chercher plus tard.",
                effects: { loyaute: 20, pouvoir: 10, richesses: -20 },
                historical: false,
                feedback: "Beaucoup plus rationnel. Les pertes auraient été bien moindres. Mais vos soldats cupides auraient peut-être refusé d'obéir."
            },
            {
                text: "TENTATIVE DE NÉGOCIATION. J'envoie des émissaires proposer la paix et notre départ pacifique en échange de laisser l'or.",
                effects: { humanisme: 10, pouvoir: -15 },
                historical: false,
                feedback: "Après le massacre du Templo Mayor, aucune négociation n'était possible. Les Aztèques voulaient votre mort."
            },
            {
                text: "COMBAT JUSQU'À LA MORT. Nous ne fuyons pas. Nous nous défendons dans le palais jusqu'à la dernière cartouche.",
                effects: {},
                historical: false,
                gameOver: true,
                gameOverText: "Héroïque mais suicidaire. Assiégés, affamés, sans renforts, vous résistez 10 jours. Puis les Aztèques incendient le palais. Vous et tous vos hommes êtes capturés et sacrifiés au sommet du Templo Mayor. La conquête du Mexique s'arrête là."
            }
        ]
    },

    // Étape 9 : Le siège de Tenochtitlan
    {
        title: "Le siège de Tenochtitlan",
        subtitle: "Tenochtitlan, mai-août 1521",
        image: "images/sige_de_tenochtitlan.png",
        narrative: "Un an plus tard. Vous êtes revenu. Renforts de Cuba, reconstruction de l'armée, et surtout : 200 000 guerriers alliés (Tlaxcala, Texcoco, tous les ennemis des Aztèques). Vous avez construit 13 brigantins (petits navires) pour contrôler le lac. Mais surtout, un allié invisible et terrible vous a précédé : la variole. L'épidémie a décimé Tenochtitlan. Cuitláhuac, le nouvel empereur, est mort de la maladie après 80 jours de règne. Cuauhtémoc, jeune et déterminé, a pris le pouvoir. La ville est affaiblie, mais elle résiste férocement. Commence le siège le plus brutal de l'histoire des Amériques : 75 jours d'enfer, mai-août 1521.",
        essential: "La variole a été l'arme la plus meurtrière de la conquête. Importée involontairement par les Européens, elle a tué 90% des Aztèques malades (aucune immunité). Le siège de Tenochtitlan a duré 75 jours : famine, combats de rue, destruction quasi-totale de la ville.",
        moreInfo: `
            <strong>La variole : catastrophe biologique :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Arrivée avec un soldat noir de l'expédition de Narváez (1520)</li>
                <li>Les Amérindiens n'avaient aucune immunité (isolement depuis 15 000 ans)</li>
                <li>Taux de mortalité : 80-90% des malades contre 30% en Europe</li>
                <li>Vagues d'épidémies successives : variole, rougeole, typhus, grippe</li>
                <li>En 50 ans (1520-1570), la population du Mexique passe de 25 millions à 3 millions</li>
            </ul>
            <strong>Préparatifs du siège de Cortés :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>13 brigantins construits à Tlaxcala puis transportés en pièces détachées</li>
                <li>Permettent de contrôler le lac Texcoco et couper les ravitaillements</li>
                <li>200 000 guerriers alliés indigènes (majorité de l'armée !)</li>
                <li>900 Espagnols (renforts de Cuba)</li>
                <li>Artillerie : canons, arquebuses, arbalètes</li>
            </ul>
            <strong>Stratégie du siège :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Blocus naval : les brigantins empêchent ravitaillement par le lac</li>
                <li>Coupe des aqueducs : plus d'eau potable</li>
                <li>Destruction systématique : chaque bâtiment pris est rasé</li>
                <li>Interdiction de sortie : famine organisée</li>
                <li>Combats de rue acharnés : les Aztèques se battent maison par maison</li>
            </ul>
            <strong>Résistance héroïque de Cuauhtémoc :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cuauhtémoc ("aigle qui descend"), 25 ans, dernier empereur aztèque</li>
                <li>Refuse toutes les offres de reddition</li>
                <li>Organise la résistance rue par rue, pyramide par pyramide</li>
                <li>"Mieux vaut mourir glorieusement que vivre en esclavage"</li>
            </ul>
            <strong>Horreurs du siège :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Famine : les survivants mangent herbes, insectes, cuir</li>
                <li>Cadavres partout : variole + combats, impossible d'enterrer</li>
                <li>Eau potable coupée : les Aztèques boivent l'eau salée du lac</li>
                <li>Destruction : 90% de la ville est rasée</li>
                <li>Les Espagnols comblent les canaux avec des décombres pour avancer</li>
            </ul>
        `,
        choices: [
            {
                text: "SIÈGE TOTAL avec famine. Je bloque tout : eau, nourriture. La ville se rendra d'elle-même quand la famine sera insupportable.",
                effects: { pouvoir: 25, humanisme: -30, richesses: 10 },
                historical: true,
                feedback: "C'est la stratégie qu'a appliquée Cortés. Le siège a duré 75 jours (mai-août 1521). La famine et la soif ont forcé les Aztèques à se rendre. Les chroniqueurs espagnols ont décrit des scènes horribles : cadavres partout, survivants squelettiques. Environ 100 000 Aztèques sont morts pendant le siège."
            },
            {
                text: "PROPOSER une REDDITION HONORABLE. J'envoie des émissaires à Cuauhtémoc : s'il se rend, je respecte sa vie et celle de son peuple.",
                effects: { humanisme: 20, pouvoir: -10 },
                historical: false,
                feedback: "Cortés a effectivement proposé plusieurs fois la reddition, mais Cuauhtémoc a refusé. Il préférait la mort à la soumission."
            },
            {
                text: "ASSAUT IMMÉDIAT massif. J'attaque avec toute mon armée d'un coup. Finissons-en rapidement, même au prix de lourdes pertes.",
                effects: { pouvoir: -10, loyaute: -20, humanisme: -10 },
                historical: false,
                feedback: "Trop risqué. Les Aztèques connaissent chaque rue, chaque canal. Un assaut frontal aurait coûté des milliers de vies espagnoles et alliées."
            },
            {
                text: "COUPER eau et vivres, puis attendre. Je ne détruis pas la ville, je veux la préserver intacte pour la contrôler ensuite.",
                effects: { pouvoir: 15, humanisme: -15, richesses: -10 },
                historical: false,
                feedback: "Stratégie possible, mais Cortés a préféré détruire pour avancer. Il voulait briser psychologiquement la résistance."
            }
        ]
    },

    // Étape 10 : Capture de Cuauhtémoc
    {
        title: "Capture de Cuauhtémoc",
        subtitle: "Tenochtitlan, août 1521",
        image: "images/guerrier_jaguar.png",
        narrative: "13 août 1521. Le siège se termine. Cuauhtémoc tente de fuir en canot avec les derniers nobles aztèques. Vos brigantins le capturent. L'empereur déchu vous est présenté : jeune (25 ans), fier, épuisé. Il vous tend son poignard d'obsidienne : 'Tue-moi maintenant, j'ai fait tout ce qu'un chef doit faire pour défendre son peuple.' Mais vos hommes crient qu'il connaît l'emplacement du trésor royal. Des tonnes d'or cachées quelque part. Cuauhtémoc refuse de parler. L'empire aztèque est tombé. Que faire du dernier empereur ?",
        essential: "La chute de Tenochtitlan marque la fin de l'empire aztèque (13 août 1521). Cuauhtémoc a été capturé vivant. Cortés l'a d'abord traité honorablement, puis l'a fait torturer pour trouver l'or, sans résultat. Il l'a gardé prisonnier 4 ans avant de l'exécuter lors d'une expédition au Honduras.",
        moreInfo: `
            <strong>La capture de Cuauhtémoc :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>13 août 1521, dernier jour du siège</li>
                <li>Cuauhtémoc fuit en canot avec sa famille et les derniers nobles</li>
                <li>Capturé par le brigantin du capitaine García Holguín</li>
                <li>Amené devant Cortés, demande à être tué honorablement</li>
            </ul>
            <strong>La torture pour l'or :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Les Espagnols cherchent désespérément le trésor royal aztèque</li>
                <li>Cuauhtémoc et son ministre Tetlepanquetzal sont torturés</li>
                <li>Méthode : pieds et mains brûlés à l'huile bouillante</li>
                <li>Cuauhtémoc ne révèle rien (ou n'y a peut-être rien à révéler)</li>
                <li>La torture est si brutale que même certains Espagnols protestent</li>
            </ul>
            <strong>Le destin de Cuauhtémoc :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Gardé prisonnier comme otage politique (1521-1525)</li>
                <li>Utilisé par Cortés pour contrôler la population aztèque</li>
                <li>En 1525, Cortés l'emmène dans une expédition au Honduras</li>
                <li>Accusé de complot (preuves douteuses), pendu le 28 février 1525</li>
                <li>Cuauhtémoc est devenu un héros national mexicain, symbole de résistance</li>
            </ul>
            <strong>Le bilan de la conquête :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Durée totale : 2 ans et 5 mois (avril 1519 - août 1521)</li>
                <li>Tenochtitlan est détruite à 90%, reconstruite comme Mexico</li>
                <li>L'empire aztèque devient la Nouvelle-Espagne</li>
                <li>Cortés devient gouverneur et capitaine général, immensément riche</li>
                <li>Les alliés indigènes (Tlaxcala, Texcoco) obtiennent des privilèges</li>
                <li>Début de 300 ans de domination coloniale espagnole</li>
            </ul>
            <strong>Les conséquences à long terme :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Effondrement démographique : 90% de mortalité en 50 ans (maladies)</li>
                <li>Destruction culturelle : temples rasés, codex brûlés, interdiction des religions préhispaniques</li>
                <li>Métissage : naissance de la société mexicaine moderne</li>
                <li>Exploitation économique : mines d'argent, encomienda (quasi-esclavage)</li>
            </ul>
        `,
        choices: [
            {
                text: "EXÉCUTER immédiatement Cuauhtémoc. Il est trop dangereux de garder un symbole de résistance vivant. Qu'il meure en guerrier.",
                effects: { pouvoir: 10, humanisme: -15, richesses: -10 },
                historical: false,
                feedback: "Cortés a préféré le garder vivant comme otage politique pour contrôler la population aztèque."
            },
            {
                text: "TORTURER Cuauhtémoc pour trouver le trésor royal. L'or est la raison de cette expédition. Il doit parler.",
                effects: { richesses: 5, humanisme: -25, pouvoir: -5 },
                historical: true,
                feedback: "C'est malheureusement ce qu'a fait Cortés. Cuauhtémoc et son ministre ont été torturés (pieds brûlés à l'huile bouillante). Ils n'ont rien révélé, soit par courage, soit parce qu'il n'y avait rien à révéler. Cette torture a choqué même certains conquistadors."
            },
            {
                text: "TRAITER Cuauhtémoc en prisonnier honorable. Je le garde prisonnier mais dans de bonnes conditions. Il pourrait être utile politiquement.",
                effects: { humanisme: 20, pouvoir: 15, richesses: -5 },
                historical: false,
                feedback: "Cortés l'a d'abord traité correctement, mais l'a ensuite fait torturer sous la pression de ses hommes avides d'or."
            },
            {
                text: "INSTALLER Cuauhtémoc comme gouverneur fantoche. Je contrôle l'empire à travers lui, les Aztèques obéissent à leur empereur.",
                effects: { pouvoir: 20, humanisme: 5, richesses: 10 },
                historical: false,
                feedback: "Stratégie possible mais risquée. Cuauhtémoc était trop fier et trop populaire pour être manipulé. Cortés l'a finalement exécuté en 1525, craignant un complot."
            }
        ]
    }
];

// ============================================
// PARCOURS 2 : MOCTEZUMA II (1502-1520)
// ============================================

const moctezumaStepsData = [
    // Étape 0 : Consolidation du pouvoir
    {
        title: "Consolidation du pouvoir",
        subtitle: "Tenochtitlan, 1502-1517",
        image: "images/tenochtitlan.avif",
        narrative: "Vous êtes Moctezuma Xocoyotzin ('Moctezuma le Jeune'), neuvième tlatoani (empereur) de l'empire aztèque. En 1502, à 34 ans, vous avez succédé à votre oncle Ahuitzotl. Votre empire est à son apogée : 5 à 6 millions de sujets, des centaines de cités tributaires, Tenochtitlan compte 200 000 habitants. Mais l'empire est fragile. Les peuples soumis grondent sous le poids des tributs. Tlaxcala résiste depuis un siècle. Les guerres fleuries fournissent des captifs pour les sacrifices, mais épuisent les ressources. Comment consolider votre pouvoir ?",
        essential: "L'empire aztèque en 1502 était à son apogée territorial mais structurellement fragile. Le système tributaire créait du ressentiment, les cités indépendantes comme Tlaxcala restaient des menaces, et la légitimité du tlatoani reposait sur la capacité à fournir victoires militaires et captifs pour les sacrifices.",
        moreInfo: `
            <strong>L'empire aztèque en 1502 :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Territoire : ~200 000 km² (du Golfe du Mexique au Pacifique)</li>
                <li>Population : 5 à 6 millions de sujets (estimations variables)</li>
                <li>Tenochtitlan : 200 000 à 400 000 habitants, plus grande ville des Amériques</li>
                <li>Structure politique : Triple Alliance (Tenochtitlan, Texcoco, Tlacopan)</li>
            </ul>
            <strong>Le système tributaire :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Tributs imposés aux cités conquises : or, cacao, plumes, coton, maïs</li>
                <li>Tribut humain : captifs pour les sacrifices rituels</li>
                <li>Pas d'administration directe : les cités gardent leurs dirigeants locaux</li>
                <li>Rébellions fréquentes quand les tributs sont trop lourds</li>
            </ul>
            <strong>Les guerres fleuries (xochiyaoyotl) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Batailles rituelles avec Tlaxcala, Cholula, Huexotzinco</li>
                <li>Objectif : capturer des prisonniers pour les sacrifices</li>
                <li>Permettent d'entraîner les guerriers en temps de "paix"</li>
                <li>Mais affaiblissent l'empire et renforcent les ennemis</li>
            </ul>
            <strong>Moctezuma II : un empereur controversé :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Né vers 1466, neveu de l'empereur précédent Ahuitzotl</li>
                <li>Grand prêtre avant de devenir empereur (religieux, superstitieux)</li>
                <li>Réputé pour son faste, sa distance avec le peuple</li>
                <li>A renforcé le protocole royal, créant un fossé avec la noblesse</li>
            </ul>
        `,
        choices: [
            {
                text: "RÉFORMER le système tributaire : réduire les tributs des cités fidèles, augmenter la pression sur les rebelles. Politique de la carotte et du bâton.",
                effects: { pouvoir: 10, humanisme: 10, loyaute: 5, richesses: -5 },
                historical: false,
                feedback: "Approche équilibrée mais Moctezuma a plutôt maintenu le système tel quel, privilégiant le faste de Tenochtitlan."
            },
            {
                text: "RENFORCER le contrôle militaire : placer des garnisons aztèques dans les cités tributaires, réprimer durement toute rébellion.",
                effects: { pouvoir: 15, loyaute: -10, humanisme: -10 },
                historical: false,
                feedback: "L'empire aztèque n'avait pas assez de soldats pour occuper toutes les cités. Le système reposait sur la menace plutôt que l'occupation."
            },
            {
                text: "MAINTENIR le statu quo : le système fonctionne depuis un siècle. Ne pas changer ce qui marche. Concentrer les efforts sur le faste de Tenochtitlan.",
                effects: { pouvoir: 5, richesses: 10, loyaute: -5 },
                historical: true,
                feedback: "C'est effectivement ce qu'a fait Moctezuma II. Il a maintenu le système tributaire tel quel, investi dans l'embellissement de Tenochtitlan, et renforcé le protocole impérial. Cette rigidité contribuera à sa perte."
            },
            {
                text: "NÉGOCIER la paix avec Tlaxcala : mettre fin aux guerres fleuries, intégrer Tlaxcala comme allié égal dans l'empire.",
                effects: { humanisme: 20, pouvoir: -15, loyaute: -10 },
                historical: false,
                feedback: "Impossible culturellement. Les guerres fleuries étaient au cœur du système religieux aztèque. Renoncer aux sacrifices = offense aux dieux."
            }
        ]
    },

    // Étape 1 : Les présages inquiétants
    {
        title: "Les présages inquiétants",
        subtitle: "Tenochtitlan, 1517-1518",
        image: "images/Codex_azcatitlan_représentation_des_espagnols.jpg",
        narrative: "Depuis deux ans, des présages terribles troublent l'empire. En 1515, une comète est apparue dans le ciel nocturne. En 1516, le temple de Huitzilopochtli (dieu de la guerre) a mystérieusement pris feu. Des pêcheurs du lac ont capturé un oiseau étrange avec un miroir sur la tête - en regardant dedans, vous avez vu des guerriers inconnus. Vos prêtres sont inquiets. Certains évoquent le retour de Quetzalcóatl, le serpent à plumes qui avait quitté l'empire en promettant de revenir. L'année Ce Acatl (1519) approche - l'année prophétique du retour. Que faire face à ces présages ?",
        essential: "Les chroniques aztèques postérieures à la conquête mentionnent huit présages qui auraient annoncé la chute de l'empire. Les historiens modernes sont sceptiques : ces 'présages' ont probablement été reconstruits après coup pour donner un sens à la catastrophe.",
        moreInfo: `
            <strong>Les huit présages rapportés par les sources aztèques :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>1. Une comète apparaît (vers 1515)</li>
                <li>2. Le temple de Huitzilopochtli brûle mystérieusement (1516)</li>
                <li>3. La foudre frappe un temple sans tonnerre</li>
                <li>4. Une comète à trois têtes traverse le ciel</li>
                <li>5. Le lac Texcoco bouillonne et détruit des maisons</li>
                <li>6. On entend des pleurs de femme la nuit ("Mes enfants, nous sommes perdus")</li>
                <li>7. Des pêcheurs capturent un oiseau étrange avec un miroir montrant des guerriers</li>
                <li>8. Des hommes difformes apparaissent puis disparaissent</li>
            </ul>
            <strong>Le débat historique sur les présages :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Version traditionnelle :</strong> Les présages ont vraiment eu lieu, Moctezuma était paralysé par la peur</li>
                <li><strong>Historiens modernes :</strong> Reconstruction a posteriori pour expliquer la défaite</li>
                <li>Les sources proviennent de chroniques écrites APRÈS la conquête (années 1540-1570)</li>
                <li>Phénomène classique : attribuer des signes divins aux catastrophes passées</li>
            </ul>
            <strong>Le mythe du retour de Quetzalcóatl :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Quetzalcóatl = dieu serpent à plumes, associé au vent, à la sagesse</li>
                <li>Légende : il aurait quitté l'empire vers l'est en promettant de revenir</li>
                <li>Année Ce Acatl (1519) = année du roseau, associée à Quetzalcóatl</li>
                <li><strong>Controverse :</strong> Cortés était-il vraiment pris pour Quetzalcóatl ?</li>
                <li>Probable simplification coloniale pour justifier la soumission de Moctezuma</li>
            </ul>
            <strong>L'état d'esprit réel de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Probablement inquiet des rapports sur les Espagnols (1517-1518)</li>
                <li>Mais pas paralysé : il a envoyé des espions, préparé des cadeaux, envisagé la guerre</li>
                <li>Son hésitation venait surtout d'un calcul politique complexe</li>
                <li>Les "présages" ont peut-être joué un rôle, mais pas décisif</li>
            </ul>
        `,
        choices: [
            {
                text: "ORGANISER des sacrifices massifs pour apaiser les dieux. Si Quetzalcóatl revient, il doit trouver un empire pieux et prospère.",
                effects: { pouvoir: 5, humanisme: -15, loyaute: 5 },
                historical: false,
                feedback: "Moctezuma a bien intensifié les rituels religieux, mais pas de manière excessive face aux présages."
            },
            {
                text: "CONSULTER les sages et devins de l'empire. Envoyer des émissaires dans toutes les provinces pour interpréter ces signes.",
                effects: { pouvoir: 5, humanisme: 5 },
                historical: true,
                feedback: "C'est effectivement ce qu'a fait Moctezuma. Il a consulté prêtres et devins, cherché des explications. Certains présages l'ont réellement inquiété, mais il n'était pas paralysé."
            },
            {
                text: "IGNORER ces superstitions. Je suis empereur d'un empire puissant, pas un devin superstitieux. Concentrons-nous sur les problèmes réels.",
                effects: { pouvoir: 10, humanisme: 5, loyaute: -5 },
                historical: false,
                feedback: "Impossible dans le contexte religieux aztèque. Les présages divins étaient pris très au sérieux par tous."
            },
            {
                text: "PRÉPARER l'empire à une grande épreuve. Renforcer les défenses, stocker des vivres, rappeler les guerriers. Si un danger vient, nous serons prêts.",
                effects: { pouvoir: 15, loyaute: 10, richesses: -10 },
                historical: false,
                feedback: "Approche rationnelle mais Moctezuma n'a pas pris de mesures défensives massives avant l'arrivée de Cortés."
            }
        ]
    },

    // Étape 2 : Premières nouvelles des étrangers
    {
        title: "Premières nouvelles des étrangers",
        subtitle: "Tenochtitlan, printemps 1519",
        image: "images/Navires_cortes.jpg",
        narrative: "Des messagers arrivent en courant de la côte, essoufflés, terrifiés. Ils parlent de 'montagnes flottantes' sur l'océan, de guerriers à la peau pâle comme la mort, vêtus de métal brillant. Ils ont des 'cerfs géants' qui les portent - des créatures jamais vues. Leurs armes crachent le feu et le tonnerre. Les messagers présentent des dessins sur papier d'écorce : des hommes étranges avec des barbes, des bâtons qui tuent à distance. Ce ne sont pas des dieux - ils mangent, boivent, saignent. Mais d'où viennent-ils ? Que veulent-ils ? Vos conseillers sont divisés. Certains parlent de Quetzalcóatl. D'autres d'envahisseurs. Que décidez-vous ?",
        essential: "En février-mars 1519, Moctezuma a reçu les premiers rapports sur l'expédition de Cortés. Ses espions ont décrit les navires, les armes, les chevaux. Moctezuma a envoyé des émissaires avec des cadeaux somptueux - tentative diplomatique qui sera interprétée par Cortés comme une preuve de faiblesse.",
        moreInfo: `
            <strong>Les expéditions espagnoles avant Cortés :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>1517 : Expédition de Francisco Hernández de Córdoba au Yucatán</li>
                <li>1518 : Expédition de Juan de Grijalva, premiers contacts avec des émissaires aztèques</li>
                <li>Les Aztèques savaient donc depuis 2 ans que des étrangers exploraient les côtes</li>
            </ul>
            <strong>Les rapports des espions aztèques :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Description détaillée : hommes blancs barbus, vêtements de métal, armes étranges</li>
                <li>Les chevaux terrifiaient : jamais vus en Amérique depuis 10 000 ans</li>
                <li>Canons et arquebuses : "bâtons qui crachent le feu et tuent à distance"</li>
                <li>Les chiens de guerre (molosses) étaient aussi inconnus et terrifiants</li>
            </ul>
            <strong>Les interprétations à Tenochtitlan :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Hypothèse divine :</strong> Quetzalcóatl revient (mais pas unanime)</li>
                <li><strong>Hypothèse humaine :</strong> Explorateurs d'un royaume lointain</li>
                <li><strong>Hypothèse militaire :</strong> Envahisseurs potentiels (peu nombreux donc pas menaçants ?)</li>
                <li>Moctezuma penche pour une approche diplomatique : envoyer des cadeaux</li>
            </ul>
            <strong>Les premiers cadeaux de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Mars 1519 : émissaires avec masques, bijoux en or, parures de plumes</li>
                <li>Message : "Bienvenue, mais ne venez pas à Tenochtitlan (trop dangereux/sacré)"</li>
                <li>Erreur stratégique : montrer autant d'or attise la cupidité de Cortés</li>
                <li>Les cadeaux sont interprétés comme des tributs = signe de soumission</li>
            </ul>
        `,
        choices: [
            {
                text: "ENVOYER des émissaires avec des cadeaux somptueux (or, plumes de quetzal, masques sacrés). Montrons notre richesse et notre volonté de paix.",
                effects: { humanisme: 15, pouvoir: -10, richesses: -10 },
                historical: true,
                feedback: "C'est ce qu'a fait Moctezuma en mars 1519. Erreur fatale : les cadeaux en or ont attisé la cupidité de Cortés au lieu de l'intimider. De plus, offrir des cadeaux était interprété par les Espagnols comme un signe de soumission."
            },
            {
                text: "ATTAQUER IMMÉDIATEMENT sur la côte. Envoyer 20 000 guerriers écraser ces intrus avant qu'ils ne pénètrent dans l'empire.",
                effects: { pouvoir: 20, humanisme: -10, loyaute: 10 },
                historical: false,
                feedback: "Option militairement rationnelle. Avec 20 000 guerriers, les Aztèques auraient pu submerger les 550 Espagnols. Mais Moctezuma hésitait : et si c'étaient vraiment des êtres divins ?"
            },
            {
                text: "ESPIONNER ET OBSERVER. Envoyer des espions déguisés en marchands pour comprendre qui ils sont vraiment, sans les provoquer.",
                effects: { pouvoir: 10, humanisme: 5 },
                historical: false,
                feedback: "Approche prudente. Moctezuma a effectivement envoyé des espions, mais en même temps que les cadeaux diplomatiques."
            },
            {
                text: "LES IGNORER. Ce sont des explorateurs égarés, probablement peu nombreux. Ils repartiront d'eux-mêmes. Ne pas leur donner d'importance.",
                effects: { pouvoir: -15, humanisme: 5 },
                historical: false,
                feedback: "Dangereux. Cortés ne serait pas reparti. Au contraire, l'absence de réaction aurait pu être interprétée comme de la faiblesse."
            }
        ]
    },

    // Étape 3 : Le dilemme - guerre ou diplomatie
    {
        title: "Le dilemme : guerre ou diplomatie ?",
        subtitle: "Tenochtitlan, mars-septembre 1519",
        image: "images/Route_cortès_vers_Tenochtitlan.png",
        narrative: "Les nouvelles s'enchaînent. Les étrangers ont débarqué à Tabasco, vaincu les Mayas. Ils marchent vers l'intérieur. Pire : Tlaxcala, votre ennemi de toujours, s'est allié avec eux ! 100 000 guerriers tlaxcaltèques accompagnent maintenant les Espagnols. Le massacre de Cholula vous glace le sang : 3 000 morts en quelques heures. Ils approchent de Tenochtitlan. Vos généraux veulent la guerre : 'Nous avons 200 000 guerriers, ils sont 500 ! Détruisons-les !' Mais vos prêtres hésitent : 'Et si c'étaient des envoyés divins ?' Vous devez décider maintenant.",
        essential: "Entre mars et novembre 1519, Moctezuma a oscillé entre stratégie militaire et approche diplomatique. Son erreur fut l'hésitation : ni guerre totale (pourtant possible), ni diplomatie ferme. Cette indécision a permis à Cortés d'atteindre Tenochtitlan.",
        moreInfo: `
            <strong>La marche de Cortés vers Tenochtitlan (mars-novembre 1519) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Mars : Débarquement et bataille de Tabasco (victoire espagnole)</li>
                <li>Avril-août : Négociations puis alliance avec Tlaxcala</li>
                <li>Octobre : Massacre de Cholula (3 000 morts)</li>
                <li>Novembre : Arrivée aux portes de Tenochtitlan</li>
            </ul>
            <strong>Les options militaires de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Guerre en rase campagne :</strong> Submerger Cortés avec 50 000+ guerriers</li>
                <li><strong>Avantages :</strong> Supériorité numérique écrasante (100 contre 1)</li>
                <li><strong>Risques :</strong> Les armes espagnoles + chevaux + Tlaxcaltèques = bataille incertaine</li>
                <li><strong>Problème politique :</strong> Si Moctezuma perd, son autorité s'effondre</li>
            </ul>
            <strong>Les options diplomatiques :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Accueillir et observer :</strong> Garder Cortés proche pour le contrôler</li>
                <li><strong>Avantages :</strong> Éviter la guerre, comprendre leurs intentions</li>
                <li><strong>Risques :</strong> Les faire entrer dans la capitale = piège potentiel</li>
                <li><strong>Calcul :</strong> Moctezuma pense pouvoir contrôler 500 hommes dans sa ville</li>
            </ul>
            <strong>Le facteur Tlaxcala :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>L'alliance Cortés-Tlaxcala change tout : ce n'est plus 500 vs 200 000</li>
                <li>C'est 500 Espagnols + 100 000 Tlaxcaltèques + armes espagnoles</li>
                <li>Guerre totale = risque de guerre civile dans l'empire</li>
                <li>D'autres cités tributaires pourraient profiter du conflit pour se révolter</li>
            </ul>
            <strong>L'hésitation fatale de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Il envoie des messages contradictoires : tantôt menaçants, tantôt accueillants</li>
                <li>Tente d'acheter le départ de Cortés avec de l'or (effet inverse)</li>
                <li>N'ordonne ni guerre totale ni accueil franc = laisse Cortés avancer</li>
                <li>Cortés interprète cette hésitation comme de la faiblesse</li>
            </ul>
        `,
        choices: [
            {
                text: "GUERRE TOTALE. Mobiliser toutes les forces de l'empire. 50 000 guerriers attaquent Cortés avant qu'il n'atteigne Tenochtitlan. Écrasons-les !",
                effects: { pouvoir: 25, loyaute: 20, humanisme: -15 },
                historical: false,
                feedback: "Option militairement rationnelle. Avec 50 000 guerriers bien commandés, les Aztèques auraient pu vaincre Cortés malgré sa supériorité technologique. Mais Moctezuma craignait un échec qui ruinerait son autorité."
            },
            {
                text: "DIPLOMATIE ACTIVE. Les accueillir à Tenochtitlan, les impressionner par notre grandeur, négocier un départ pacifique contre tribut.",
                effects: { humanisme: 15, pouvoir: -10, richesses: -10 },
                historical: true,
                feedback: "C'est la stratégie qu'a choisie Moctezuma. Erreur fatale : accueillir Cortés dans la capitale lui a permis de prendre le contrôle. Moctezuma pensait pouvoir contrôler 500 hommes - il s'est trompé."
            },
            {
                text: "PIÈGE DIPLOMATIQUE. Les inviter à Tenochtitlan, puis les capturer ou les éliminer discrètement dans la ville. Stratégie du cheval de Troie inversé.",
                effects: { pouvoir: 20, humanisme: -20 },
                historical: false,
                feedback: "Stratégie dangereuse. Si le piège échoue, les Espagnols seraient au cœur de la capitale avec leurs armes. Et tuer des 'ambassadeurs' aurait pu déclencher une guerre avec leurs alliés."
            },
            {
                text: "BLOCUS ET NÉGOCIATION. Bloquer les chaussées, empêcher l'accès à Tenochtitlan. Négocier un accord depuis une position de force, sans les laisser entrer.",
                effects: { pouvoir: 15, humanisme: 10, loyaute: 10 },
                historical: false,
                feedback: "Meilleure option que l'accueil. Mais difficile à tenir : Cortés et les Tlaxcaltèques auraient pu forcer le passage ou assiéger la ville depuis l'extérieur."
            }
        ]
    },

    // Étape 4 : L'accueil à Tenochtitlan
    {
        title: "L'accueil à Tenochtitlan",
        subtitle: "Tenochtitlan, 8 novembre 1519",
        image: "images/malinche.jpg",
        narrative: "8 novembre 1519. Vous avancez sur la chaussée d'Iztapalapa, porté sur votre palanquin d'or, vêtu de votre plus belle parure de plumes de quetzal. Derrière vous, vos nobles, vos guerriers. Face à vous, sur la chaussée, Cortés et ses hommes. Leurs armures brillent au soleil. Derrière eux, des milliers de guerriers tlaxcaltèques - vos ennemis ancestraux dans votre propre capitale. Le moment est historique. Vous descendez de votre palanquin - geste d'humilité ou de respect ? Cortés avance. Par interprète, il parle de son roi lointain, de paix, d'échange. Ses yeux scrutent votre ville, calculateurs. Vous décidez de l'installer au palais d'Axayácatl. Mais comment le recevoir ?",
        essential: "La rencontre entre Moctezuma et Cortés le 8 novembre 1519 est l'un des moments les plus débattus de l'Histoire. Moctezuma a-t-il vraiment pris Cortés pour un dieu ? S'est-il soumis volontairement ? Ou était-ce une stratégie diplomatique mal comprise par les Espagnols ?",
        moreInfo: `
            <strong>La rencontre historique du 8 novembre 1519 :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Lieu : Chaussée d'Iztapalapa, entrée sud de Tenochtitlan</li>
                <li>Moctezuma descend de son palanquin (geste inhabituel pour un empereur)</li>
                <li>Échange de cadeaux : colliers, parures de plumes</li>
                <li>Installation des Espagnols au palais d'Axayácatl (père de Moctezuma)</li>
            </ul>
            <strong>Les interprétations contradictoires :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Version espagnole :</strong> Moctezuma se soumet, reconnaît Cortés comme représentant d'un souverain supérieur</li>
                <li><strong>Version moderne critique :</strong> Protocole diplomatique mal compris, gestes de courtoisie pris pour soumission</li>
                <li><strong>Problème de traduction :</strong> Toutes les paroles passent par Malinche (interprète de Cortés)</li>
                <li>Possible que Malinche ait traduit les politesses en déclarations de soumission</li>
            </ul>
            <strong>Le "discours de soumission" de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Selon Cortés, Moctezuma aurait dit : "Vous êtes chez vous, ceci est votre maison"</li>
                <li>Aurait évoqué un "seigneur parti vers l'est" (Quetzalcóatl) revenant</li>
                <li><strong>Problème :</strong> Aucune source aztèque ne confirme ce discours</li>
                <li>Probable exagération de Cortés pour justifier sa prise de pouvoir</li>
            </ul>
            <strong>Le calcul stratégique de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Garder les Espagnols proches = les surveiller et les contrôler</li>
                <li>Dans le palais = otages potentiels au cœur de la ville</li>
                <li>Démonstration de richesse et de pouvoir pour impressionner</li>
                <li>Mais : sous-estimation fatale de l'audace de Cortés</li>
            </ul>
        `,
        choices: [
            {
                text: "ACCUEIL SOMPTUEUX mais distant. Je reste empereur, ils restent visiteurs. Hospitalité parfaite mais protocole strict. Aucun signe de soumission.",
                effects: { pouvoir: 15, humanisme: 10, richesses: -5 },
                historical: false,
                feedback: "Approche la plus prudente. Mais difficile à maintenir : Cortés ne respecte pas les protocoles aztèques et cherche constamment à prendre l'ascendant."
            },
            {
                text: "ACCUEIL HUMBLE et religieux. Si ce sont des envoyés divins, je dois montrer respect et déférence. Les traiter comme des êtres supérieurs.",
                effects: { humanisme: 10, pouvoir: -20, loyaute: -15 },
                historical: false,
                feedback: "Erreur fatale si Cortés n'est pas un dieu. Cette attitude de soumission serait interprétée comme faiblesse et encouragerait Cortés à prendre le pouvoir."
            },
            {
                text: "ACCUEIL DIPLOMATIQUE ambigu. Politesse, cadeaux, mais aussi démonstration de force militaire. Leur montrer que nous pouvons les écraser si nécessaire.",
                effects: { pouvoir: 10, humanisme: 5, loyaute: 10 },
                historical: true,
                feedback: "Proche de ce qu'a fait Moctezuma : accueil fastueux mais ambiguïté permanente. Malheureusement, cette ambiguïté a été interprétée par Cortés comme hésitation et faiblesse."
            },
            {
                text: "PIÈGE IMMÉDIAT. Dès qu'ils entrent dans le palais, mes guerriers les capturent. Finissons-en maintenant.",
                effects: { pouvoir: 20, humanisme: -20, loyaute: 10 },
                historical: false,
                feedback: "Tentant mais très risqué. Les Espagnols sont armés, les Tlaxcaltèques sont nombreux à l'extérieur. Un combat dans le palais pourrait dégénérer en massacre."
            }
        ]
    },

    // Étape 5 : La captivité
    {
        title: "La captivité",
        subtitle: "Tenochtitlan, novembre 1519 - mai 1520",
        image: "images/Codex_azcatitlan_représentation_des_espagnols.jpg",
        narrative: "Une semaine après leur arrivée. Cortés entre dans vos appartements avec 30 soldats armés. Sans préavis, sans respect. Il vous accuse : vos gouverneurs de province auraient attaqué des Espagnols sur la côte. Il exige que vous veniez habiter au palais d'Axayácatl - avec lui. C'est une prise d'otage déguisée. Si vous refusez, il menace de violence. Si vous acceptez, vous perdez votre autorité. Autour de vous, vos gardes attendent un signe. Un mot et ils attaquent - mais Cortés a déjà la main sur son épée. Le palais pourrait devenir un champ de bataille. Que faites-vous ?",
        essential: "Le 14 novembre 1519, Cortés a pris Moctezuma en otage dans son propre palais - l'un des coups de poker les plus audacieux de l'Histoire. Moctezuma a accepté de venir 'volontairement', peut-être pour éviter un bain de sang, peut-être paralysé par l'indécision.",
        moreInfo: `
            <strong>La prise d'otage du 14 novembre 1519 :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Six jours seulement après l'arrivée de Cortés</li>
                <li>Prétexte : attaque d'Espagnols par des gouverneurs aztèques sur la côte</li>
                <li>Cortés entre avec 30 hommes armés dans les appartements impériaux</li>
                <li>Exige que Moctezuma vienne vivre au palais d'Axayácatl (contrôlé par les Espagnols)</li>
            </ul>
            <strong>Pourquoi Moctezuma a-t-il accepté ?</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Théorie 1 :</strong> Peur d'un bain de sang dans le palais</li>
                <li><strong>Théorie 2 :</strong> Paralysé par l'indécision, incapable de réagir</li>
                <li><strong>Théorie 3 :</strong> Calcul stratégique = gagner du temps, préparer une riposte</li>
                <li><strong>Théorie 4 :</strong> Croyait encore pouvoir contrôler la situation diplomatiquement</li>
            </ul>
            <strong>La vie en captivité (novembre 1519 - mai 1520) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Moctezuma reste formellement empereur, mais sous surveillance constante</li>
                <li>Il continue à gouverner... sous la dictée de Cortés</li>
                <li>Cortés exige un tribut en or : Moctezuma fait ouvrir les trésors</li>
                <li>Humiliation suprême : enchaîné temporairement quand Cortés craint une révolte</li>
            </ul>
            <strong>La réaction du peuple et de la noblesse :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Stupéfaction : l'empereur-dieu est prisonnier dans son propre palais</li>
                <li>Perte de respect : Moctezuma apparaît faible, contrôlé par les étrangers</li>
                <li>Montée de l'opposition : certains nobles veulent la guerre malgré Moctezuma</li>
                <li>Cuitláhuac, frère de Moctezuma, devient le leader de la résistance</li>
            </ul>
        `,
        choices: [
            {
                text: "ACCEPTER d'aller au palais d'Axayácatl 'volontairement'. Éviter le massacre, gagner du temps pour préparer une riposte.",
                effects: { pouvoir: -25, humanisme: 10, loyaute: -20 },
                historical: true,
                feedback: "C'est ce qu'a fait Moctezuma. Erreur fatale : il a perdu toute crédibilité auprès de son peuple. Un empereur qui se laisse capturer sans combattre n'est plus vraiment un empereur. Sa mort six mois plus tard scellera cette disgrâce."
            },
            {
                text: "REFUSER et ordonner l'ATTAQUE. Un mot et mes gardes massacrent ces 30 Espagnols insolents. Je mourrai peut-être, mais en empereur.",
                effects: { pouvoir: 20, humanisme: -15, loyaute: 15 },
                historical: false,
                feedback: "Héroïque mais chaotique. Combat dans le palais = centaines de morts, y compris Moctezuma probablement. Mais évite la captivité humiliante et galvanise la résistance aztèque immédiatement."
            },
            {
                text: "NÉGOCIER un compromis. J'accepte d'habiter près du palais espagnol, mais dans mes propres appartements. Je reste visible pour mon peuple.",
                effects: { pouvoir: -10, humanisme: 10, loyaute: -10 },
                historical: false,
                feedback: "Tentative raisonnable mais Cortés n'accepterait pas. Il veut un otage complet, sous contrôle permanent. Un compromis affaiblirait son emprise."
            },
            {
                text: "FEINDRE d'accepter, puis s'échapper cette nuit. Rejoindre mes généraux, organiser l'attaque de la ville contre les Espagnols.",
                effects: { pouvoir: 15, humanisme: -10, loyaute: 10 },
                historical: false,
                feedback: "Stratégie audacieuse mais difficile. Cortés surveillait Moctezuma 24h/24. Une tentative d'évasion ratée = mort certaine."
            }
        ]
    },

    // Étape 6 : Le massacre du Templo Mayor
    {
        title: "Le massacre du Templo Mayor",
        subtitle: "Tenochtitlan, mai 1520",
        image: "images/guerrier_jaguar.png",
        narrative: "Cortés est parti combattre une expédition espagnole venue l'arrêter. Il a laissé 80 hommes sous le commandement de Pedro de Alvarado. Vous êtes toujours prisonnier. C'est la fête de Toxcatl, la plus importante de l'année. 600 nobles dansent dans le Templo Mayor, désarmés, vêtus de leurs plus belles parures. Soudain, les portes se ferment. Les Espagnols attaquent. Arquebuses, épées d'acier. Vos nobles tombent, désarmés, massacrés comme du bétail. Le sang ruisselle sur les marches du temple sacré. 600 morts en quelques minutes. Alvarado prétend avoir découvert un complot. Mensonge. La ville explose de rage. Des milliers d'Aztèques assiègent le palais. Ils vous demandent d'ordonner l'attaque. Que faites-vous ?",
        essential: "Le massacre du Templo Mayor (mai 1520) fut le point de non-retour. L'attaque gratuite contre des nobles désarmés pendant une fête religieuse a déclenché une révolte populaire massive. Moctezuma, prisonnier, a perdu toute légitimité.",
        moreInfo: `
            <strong>Le massacre de Toxcatl (mai 1520) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés absent (parti combattre Pánfilo de Narváez sur la côte)</li>
                <li>80 Espagnols restés à Tenochtitlan sous le commandement de Pedro de Alvarado</li>
                <li>Fête de Toxcatl : cérémonie religieuse majeure, 600 nobles dansent dans le Templo Mayor</li>
                <li>Alvarado ordonne soudain l'attaque : portes fermées, massacre systématique</li>
            </ul>
            <strong>Les raisons du massacre (débattues) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li><strong>Version d'Alvarado :</strong> Prévenir un complot aztèque imminent</li>
                <li><strong>Version aztèque :</strong> Cupidité (nobles portaient bijoux en or) + panique</li>
                <li><strong>Historiens modernes :</strong> Probablement panique d'Alvarado face à 200 000 Aztèques</li>
                <li>Aucune preuve d'un complot réel, Alvarado n'avait pas l'intelligence de Cortés</li>
            </ul>
            <strong>La révolte populaire immédiate :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Toute la ville se soulève : "Mort aux barbares !"</li>
                <li>Les Espagnols sont assiégés dans le palais d'Axayácatl</li>
                <li>Moctezuma, prisonnier, est vu comme un traître par son propre peuple</li>
                <li>Cuitláhuac (frère de Moctezuma) organise l'attaque</li>
            </ul>
            <strong>Le dilemme de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Prisonnier des Espagnols, ne peut pas mener la résistance</li>
                <li>Si il appelle au calme, il trahit son peuple</li>
                <li>Si il appelle à l'attaque, les Espagnols le tuent immédiatement</li>
                <li>Position intenable : discrédité, impuissant</li>
            </ul>
        `,
        choices: [
            {
                text: "APPELER mon peuple au CALME. Je suis encore leur empereur. Qu'ils arrêtent l'attaque, je négocie avec les Espagnols.",
                effects: { pouvoir: -20, humanisme: 10, loyaute: -30 },
                historical: true,
                feedback: "C'est ce qu'a fait Moctezuma. Résultat catastrophique : son peuple l'a hué, traité de traître. Selon certaines sources, il aurait même été lapidé par ses propres sujets. Il a perdu toute légitimité."
            },
            {
                text: "APPELER à l'ATTAQUE TOTALE. Que mon peuple détruise le palais, qu'ils tuent tous les Espagnols, même si je meurs avec eux. Vengeance !",
                effects: { pouvoir: 20, humanisme: -10, loyaute: 25 },
                historical: false,
                feedback: "Héroïque et cohérent. Moctezuma mourrait probablement, mais en empereur digne. La ville aurait massacré les 80 Espagnols. Mais quand Cortés reviendrait avec des renforts..."
            },
            {
                text: "TENTER de m'ÉCHAPPER dans le chaos. Rejoindre mon frère Cuitláhuac, reprendre le commandement militaire de la résistance.",
                effects: { pouvoir: 15, humanisme: -5, loyaute: 20 },
                historical: false,
                feedback: "Option audacieuse. Dans le chaos de l'attaque, peut-être possible. Moctezuma libre = leadership de la résistance. Mais les Espagnols le surveillaient étroitement."
            },
            {
                text: "RESTER SILENCIEUX. Je ne suis plus empereur, je suis un otage. Je refuse de jouer leur jeu. Mon silence est ma dernière dignité.",
                effects: { pouvoir: -15, humanisme: 5, loyaute: -20 },
                historical: false,
                feedback: "Dignité personnelle mais abdication politique. Le peuple attend un leader - le silence est interprété comme lâcheté ou collaboration."
            }
        ]
    },

    // Étape 7 : La mort de Moctezuma
    {
        title: "La mort de Moctezuma",
        subtitle: "Tenochtitlan, 29 juin 1520",
        image: "images/noche_triste.jpg",
        narrative: "Cortés est revenu avec des renforts. La ville est assiégée depuis un mois. Votre peuple a coupé l'eau et la nourriture. Les Espagnols sont pris au piège. Cortés vous demande une dernière fois de parler à votre peuple, de leur ordonner de laisser partir les Espagnols pacifiquement. Vous montez sur le toit du palais, entouré de gardes espagnols. En bas, des milliers d'Aztèques vous regardent. Certains pleurent. D'autres crient : 'Traître ! Lâche !' Votre propre frère Cuitláhuac est parmi eux. Vous ouvrez la bouche pour parler. Soudain, des pierres volent. Une vous frappe à la tempe. Vous tombez. Trois jours plus tard, le 29 juin 1520, vous mourez. Empoisonné par les Espagnols ? Tué par votre propre peuple ? L'histoire ne le saura jamais avec certitude.",
        essential: "La mort de Moctezuma II le 29 juin 1520 reste mystérieuse. Version espagnole : tué par une pierre lancée par son propre peuple. Version aztèque : assassiné par les Espagnols. Sa mort symbolise l'effondrement de l'empire aztèque.",
        moreInfo: `
            <strong>Les circonstances de la mort (29 juin 1520) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Cortés revenu avec 1 300 hommes (renf orts de l'expédition Narváez)</li>
                <li>Ville révoltée, Espagnols assiégés dans le palais depuis un mois</li>
                <li>Cortés demande à Moctezuma de calmer son peuple une dernière fois</li>
                <li>Moctezuma monte sur le toit, parle à la foule</li>
            </ul>
            <strong>Version espagnole (Bernal Díaz, Cortés) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Des pierres sont lancées par la foule aztèque en colère</li>
                <li>Une pierre frappe Moctezuma à la tempe</li>
                <li>Il refuse de se soigner, arrache ses bandages</li>
                <li>Meurt trois jours plus tard (29 juin), déprimé et brisé</li>
            </ul>
            <strong>Version aztèque (Codex Florentino, traditions orales) :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Les Espagnols ont tué Moctezuma car il n'était plus utile</li>
                <li>Poignardé ou étranglé dans sa cellule</li>
                <li>L'histoire des pierres = invention espagnole pour masquer le meurtre</li>
                <li>Les Espagnols auraient jeté son corps dans un canal</li>
            </ul>
            <strong>Analyse historique moderne :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Impossible de trancher avec certitude</li>
                <li><strong>Arguments pour la lapidation :</strong> Le peuple aztèque le haïssait effectivement</li>
                <li><strong>Arguments pour l'assassinat :</strong> Cortés n'avait plus besoin d'un otage discrédité</li>
                <li>Probable : combinaison (blessure + achevé par les Espagnols)</li>
            </ul>
            <strong>L'héritage de Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>Dernier empereur aztèque ayant régné sur un empire intact</li>
                <li>Vu comme un échec par les historiens : hésitation fatale</li>
                <li>Mais situation impossible : aucun dirigeant n'avait jamais affronté ce type d'invasion</li>
                <li>Son successeur Cuitláhuac et Cuauhtémoc résisteront héroïquement mais en vain</li>
            </ul>
            <strong>Après Moctezuma :</strong>
            <ul style="margin: 15px 0; padding-left: 25px;">
                <li>30 juin 1520 : Noche Triste, fuite catastrophique des Espagnols (600 morts)</li>
                <li>Septembre 1520 : Cuitláhuac devient empereur, meurt de variole après 80 jours</li>
                <li>Février 1521 : Cuauhtémoc, 25 ans, devient dernier empereur</li>
                <li>Mai-août 1521 : Siège de Tenochtitlan, chute de l'empire</li>
            </ul>
        `,
        choices: [
            {
                text: "PARLER à mon peuple une dernière fois. Leur demander de laisser partir les Espagnols. Éviter un bain de sang, même si je suis discrédité.",
                effects: { humanisme: 15, pouvoir: -25, loyaute: -30 },
                historical: true,
                feedback: "C'est ce qu'a fait Moctezuma. Selon les sources espagnoles, il a été lapidé par son propre peuple. Mort tragique d'un empereur qui a cherché jusqu'au bout à éviter la guerre totale."
            },
            {
                text: "REFUSER de parler. Je ne serai pas l'instrument de Cortés. Qu'ils me tuent s'ils veulent, mais je ne trahirai plus mon peuple.",
                effects: { pouvoir: -15, humanisme: 10, loyaute: -10 },
                historical: false,
                feedback: "Dignité retrouvée. Les Espagnols l'auraient probablement tué immédiatement. Mort plus digne que la lapidation."
            },
            {
                text: "APPELER mon peuple à ATTAQUER. Que les dieux me pardonnent, mais ces barbares doivent mourir. Détruisez le palais, tuez-les tous, même si je meurs.",
                effects: { pouvoir: 20, humanisme: -15, loyaute: 25 },
                historical: false,
                feedback: "Rédemption héroïque. Moctezuma mourrait en guerrier. Les Aztèques auraient massacré les Espagnols piégés dans le palais. Mais l'histoire aurait-elle vraiment changé ?"
            },
            {
                text: "ACCEPTER ma mort avec dignité. Je sais que je vais mourir, d'une façon ou d'une autre. Mon règne est terminé. Que les dieux accueillent mon esprit.",
                effects: { pouvoir: -20, humanisme: 20, loyaute: -15 },
                historical: false,
                feedback: "Acceptation stoïque. Moctezuma se retire de l'Histoire avec philosophie. Mais son peuple attendait un leader, pas un sage résigné."
            }
        ]
    }
];

// Fin du fichier game_data.js
