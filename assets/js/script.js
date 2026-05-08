// Seletor da Seção About (section)
const about = document.querySelector('#about');

// Seletor da Seção Projects (Carrossel)
const swiperWrapper = document.querySelector('.swiper-wrapper');

// Seletor do Formulário
const formulario = document.querySelector('#formulario');

// Regex de validação do e-mail
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Função para buscar os dados do Perfil do GitHub
async function getAboutGithub() {
    try {
        const resposta = await fetch('https://api.github.com/users/eduarda0aleixo');
        const perfil = await resposta.json();

        // Preencher TODO o conteúdo da seção about
        about.innerHTML = `
            <div class="about-image">
                <img src="${perfil.avatar_url}" alt="Foto de ${perfil.name || 'Eduarda Aleixo'}">
            </div>
            
            <div class="about-content">
                <h2>Sobre mim</h2>
                <p>
                    Olá, eu sou a ${perfil.name || 'Eduarda Aleixo'}! Sou estudante de 
                    <strong>Desenvolvimento de Software Multiplataforma</strong> 
                    pela <strong>FATEC Cotia</strong> e participante do programa 
                    <strong>Generation Brasil</strong>. Tenho foco em desenvolvimento 
                    Full Stack e busco criar soluções completas — do front-end bonito 
                    e funcional ao back-end robusto e eficiente.
                </p>
                
                <p>
                    ${perfil.bio || 'Em busca da minha primeira oportunidade como Desenvolvedora Full Stack Júnior.'}
                </p>
                
                <div class="about-buttons-data">
                    <div class="buttons-container">
                        <a href="${perfil.html_url}" target="_blank" class="botao">Ver GitHub</a>
                        <!-- LINK DO CURRÍCULO ATUALIZADO AQUI 👇 -->
                        <a href="https://drive.google.com/file/d/1Erj1CB4vTXgVYTe8fbJJvVwqWIavgeO6/view?usp=sharing" target="_blank" class="botao-outline">Currículo</a>
                    </div>
                    
                    <div class="data-container">
                        <div class="data-item">
                            <span class="data-number">${perfil.followers}</span>
                            <span class="data-label">Seguidores</span>
                        </div>
                        <div class="data-item">
                            <span class="data-number">${perfil.public_repos}</span>
                            <span class="data-label">Repositórios</span>
                        </div>
                    </div>
                </div>

                <!-- Habilidades, Educação e Idiomas -->
                <div class="about-more-info">
                    <div class="info-block">
                        <h3><i class="fa-solid fa-code"></i> Habilidades técnicas</h3>
                        <ul class="info-list">
                            <li>HTML5, CSS3</li>
                            <li>JavaScript, TypeScript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>MySQL, MongoDB</li>
                            <li>Node.js, NestJs</li>
                            <li>Git, GitHub, VS Code</li>
                            <li>Lógica de Programação, POO</li>
                        </ul>
                    </div>

                    <div class="info-block">
                        <h3><i class="fa-solid fa-graduation-cap"></i> Educação</h3>
                        <ul class="info-list">
                            <li>
                                <strong>Desenvolvimento de Software Multiplataforma</strong> — FATEC Cotia
                                <br><small>Fev/2025 – Dez/2027</small>
                            </li>
                            <li>
                                <strong>Bootcamp Desenvolvedora Full Stack</strong> — Generation Brasil
                                <br><small>Fev/2026 – Mai/2026</small>
                            </li>
                        </ul>
                    </div>

                    <div class="info-block">
                        <h3><i class="fa-solid fa-language"></i> Idiomas</h3>
                        <ul class="info-list">
                            <li>Português — Nativo</li>
                            <li>Inglês — Intermediário</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        // Adicionar uma animação suave
        about.style.opacity = '0';
        about.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            about.style.opacity = '1';
        }, 100);
        
    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
        // Em caso de erro, mostrar versão estática
        about.innerHTML = `
            <div class="about-image">
                <img src="./assets/img/foto_dev_woman.svg" alt="Foto de Eduarda Aleixo">
            </div>
            
            <div class="about-content">
                <h2>Sobre mim</h2>
                <p>
                    Olá, eu sou a Eduarda Aleixo! Sou estudante de 
                    <strong>Desenvolvimento de Software Multiplataforma</strong> 
                    pela <strong>FATEC Cotia</strong> e participante do programa 
                    <strong>Generation Brasil</strong>. Tenho foco em desenvolvimento 
                    Full Stack e busco criar soluções completas — do front-end bonito 
                    e funcional ao back-end robusto e eficiente.
                </p>
                
                <p>
                    Em busca da minha primeira oportunidade como Desenvolvedora Full Stack Júnior.
                </p>
                
                <div class="about-buttons-data">
                    <div class="buttons-container">
                        <a href="https://github.com/eduarda0aleixo" target="_blank" class="botao">Ver GitHub</a>
                        <!-- LINK DO CURRÍCULO ATUALIZADO AQUI TAMBÉM 👇 -->
                        <a href="https://drive.google.com/file/d/1Erj1CB4vTXgVYTe8fbJJvVwqWIavgeO6/view?usp=sharing" target="_blank" class="botao-outline">Currículo</a>
                    </div>
                    
                    <div class="data-container">
                        <div class="data-item">
                            <span class="data-number">100</span>
                            <span class="data-label">Seguidores</span>
                        </div>
                        <div class="data-item">
                            <span class="data-number">10</span>
                            <span class="data-label">Repositórios</span>
                        </div>
                    </div>
                </div>

                <div class="about-more-info">
                    <div class="info-block">
                        <h3><i class="fa-solid fa-code"></i> Habilidades técnicas</h3>
                        <ul class="info-list">
                            <li>HTML5, CSS3</li>
                            <li>JavaScript, TypeScript</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>MySQL, MongoDB</li>
                            <li>Node.js, NestJs</li>
                            <li>Git, GitHub, VS Code</li>
                            <li>Lógica de Programação, POO</li>
                        </ul>
                    </div>

                    <div class="info-block">
                        <h3><i class="fa-solid fa-graduation-cap"></i> Educação</h3>
                        <ul class="info-list">
                            <li>
                                <strong>Desenvolvimento de Software Multiplataforma</strong> — FATEC Cotia
                                <br><small>Fev/2025 – Dez/2027</small>
                            </li>
                            <li>
                                <strong>Bootcamp Desenvolvedora Full Stack</strong> — Generation Brasil
                                <br><small>Fev/2026 – Mai/2026</small>
                            </li>
                        </ul>
                    </div>

                    <div class="info-block">
                        <h3><i class="fa-solid fa-language"></i> Idiomas</h3>
                        <ul class="info-list">
                            <li>Português — Nativo</li>
                            <li>Inglês — Intermediário</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }
}

// Função para buscar e mostrar os projetos do GitHub
async function getProjectsGithub() {
    try {
        // ALTERADO: Substitua pelo SEU usuário do GitHub
        const resposta = await fetch('https://api.github.com/users/eduarda0aleixo/repos?sort=updated&per_page=6');
        const repositorios = await resposta.json();

        // Selecionar o container do Swiper
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        
        if (!swiperWrapper) {
            console.error('Elemento .swiper-wrapper não encontrado');
            return;
        }

        // Limpar conteúdo existente
        swiperWrapper.innerHTML = '';

        // Objeto contendo a lista de logos das linguagens
        const linguagens = {
            'JavaScript': 'javascript',
            'TypeScript': 'typescript',
            'Python': 'python',
            'Java': 'java',
            'HTML': 'html',
            'CSS': 'css',
            'PHP': 'php',
            'C#': 'csharp',
            'Go': 'go',
            'Kotlin': 'kotlin',
            'Swift': 'swift',
            'C++': 'cpp',
            'Ruby': 'ruby',
            'GitHub': 'github'
        };

        // Percorrer cada repositório
        repositorios.forEach(repositorio => {
            // Seleciona o nome da Linguagem padrão do repositório
            const linguagem = repositorio.language || 'GitHub';

            // Seleciona o logo da Linguagem
            const logo = linguagens[linguagem] || 'github';

            // Constrói a URL do logo
            const urlLogo = `./assets/icons/languages/${logo}.svg`;

            // Formata o nome do repositório
            const nomeFormatado = repositorio.name
                .replace(/[-_]/g, ' ')
                .replace(/[^a-zA-Z0-9\s]/g, '')
                .toUpperCase();

            // Função para truncar texto da descrição
            const truncar = (texto, limite) => {
                return texto.length > limite ? texto.substring(0, limite) + '...' : texto;
            };

            // Define a descrição do Repositório
            const descricao = repositorio.description 
                ? truncar(repositorio.description, 100)
                : 'Projeto desenvolvido no GitHub';

            // Criar tags das topics (se houver)
            let tagsHtml = '';
            if (repositorio.topics && repositorio.topics.length > 0) {
                const topicsToShow = repositorio.topics.slice(0, 3);
                tagsHtml = topicsToShow.map(topic => 
                    `<span class="tag">${topic}</span>`
                ).join('');
            } else {
                tagsHtml = `<span class="tag">${linguagem}</span>`;
            }

            // Cria o Botão Deploy (se tiver homepage)
            const botaoDeploy = repositorio.homepage 
                ? `<a href="${repositorio.homepage}" target="_blank" class="botao-outline botao-sm">Deploy</a>`
                : '';

            // Criar o slide do projeto
            const slide = document.createElement('div');
            slide.className = 'swiper-slide';
            
            slide.innerHTML = `
                <article class="project-card">
                    <figure class="project-image">
                        <img src="${urlLogo}" 
                             alt="Ícone ${linguagem}" 
                             onerror="this.onerror=null; this.src='./assets/icons/languages/github.svg';">
                    </figure>
                    
                    <div class="project-content">
                        <h3>${nomeFormatado}</h3>
                        <p>${descricao}</p>
                    </div>
                    
                    <div class="project-tags">
                        ${tagsHtml}
                    </div>
                    
                    <div class="project-buttons">
                        <a href="${repositorio.html_url}" target="_blank" class="botao botao-sm">
                            GitHub
                        </a>
                        ${botaoDeploy}
                    </div>
                </article>
            `;
            
            swiperWrapper.appendChild(slide);
        });

        // Se não houver repositórios, mostrar mensagem
        if (repositorios.length === 0) {
            swiperWrapper.innerHTML = `
                <div class="swiper-slide">
                    <article class="project-card">
                        <div class="project-content">
                            <h3>Nenhum projeto encontrado</h3>
                            <p>Em breve adicionarei meus projetos aqui!</p>
                        </div>
                    </article>
                </div>
            `;
        }

        // Reinicializar o Swiper com os novos projetos
        reinitSwiper();
        
    } catch (error) {
        console.error('Erro ao buscar projetos do GitHub:', error);
        
        // Mostrar mensagem de erro amigável
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        if (swiperWrapper) {
            swiperWrapper.innerHTML = `
                <div class="swiper-slide">
                    <article class="project-card">
                        <div class="project-content">
                            <h3>Erro ao carregar projetos</h3>
                            <p>Não foi possível carregar meus repositórios do GitHub.</p>
                            <p>Por favor, tente novamente mais tarde.</p>
                        </div>
                        <div class="project-buttons">
                            <a href="https://github.com/eduarda0aleixo" target="_blank" class="botao botao-sm">
                                Ver meu GitHub
                            </a>
                        </div>
                    </article>
                </div>
            `;
        }
    }
}

// Função de inicialização do Carrossel - Swiper (versão do cookbook)
function iniciarSwiper() {
    // Verificar se o Swiper existe
    if (typeof Swiper === 'undefined') {
        console.error('Swiper não está disponível');
        return;
    }
    
    new Swiper('.project-swiper', {  // Atenção: Use .project-swiper (sem o 's')
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 24,
        centeredSlides: false,
        loop: true,
        watchOverflow: true,

        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 40,
                centeredSlides: false
            },
            769: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 40,
                centeredSlides: false
            },
            1025: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 54,
                centeredSlides: false
            }
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        autoplay: {
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },

        grabCursor: true,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
    });
}

// Função para reinicializar o Swiper
function reinitSwiper() {
    // Destruir o Swiper existente se houver
    if (window.projectsSwiper) {
        window.projectsSwiper.destroy(true, true);
    }
    
    // Criar novo Swiper
    window.projectsSwiper = new Swiper('.project-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: { // Quando a tela for >= 640px
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: { // Quando a tela for >= 1024px
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
}

// Função de Validação do Formulário
if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Limpar mensagens de erro anteriores
        document.querySelectorAll('form span').forEach(span => span.innerHTML = '');
        
        // Remover classes de erro dos campos
        document.querySelectorAll('form input, form textarea').forEach(campo => {
            campo.classList.remove('error');
        });
        
        let isValid = true;
        
        // Validação do Nome
        const nome = document.querySelector('#nome');
        const erroNome = document.querySelector('#erro-nome');
        
        if (!nome.value.trim() || nome.value.trim().length < 3) {
            erroNome.innerHTML = 'O Nome deve ter no mínimo 3 caracteres.';
            nome.classList.add('error');
            isValid = false;
        }
        
        // Validação do E-mail
        const email = document.querySelector('#email');
        const erroEmail = document.querySelector('#erro-email');
        
        if (!email.value.trim() || !email.value.trim().match(emailRegex)) {
            erroEmail.innerHTML = 'Digite um e-mail válido. Ex: nome@email.com';
            email.classList.add('error');
            isValid = false;
        }
        
        // Validação do Assunto
        const assunto = document.querySelector('#assunto');
        const erroAssunto = document.querySelector('#erro-assunto');
        
        if (!assunto.value.trim() || assunto.value.trim().length < 5) {
            erroAssunto.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres.';
            assunto.classList.add('error');
            isValid = false;
        }
        
        // Validação da Mensagem
        const mensagem = document.querySelector('#mensagem');
        const erroMensagem = document.querySelector('#erro-mensagem');
        
        if (!mensagem.value.trim() || mensagem.value.trim().length === 0) {
            erroMensagem.innerHTML = 'A mensagem não pode ser vazia.';
            mensagem.classList.add('error');
            isValid = false;
        }
        
        // Se houver erro, focar no primeiro campo com erro
        if (!isValid) {
            const primeiroCampoComErro = document.querySelector('form input.error, form textarea.error');
            if (primeiroCampoComErro) {
                primeiroCampoComErro.focus();
                primeiroCampoComErro.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        
        // Se tudo estiver válido, enviar o formulário
        if (isValid) {
            const submitButton = formulario.querySelector('.botao[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            formulario.submit();
        }
    });
}

// Atualizar a função de carregamento para incluir os projetos
async function loadAllGitHubData() {
    await getAboutGithub();
    await getProjectsGithub();
}

// Evento de carregamento
document.addEventListener('DOMContentLoaded', function() {
    loadAllGitHubData();
});