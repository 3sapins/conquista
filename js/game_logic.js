// Game Logic - La Conquête du Mexique

// État du jeu
let gameState = {
    currentStep: 0,
    pouvoir: 50,
    richesses: 50,
    humanisme: 50,
    loyaute: 50,
    choices: [],
    equipment: []
};

// Fonction de démarrage du jeu
function startGame(parcours) {
    if (parcours === 'cortes') {
        // Cacher l'écran d'accueil
        document.getElementById('welcomeScreen').style.display = 'none';
        // Afficher l'écran de jeu
        document.getElementById('gameScreen').style.display = 'block';
        
        // Réinitialiser l'état du jeu
        gameState = {
            currentStep: 0,
            pouvoir: 50,
            richesses: 50,
            humanisme: 50,
            loyaute: 50,
            choices: [],
            equipment: []
        };
        
        // Charger la première étape
        loadStep(0);
    }
}

// Fonction pour charger une étape
function loadStep(stepIndex) {
    const step = stepsData[stepIndex];
    
    // Mettre à jour le header
    document.getElementById('stepTitle').textContent = step.title;
    document.getElementById('stepSubtitle').textContent = step.subtitle;
    
    // Mettre à jour l'image
    const stepImage = document.getElementById('stepImage');
    if (step.image) {
        stepImage.src = step.image;
        stepImage.alt = step.title;
        stepImage.style.display = 'block';
    } else {
        stepImage.style.display = 'none';
    }
    
    // Mettre à jour le contenu narratif
    document.getElementById('narrative').textContent = step.narrative;
    
    // Mettre à jour l'essentiel
    document.getElementById('essential').textContent = step.essential;
    
    // Mettre à jour "En savoir plus"
    document.getElementById('moreInfo').innerHTML = step.moreInfo;
    document.getElementById('moreInfo').classList.remove('visible');
    document.getElementById('moreInfoToggle').textContent = '➕ En savoir plus';
    
    // Cacher le feedback historique
    document.getElementById('historicalFeedback').classList.remove('visible');
    
    // Cacher le game over
    document.getElementById('gameOver').classList.remove('visible');
    
    // Cacher le bouton continuer
    document.getElementById('continueButton').style.display = 'none';
    
    // Créer les choix
    createChoices(step.choices, stepIndex);
    
    // Scroll en haut
    window.scrollTo(0, 0);
}

// Fonction pour créer les boutons de choix
function createChoices(choices, stepIndex) {
    const choicesGrid = document.getElementById('choicesGrid');
    choicesGrid.innerHTML = '';
    
    choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice-button';
        button.textContent = choice.text;
        button.onclick = () => makeChoice(stepIndex, index);
        choicesGrid.appendChild(button);
    });
}

// Fonction pour faire un choix
function makeChoice(stepIndex, choiceIndex) {
    const step = stepsData[stepIndex];
    const choice = step.choices[choiceIndex];
    
    // Enregistrer le choix
    gameState.choices.push({
        step: stepIndex,
        choice: choiceIndex,
        text: choice.text
    });
    
    // Appliquer les effets sur les jauges
    if (choice.effects) {
        if (choice.effects.pouvoir) {
            gameState.pouvoir = Math.max(0, Math.min(100, gameState.pouvoir + choice.effects.pouvoir));
        }
        if (choice.effects.richesses) {
            gameState.richesses = Math.max(0, Math.min(100, gameState.richesses + choice.effects.richesses));
        }
        if (choice.effects.humanisme) {
            gameState.humanisme = Math.max(0, Math.min(100, gameState.humanisme + choice.effects.humanisme));
        }
        if (choice.effects.loyaute) {
            gameState.loyaute = Math.max(0, Math.min(100, gameState.loyaute + choice.effects.loyaute));
        }
    }
    
    // Enregistrer l'équipement si présent
    if (choice.equipment) {
        gameState.equipment = gameState.equipment.concat(choice.equipment);
    }
    
    // Mettre à jour l'affichage des jauges
    updateGauges();
    
    // Désactiver tous les boutons de choix
    const buttons = document.querySelectorAll('.choice-button');
    buttons.forEach(btn => btn.disabled = true);
    
    // Afficher le feedback historique si présent
    if (choice.feedback) {
        const feedbackDiv = document.getElementById('historicalFeedback');
        document.getElementById('feedbackContent').textContent = choice.feedback;
        feedbackDiv.classList.add('visible');
    }
    
    // Vérifier si c'est un game over
    if (choice.gameOver) {
        showGameOver(choice.gameOverText);
    } else {
        // Afficher le bouton continuer
        document.getElementById('continueButton').style.display = 'block';
    }
}

// Fonction pour mettre à jour les jauges
function updateGauges() {
    updateGauge('gaugePouvoir', gameState.pouvoir);
    updateGauge('gaugeRichesses', gameState.richesses);
    updateGauge('gaugeHumanisme', gameState.humanisme);
    updateGauge('gaugeLoyaute', gameState.loyaute);
}

// Fonction pour mettre à jour une jauge individuelle
function updateGauge(gaugeId, value) {
    const gauge = document.getElementById(gaugeId);
    gauge.style.width = value + '%';
    gauge.textContent = Math.round(value);
}

// Fonction pour passer à l'étape suivante
function nextStep() {
    gameState.currentStep++;
    
    // Vérifier si c'est la fin du jeu
    if (gameState.currentStep >= stepsData.length) {
        showEndScreen();
    } else {
        loadStep(gameState.currentStep);
    }
}

// Fonction pour afficher le game over
function showGameOver(message) {
    const gameOverDiv = document.getElementById('gameOver');
    document.getElementById('gameOverText').textContent = message;
    gameOverDiv.classList.add('visible');
    
    // Cacher le bouton continuer
    document.getElementById('continueButton').style.display = 'none';
}

// Fonction pour afficher l'écran de fin
function showEndScreen() {
    // Cacher l'écran de jeu
    document.getElementById('gameScreen').style.display = 'none';
    
    // Afficher l'écran de fin
    const endScreen = document.getElementById('endScreen');
    endScreen.style.display = 'block';
    
    // Calculer le profil du joueur
    const profile = calculateProfile();
    document.getElementById('profileType').textContent = profile.type;
    document.getElementById('profileDescription').textContent = profile.description;
    
    // Afficher les jauges finales
    document.getElementById('finalPouvoir').textContent = Math.round(gameState.pouvoir);
    document.getElementById('finalRichesses').textContent = Math.round(gameState.richesses);
    document.getElementById('finalHumanisme').textContent = Math.round(gameState.humanisme);
    document.getElementById('finalLoyaute').textContent = Math.round(gameState.loyaute);
    
    // Scroll en haut
    window.scrollTo(0, 0);
}

// Fonction pour calculer le profil du joueur
function calculateProfile() {
    const p = gameState.pouvoir;
    const r = gameState.richesses;
    const h = gameState.humanisme;
    const l = gameState.loyaute;
    
    // Calculer les scores moyens
    const avgAll = (p + r + h + l) / 4;
    
    // Profils basés sur les jauges dominantes
    if (h >= 70 && p < 40) {
        return {
            type: "L'Humaniste Utopique",
            description: "Vous avez tenté de conquérir avec compassion et respect des populations locales. Malheureusement, dans le contexte brutal du XVIe siècle, cette approche était vouée à l'échec. Votre humanisme vous honore, mais la conquête historique n'aurait pas pu se faire ainsi."
        };
    } else if (p >= 75 && h < 30) {
        return {
            type: "Le Conquistador Impitoyable",
            description: "Vous avez privilégié le pouvoir absolu et la terreur. Votre approche brutale a certes permis de contrôler les populations, mais au prix d'atrocités massives et d'une réputation de tyran sanguinaire. Même Cortés, pourtant cruel, était plus calculateur dans sa violence."
        };
    } else if (r >= 75 && l < 40) {
        return {
            type: "Le Mercenaire Cupide",
            description: "Vous avez tout sacrifié pour l'or. Votre obsession de la richesse a mené à des décisions désastreuses, perdant la loyauté de vos hommes et sapant votre autorité. Les conquistadors les plus avides furent souvent ceux qui moururent les premiers, alourdis par leur butin."
        };
    } else if (p >= 60 && r >= 50 && h < 50 && l >= 50) {
        return {
            type: "Le Conquistador Pragmatique",
            description: "Votre approche équilibre pouvoir, richesses et pragmatisme. Vous avez été cruel quand nécessaire, diplomate quand utile. Ce profil se rapproche de Cortés historique : un homme ambitieux, calculateur, prêt à tout pour réussir, mais capable de stratégie à long terme."
        };
    } else if (h >= 55 && p >= 55 && l >= 60) {
        return {
            type: "L'Explorateur Éclairé",
            description: "Vous avez tenté un équilibre difficile entre conquête et humanité. Plus respectueux que Cortés, vous avez privilégié les alliances honorables et limité les massacres. Une approche plus moderne, certainement plus éthique, mais qui aurait difficilement mené à la conquête totale dans le contexte de l'époque."
        };
    } else if (l >= 70 && p >= 50) {
        return {
            type: "Le Chef Charismatique",
            description: "La loyauté de vos troupes est votre plus grande force. Vous avez su maintenir la cohésion de votre armée malgré les épreuves. C'était effectivement crucial : les conquistadors qui perdaient la confiance de leurs hommes ne survivaient pas longtemps."
        };
    } else if (avgAll >= 60) {
        return {
            type: "Le Stratège Équilibré",
            description: "Vous avez maintenu un équilibre remarquable entre toutes les dimensions de la conquête. Pouvoir, richesses, relations humaines, loyauté des troupes : vous avez géré chaque aspect avec attention. Cette approche équilibrée, bien que moins spectaculaire, est souvent la plus efficace à long terme."
        };
    } else {
        return {
            type: "Le Conquistador Hésitant",
            description: "Vos choix ont été indécis, cherchant à ménager toutes les parties sans vraiment s'engager. Dans le contexte brutal de la conquête, cette hésitation est une faiblesse. Les conquistadors qui ont réussi étaient des hommes de décision, pour le meilleur et pour le pire."
        };
    }
}

// Fonction pour recommencer le jeu
function restartGame() {
    // Cacher tous les écrans
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('endScreen').style.display = 'none';
    
    // Afficher l'écran d'accueil
    document.getElementById('welcomeScreen').style.display = 'block';
    
    // Réinitialiser l'état
    gameState = {
        currentStep: 0,
        pouvoir: 50,
        richesses: 50,
        humanisme: 50,
        loyaute: 50,
        choices: [],
        equipment: []
    };
    
    // Scroll en haut
    window.scrollTo(0, 0);
}

// Fonction pour toggle "En savoir plus"
function toggleMoreInfo() {
    const moreInfoDiv = document.getElementById('moreInfo');
    const toggleButton = document.getElementById('moreInfoToggle');
    
    if (moreInfoDiv.classList.contains('visible')) {
        moreInfoDiv.classList.remove('visible');
        toggleButton.textContent = '➕ En savoir plus';
    } else {
        moreInfoDiv.classList.add('visible');
        toggleButton.textContent = '➖ Masquer les détails';
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // S'assurer que l'écran d'accueil est visible
    document.getElementById('welcomeScreen').style.display = 'block';
    document.getElementById('gameScreen').style.display = 'none';
    document.getElementById('endScreen').style.display = 'none';
});
