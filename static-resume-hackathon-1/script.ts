// script.ts

(() => {
    // Function to create toggle buttons for each section
    function createToggleButton(section: HTMLElement, buttonText: string) {
        const toggleButton = document.createElement('button');
        toggleButton.innerText = buttonText;
        toggleButton.className = 'toggle-button'; // Add a class for styling

        toggleButton.addEventListener('click', () => {
            section.style.display = 
                section.style.display === 'none' ? 'block' : 'none';
        });

        return toggleButton;
    }

    // Query the sections
    const summarySection = document.querySelector('.summary') as HTMLElement;
    const experienceSection = document.querySelector('.experience') as HTMLElement;
    const projectsSection = document.querySelector('.projects') as HTMLElement;

    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container'; // Add a class for styling

    // Create buttons for each section
    if (summarySection) {
        const summaryButton = createToggleButton(summarySection, 'Toggle Summary');
        buttonContainer.appendChild(summaryButton);
    }

    if (experienceSection) {
        const experienceButton = createToggleButton(experienceSection, 'Toggle Experience');
        buttonContainer.appendChild(experienceButton);
    }

    if (projectsSection) {
        const projectsButton = createToggleButton(projectsSection, 'Toggle Projects');
        buttonContainer.appendChild(projectsButton);
    }

    // Insert the button container before the first section
    if (summarySection) {
        summarySection.parentNode?.insertBefore(buttonContainer, summarySection);
    }
})();
