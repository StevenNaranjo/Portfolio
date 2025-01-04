const translations = {
    es: {
        navbar: {
            home: "Inicio",
            projects: "Proyectos",
            education: "Formación",
            contact: "Contacto",
            disponibility: "Disponible para trabajar"
        },
        about: {
            greeting: "Hola 👋🏼, soy",
            job: "Ingeniero en Computación",
            aboutMe: "Sobre mí",
            languages: "🌐 Español (nativo) | Inglés (intermedio)",
            description: "Soy estudiante de Ingeniería en Computación en el Tecnológico de Costa Rica, me apasiona desarrollar soluciones innovadoras y expandir mis conocimientos en desarrollo de software. Me encanta aprender nuevas tecnologías y trabajar en proyectos desafiantes."
        },
        tecnologies: {
            tecnologies: "📚 Tecnologías:",
            programmingLanguages: "Lenguajes de programación",
            tools: "Herramientas",
            dataBases: "Bases de datos",
            design: "Diseño y Estructuras",
            operativeSystems: "Sistemas Operativos",
            imLearning: "Estoy aprendiendo"
        },
        projects: {
            relevantProjects: "Proyectos relevantes",
            website: "Sitio web",
            songApp:{
                name: "",
                description: "",
            },
            cerroDragon: {
                name: "Cerro Dragon",
                description: "Sitio web diseñado para promover los servicios de turismo rural y aventura que ofrece Cerro Dragón Tours. La página ofrece una experiencia interactiva que permite a los usuarios explorar los servicios ofrecidos, obtener información detallada sobre tours disponibles, y conocer más sobre la misión y visión de la empresa."
            },
            tuneStay : {
                name: "TuneStay",
                description: ""
            }
        },
        education: {
            education: "Formación",
            tec : {
                name: "Tecnoógico de Costa Rica",
                career: "Ingeniería en Computación",
                date: "2023 - Actualidad",
                description: ""
            }
        },
        personalInterests: {
            title: "Intereses personales",
            reading: {
                name: "Lectura",
                description: "Me gusta leer libros de ciencia, ciencia-ficción, fantasía e historia."
            },
            art: {
                name: "Arte",
                description: "Experimento con la creación de arte, el diseño gráfico, la animacion y el modelado 3D."
            },
            videogames: {
                name: "Videojuegos",
                description : "Disfruto de los videojuegos en mi tiempo libre. Mi favorito por el momento Hollow Knight."
            },
            motorbikes: {
                name: "Motos",
                description: "Me gustan las motos ya sean de enduro, cross o superdeportivas."
            },
            nature: {
                name: "Naturaleza",
                description: "Me gusta practicar senderismo y conocer nuevos lugares."
            },
            chess: {
                name: "Ajedrez",
                description: "Me gusta jugar ajedrez y aprender nuevas estrategias, ademas de ver partidas de ajedrez de los grandes maestros."
            }
        },
        getInTouch: {
            title: "¡Contáctame!",
            description: "Si quieres contactarte conmigo, puedes hacerlo a través de las redes sociales. Te responderé lo antes posible. ¡Gracias! 😊",
        }
    },
    en: {
        navbar: {
            home: "Home",
            projects: "Projects",
            education: "Education",
            contact: "Contact",
            disponibility: "Available for work"
        },
        about: {
            greeting: "Hello 👋🏼, I'm",
            job: "Computer Engineer",
            aboutMe: "About Me",
            languages: "🌐 Spanish (native) | English (intermediate)",
            description: "I am a Computer Engineering student at the Costa Rica Institute of Technology. I am passionate about developing innovative solutions and expanding my knowledge in software development. I love learning new technologies and working on challenging projects."
        },
        tecnologies: {
            tecnologies: "📚 Tecnologies:",
            tools: "Tools",
            programmingLanguages: "Programming Languages",
            dataBases: "Data Bases",
            design: "Design and Structures",
            operativeSystems: "Operative Systems",
            imLearning: "I'm learning"
        },
        projects: {
            relevantProjects: "Relevant Projects",
            website: "Website",
            songApp:{
                name: "",
                description: "",
            },
            cerroDragon: {
                name: "Cerro Dragon",
                description: ""
            },
            tuneStay : {
                name: "TuneStay",
                description: ""
            }
        },
        education: {
            education: "Education",
            tec : {
                name: "Costa Rica Institute of Technology",
                career: "Computer Engineering",
                date: "2023 - Present",
                description: ""
            }
        },
        personalInterests: {
            title: "Personal Interests",
            reading: {
                name: "Reading",
                description: "I like to read books on science, sci-fi, fantasy, and history."
            },
            art: {
                name: "Art",
                description: "I experiment with creating art, graphic design, animation, and 3D modeling."
            },
            videogames: {
                name: "Videogames",
                description : "I enjoy video games in my free time. My favorite at the moment is Hollow Knight."
            },
            motorbikes: {
                name: "Motos",
                description: "I like motorcycles, whether they are enduro, cross, or super sports."
            },
            nature: {
                name: "Nature",
                description: "I like to hike and discover new places."
            },
            chess: {
                name: "Chess",
                description: "I like to play chess and learn new strategies, as well as watch chess games by the grandmasters."
            }
        },
        getInTouch: {
            title: "Get in touch!",
            description: "If you want to contact me, you can do so through social networks. I will respond as soon as possible. Thank you! 😊",
        }
    }
};

let currentLanguage = 'es';

function changeLanguage(language) {
    document.querySelectorAll("[data-translate]").forEach(el => {
        const keys = el.getAttribute("data-translate").split(".");
        let translation = translations[language];
        keys.forEach(key => {
            translation = translation[key];
        });
        el.textContent = translation;
    });
}

document.getElementById('changeLanguageBtn').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    changeLanguage(currentLanguage);

    // Cambiar el texto del botón según el idioma
    const button = document.getElementById('changeLanguageBtn');
    button.textContent = currentLanguage === 'es' ? 'Español' : 'English';
});


// Inicializar con el idioma por defecto
changeLanguage(currentLanguage);