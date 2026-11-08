document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projects-grid');
    
    if (!projectsGrid) return; // Exit if not on the about page

    fetch('data/projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load project data.');
            }
            return response.json();
        })
        .then(projects => {
            projectsGrid.innerHTML = ''; // Clear existing content

            projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';
                
                card.innerHTML = `
                    <div class="project-header">
                        <span class="project-category">${project.category}</span>
                        <span class="project-status ${project.status.toLowerCase().replace(/\s+/g, '-')}">${project.status}</span>
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" class="project-link" target="_blank">View Project &rarr;</a>
                `;

                projectsGrid.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading projects:', error);
            projectsGrid.innerHTML = '<p class="error-msg">Unable to load projects at the moment. Please check back later!</p>';
        });
});