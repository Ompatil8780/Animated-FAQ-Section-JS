const accordings = document.querySelectorAll('.according');

accordings.forEach(according => {
    const icon = according.querySelector('.icon');
    const answer = according.querySelector('.answer');

    according.addEventListener('click', () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active');  // Fix: Add 'active' class here
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
