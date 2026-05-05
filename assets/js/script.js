// Seletor da Seção About (section)
const about = document.querySelector('#about');

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

// Executar a função quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    getAboutGithub();
});