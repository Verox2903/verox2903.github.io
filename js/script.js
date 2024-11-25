document.addEventListener('DOMContentLoaded', () => {
    console.log('Strona załadowana poprawnie!');
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('opinion-form');
    const opinionList = document.querySelector('#opinions-list ul');
    
    // Ładowanie opinii z localStorage
    const loadOpinions = () => {
        const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
        opinionList.innerHTML = '';
        opinions.forEach((opinion, index) => {
            const li = document.createElement('li');
            li.textContent = `${opinion.name}: ${opinion.text}`;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Usuń';
            deleteBtn.addEventListener('click', () => {
                opinions.splice(index, 1);
                localStorage.setItem('opinions', JSON.stringify(opinions));
                loadOpinions();
            });
            li.appendChild(deleteBtn);
            opinionList.appendChild(li);
        });
    };

    // Dodawanie nowej opinii
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const opinion = document.getElementById('opinion').value;

        const opinions = JSON.parse(localStorage.getItem('opinions')) || [];
        opinions.push({ name, text: opinion });
        localStorage.setItem('opinions', JSON.stringify(opinions));

        form.reset();
        loadOpinions();
    });

    loadOpinions();
});
