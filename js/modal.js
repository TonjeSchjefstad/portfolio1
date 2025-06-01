const projectData = {
    'hotviewlabs': {
        title: 'HOTVIEWLABS',
        projectType: 'PROJECT EXAM 1',
        image: 'assets/hotviewlabs.webp',
        description: 'A modern, responsive tech blog platform where tech leaders across the world can read about up-to-date insights about technology trends and innovations. This is an exam project thats designed to put everything Ive learned during FED1 into practise.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveDemo: 'https://hotviewlabs-tonjeschjefstad.netlify.app/',
        github: 'https://github.com/TonjeSchjefstad/FED1-PE1-Tonje-Schjefstad',
       
    },

    'community-science-museum': {
        title: 'COMMUNITY SCIENCE MUSEUM',
        projectType: 'SEMESTER PROJECT 1',
        image: 'assets/csm.webp',
        description: 'An interactive and educational website designed to spark curiosity and wonder in young minds. Build specificallt for primary and middle school children and families, this platform encourages museum visits through captivationg design and accessible content.',
        technologies: ['HTML', 'CSS'],
        liveDemo: 'https://tonjeschjefstad.github.io/SemesterProject1-Community-Science-Museum/',
        github: 'https://github.com/TonjeSchjefstad/SemesterProject1-Community-Science-Museum',
    },

    'rainydays': {
        title: 'RAINY DAYS',
        projectType: 'CROSS COURSE PROJECT',
        image: 'assets/rainydays.webp',
        description: 'An e-commerce platform specializing in premium rain jackets for outdoor enthusiasts. The webpage is built as a cross-course project incorporating design principles, responsive layout and interactive JavaScript functionality.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveDemo: 'https://tonjeschjefstad.github.io/cross-course-rainydays/',
        github: 'https://github.com/TonjeSchjefstad/cross-course-rainydays',
    },
    
};

const modal = document.getElementById('projectModal');
const closeButton = document.querySelector('.close');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.dataset.project;
        openModal(projectId);
    });
});

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalProjectType').textContent = project.projectType;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalLiveDemo').href = project.liveDemo;
    document.getElementById('modalGithub').href = project.github;

    const techContainer = document.getElementById('modalTechTags');
    techContainer.innerHTML = ''; 
    project.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'modal-tech-tag';
        techTag.textContent = tech;
        techContainer.appendChild(techTag);
    });

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}
