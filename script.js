// Mobile menu toggle functions
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    hamburger.classList.toggle('active');
    navWrapper.classList.toggle('active');
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    hamburger.classList.remove('active');
    navWrapper.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navWrapper = document.querySelector('.nav-wrapper');
    const hamburger = document.querySelector('.hamburger');
    
    // Check if menu is open and click is outside the nav
    if (navWrapper.classList.contains('active') && 
        !navWrapper.contains(event.target) && 
        !hamburger.contains(event.target)) {
        closeMenu();
    }
});

// Close menu when window is resized to desktop view
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Optional: Consultation form function (placeholder)
function openConsultationForm() {
    // Add your code to open consultation form
    console.log('Opening consultation form');
}

// Language menu toggle function
function toggleLanguageMenu() {
    const languageMenu = document.getElementById('languageMenu');
    languageMenu.classList.toggle('active');
}

// Close language menu when clicking outside
document.addEventListener('click', function(event) {
    const languageMenu = document.getElementById('languageMenu');
    const globeIcon = document.querySelector('.globe-icon');
    
    if (languageMenu && globeIcon && !globeIcon.contains(event.target) && !languageMenu.contains(event.target)) {
        languageMenu.classList.remove('active');
    }
});

// Definizione delle traduzioni disponibili
const translations = {
    'en': {
      // Header
      'nav_home': 'Home',
      'nav_services': 'Services',
      'nav_about': 'About',
      'nav_contact': 'Contact',
      'get_started': 'Get Started',
      
      // Hero section
      'hero_title': 'Revolutionize Your Business with Intelligent AI Solutions',
      'hero_description': 'Speats delivers cutting-edge AI applications and autonomous agents that reduce operational costs by up to 40% while driving innovation and growth. Join the 200+ businesses already thriving with our solutions.',
      'explore_solutions': 'Explore Solutions',
      'contact_direct': 'Or contact us directly:',
      'email_us': 'Or email us:',
      'contact_us_directly': 'Or contact us directly:',
      'translate_language': 'Translate language Or contact us directly:',
      
      // Stats section
      'stat_cost_reduction': 'Average Cost Reduction',
      'stat_efficiency_increase': 'Increase in Efficiency',
      'stat_roi': 'ROI Within 6 Months',
      
      // Services section
      'services_title': 'Our AI Solutions',
      'services_description': 'We create powerful technology that solves real business problems, enhances productivity, and delivers measurable results.',
      
      // Service cards
      'service_intelligent_agents_title': 'Intelligent Agents',
      'service_intelligent_agents_description': 'Our autonomous AI agents can perceive your business environment, make decisions, and take actions to achieve specific goals without human intervention. They seamlessly handle complex workflows, customer interactions, and data analysis.',
      'service_key_benefits': 'Key Benefits:',
      'service_key_benefit_1': '24/7 operation without fatigue',
      'service_key_benefit_2': 'Consistent performance',
      'service_key_benefit_3': 'Scalable across departments',
      'service_key_benefit_4': 'Self-learning capabilities',
      
      'service_process_automation_title': 'Process Automation',
      'service_process_automation_description': 'Streamline workflows and eliminate repetitive tasks with our advanced automation solutions, allowing your team to focus on high-value work while reducing operational costs and improving accuracy.',
      'service_automation_areas': 'Automation Areas:',
      'service_automation_area_1': 'Document processing & analysis',
      'service_automation_area_2': 'Customer service operations',
      'service_automation_area_3': 'Supply chain optimization',
      'service_automation_area_4': 'Regulatory compliance',
      
      'service_custom_ai_applications_title': 'Custom AI Applications',
      'service_custom_ai_applications_description': 'We design and develop tailored AI applications that address your specific business challenges and optimize operational efficiency with solutions built specifically for your unique needs.',
      'service_features': 'Features:',
      'service_feature_1': 'Predictive analytics',
      'service_feature_2': 'Natural language processing',
      'service_feature_3': 'Computer vision solutions',
      'service_feature_4': 'Decision support systems',
      
      // Approach section
      'approach_title': 'Our Approach',
      'approach_description': 'We follow a structured approach to understand your needs and deliver solutions that exceed expectations.',
      
      // Process steps
      'process_step_1_title': 'Discovery',
      'process_step_1_description': 'We analyze your challenges and identify opportunities for AI and automation.',
      'process_step_2_title': 'Design',
      'process_step_2_description': 'We architect tailored solutions with cutting-edge AI technology.',
      'process_step_3_title': 'Development',
      'process_step_3_description': 'Our experts build and refine your solution using agile methodologies.',
      'process_step_4_title': 'Deployment',
      'process_step_4_description': 'We implement, test, and optimize for maximum impact and ROI.',
      
      // CTA section
      'cta_title': 'Ready to Transform Your Business?',
      'cta_description': 'Let\'s discuss how our AI solutions can help you achieve your goals and stay ahead of the competition.',
      'cta_call_us': 'Call +41 79 450 89 27',
      'cta_send_mail': 'Send Mail',
      
      // Footer
      'footer_company': 'Company',
      'footer_about_us': 'About Us',
      'footer_services': 'Services',
      'footer_case_studies': 'Case Studies',
      'footer_careers': 'Careers',
      'footer_solutions': 'Solutions',
      'footer_ai_applications': 'AI Applications',
      'footer_intelligent_agents': 'Intelligent Agents',
      'footer_process_automation': 'Process Automation',
      'footer_data_analytics': 'Data Analytics',
      'footer_contact_us': 'Contact Us',
      'footer_copyright': '© 2025 Speats. All Rights Reserved.',
      'footer_description': 'Leveraging cutting-edge AI technology, we empower businesses to streamline operations, drive innovation, and deliver exceptional customer experiences.'
    },
    'it': {
      // Header
      'nav_home': 'Home',
      'nav_services': 'Servizi',
      'nav_about': 'Chi Siamo',
      'nav_contact': 'Contatti',
      'get_started': 'Inizia Ora',
      
      // Hero section
      'hero_title': 'Rivoluziona la Tua Azienda con Soluzioni AI Intelligenti',
      'hero_description': 'Speats fornisce applicazioni AI all\'avanguardia e agenti autonomi che riducono i costi operativi fino al 40% favorendo l\'innovazione e la crescita. Unisciti alle oltre 200 aziende che già prosperano con le nostre soluzioni.',
      'explore_solutions': 'Esplora Soluzioni',
      'contact_direct': 'O contattaci direttamente:',
      'email_us': 'O inviaci un\'email:',
      'contact_us_directly': 'O contattaci direttamente:',
      'translate_language': 'Cambia lingua O contattaci direttamente:',
      
      // Stats section
      'stat_cost_reduction': 'Riduzione Media dei Costi',
      'stat_efficiency_increase': 'Aumento dell\'Efficienza',
      'stat_roi': 'ROI Entro 6 Mesi',
      
      // Services section
      'services_title': 'Le Nostre Soluzioni AI',
      'services_description': 'Creiamo tecnologie potenti che risolvono problemi aziendali reali, migliorano la produttività e offrono risultati misurabili.',
      
      // Service cards
      'service_intelligent_agents_title': 'Agenti Intelligenti',
      'service_intelligent_agents_description': 'I nostri agenti AI autonomi possono percepire l\'ambiente aziendale, prendere decisioni e intraprendere azioni per raggiungere obiettivi specifici senza intervento umano. Gestiscono facilmente flussi di lavoro complessi, interazioni con i clienti e analisi dei dati.',
      'service_key_benefits': 'Benefici Principali:',
      'service_key_benefit_1': 'Funzionamento 24/7 senza affaticamento',
      'service_key_benefit_2': 'Prestazioni costanti',
      'service_key_benefit_3': 'Scalabilità tra i reparti',
      'service_key_benefit_4': 'Capacità di auto-apprendimento',
      
      'service_process_automation_title': 'Automazione dei Processi',
      'service_process_automation_description': 'Ottimizza i flussi di lavoro ed elimina le attività ripetitive con le nostre soluzioni di automazione avanzate, consentendo al tuo team di concentrarsi su lavori ad alto valore aggiunto riducendo i costi operativi e migliorando la precisione.',
      'service_automation_areas': 'Aree di Automazione:',
      'service_automation_area_1': 'Elaborazione e analisi documenti',
      'service_automation_area_2': 'Operazioni di servizio clienti',
      'service_automation_area_3': 'Ottimizzazione della catena di fornitura',
      'service_automation_area_4': 'Conformità normativa',
      
      'service_custom_ai_applications_title': 'Applicazioni AI Personalizzate',
      'service_custom_ai_applications_description': 'Progettiamo e sviluppiamo applicazioni AI su misura che affrontano le sfide specifiche della tua azienda e ottimizzano l\'efficienza operativa con soluzioni costruite appositamente per le tue esigenze uniche.',
      'service_features': 'Caratteristiche:',
      'service_feature_1': 'Analisi predittiva',
      'service_feature_2': 'Elaborazione del linguaggio naturale',
      'service_feature_3': 'Soluzioni di computer vision',
      'service_feature_4': 'Sistemi di supporto decisionale',
      
      // Approach section
      'approach_title': 'Il Nostro Approccio',
      'approach_description': 'Seguiamo un approccio strutturato per comprendere le tue esigenze e offrire soluzioni che superano le aspettative.',
      
      // Process steps
      'process_step_1_title': 'Scoperta',
      'process_step_1_description': 'Analizziamo le tue sfide e identifichiamo opportunità per l\'AI e l\'automazione.',
      'process_step_2_title': 'Progettazione',
      'process_step_2_description': 'Progettiamo soluzioni su misura con tecnologia AI all\'avanguardia.',
      'process_step_3_title': 'Sviluppo',
      'process_step_3_description': 'I nostri esperti costruiscono e perfezionano la tua soluzione utilizzando metodologie agili.',
      'process_step_4_title': 'Implementazione',
      'process_step_4_description': 'Implementiamo, testiamo e ottimizziamo per il massimo impatto e ROI.',
      
      // CTA section
      'cta_title': 'Pronto a Trasformare la Tua Azienda?',
      'cta_description': 'Discutiamo di come le nostre soluzioni AI possono aiutarti a raggiungere i tuoi obiettivi e restare avanti alla concorrenza.',
      'cta_call_us': 'Chiama +41 79 450 89 27',
      'cta_send_mail': 'Invia Email'
    },
    'fr': {
      // Header
      'nav_home': 'Accueil',
      'nav_services': 'Services',
      'nav_about': 'À Propos',
      'nav_contact': 'Contact',
      'get_started': 'Commencer',
      
      // Hero section
      'hero_title': 'Révolutionnez Votre Entreprise avec des Solutions IA Intelligentes',
      'hero_description': 'Speats propose des applications d\'IA de pointe et des agents autonomes qui réduisent les coûts opérationnels jusqu\'à 40% tout en favorisant l\'innovation et la croissance. Rejoignez les plus de 200 entreprises qui prospèrent déjà avec nos solutions.',
      'explore_solutions': 'Explorer les Solutions',
      'contact_direct': 'Ou contactez-nous directement :',
      'email_us': 'Ou envoyez-nous un email :',
      'contact_us_directly': 'Ou contactez-nous directement :',
      'translate_language': 'Changer de langue Ou contactez-nous directement :',
      
      // Stats section
      'stat_cost_reduction': 'Réduction Moyenne des Coûts',
      'stat_efficiency_increase': 'Augmentation de l\'Efficacité',
      'stat_roi': 'ROI en 6 Mois',
      
      // Services section
      'services_title': 'Nos Solutions IA',
      'services_description': 'Nous créons des technologies puissantes qui résolvent des problèmes commerciaux réels, améliorent la productivité et offrent des résultats mesurables.',
      
      // Service cards
      'service_intelligent_agents_title': 'Agents Intelligents',
      'service_intelligent_agents_description': 'Nos agents IA autonomes peuvent percevoir votre environnement commercial, prendre des décisions et agir pour atteindre des objectifs spécifiques sans intervention humaine. Ils gèrent facilement des flux de travail complexes, des interactions avec les clients et l\'analyse de données.',
      'service_key_benefits': 'Avantages Clés:',
      'service_key_benefit_1': 'Fonctionnement 24/7 sans fatigue',
      'service_key_benefit_2': 'Performance constante',
      'service_key_benefit_3': 'Évolutivité entre les départements',
      'service_key_benefit_4': 'Capacités d\'auto-apprentissage',
      
      // CTA section
      'cta_title': 'Prêt à Transformer Votre Entreprise?',
      'cta_description': 'Discutons de la façon dont nos solutions IA peuvent vous aider à atteindre vos objectifs et à rester en avance sur la concurrence.',
      'cta_call_us': 'Appelez +41 79 450 89 27',
      'cta_send_mail': 'Envoyer un Email'
    },
    'de': {
      // Header
      'nav_home': 'Startseite',
      'nav_services': 'Dienstleistungen',
      'nav_about': 'Über Uns',
      'nav_contact': 'Kontakt',
      'get_started': 'Loslegen',
      
      // Hero section
      'hero_title': 'Revolutionieren Sie Ihr Unternehmen mit Intelligenten KI-Lösungen',
      'hero_description': 'Speats liefert modernste KI-Anwendungen und autonome Agenten, die die Betriebskosten um bis zu 40% senken und gleichzeitig Innovation und Wachstum fördern. Schließen Sie sich den über 200 Unternehmen an, die bereits mit unseren Lösungen erfolgreich sind.',
      'explore_solutions': 'Lösungen Erkunden',
      'contact_direct': 'Oder kontaktieren Sie uns direkt:',
      'email_us': 'Oder mailen Sie uns:',
      'contact_us_directly': 'Oder kontaktieren Sie uns direkt:',
      'translate_language': 'Sprache ändern Oder kontaktieren Sie uns direkt:',
      
      // Stats section
      'stat_cost_reduction': 'Durchschnittliche Kostenreduzierung',
      'stat_efficiency_increase': 'Effizienzsteigerung',
      'stat_roi': 'ROI Innerhalb von 6 Monaten',
      
      // Services section
      'services_title': 'Unsere KI-Lösungen',
      'services_description': 'Wir entwickeln leistungsstarke Technologien, die reale Geschäftsprobleme lösen, die Produktivität steigern und messbare Ergebnisse liefern.',
      
      // CTA section
      'cta_title': 'Bereit, Ihr Unternehmen zu Transformieren?',
      'cta_description': 'Lassen Sie uns besprechen, wie unsere KI-Lösungen Ihnen helfen können, Ihre Ziele zu erreichen und der Konkurrenz voraus zu sein.',
      'cta_call_us': 'Rufen Sie an +41 79 450 89 27',
      'cta_send_mail': 'E-Mail Senden'
    }
};
  
// Lingua predefinita
let currentLanguage = 'en';
  
// Funzione per cambiare lingua
function changeLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Lingua "${lang}" non supportata.`);
        return;
    }
    
    currentLanguage = lang;
    updatePageText();
    updateFlagIcon(lang);
    
    // Salva la preferenza dell'utente
    localStorage.setItem('language', lang);
    
    // Close the language menu after selection
    const languageMenu = document.getElementById('languageMenu');
    if (languageMenu) {
        languageMenu.classList.remove('active');
    }
}

// Funzione per aggiornare l'icona della bandiera
function updateFlagIcon(lang) {
    const flagIcon = document.querySelector('.flag-icon');
    if (flagIcon) {
        switch(lang) {
            case 'en':
                flagIcon.textContent = '🇬🇧';
                break;
            case 'it':
                flagIcon.textContent = '🇮🇹';
                break;
            case 'fr':
                flagIcon.textContent = '🇫🇷';
                break;
            case 'de':
                flagIcon.textContent = '🇩🇪';
                break;
            default:
                flagIcon.textContent = '🇬🇧';
        }
    }
}
  
// Funzione per aggiornare il testo della pagina
function updatePageText() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        
        if (translations[currentLanguage][key]) {
            if (key.includes('html_')) {
                // Per contenuti con HTML
                element.innerHTML = translations[currentLanguage][key];
            } else {
                // Per contenuti testuali semplici
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}
  
// Inizializza la lingua all'avvio
document.addEventListener('DOMContentLoaded', function() {
    // Controlla se c'è una preferenza salvata
    const savedLanguage = localStorage.getItem('language');
    
    // Imposta la lingua salvata o quella predefinita
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
        updateFlagIcon(savedLanguage);
    } else {
        // Default to English
        updateFlagIcon('en');
    }
    
    // Iniziale sostituzione dei testi
    updatePageText();
});
