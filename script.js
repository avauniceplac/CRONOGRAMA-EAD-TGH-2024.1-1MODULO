document.addEventListener('DOMContentLoaded', function () {
    var dateElements = document.querySelectorAll('.calendar-item .date');

    dateElements.forEach(function (dateElement) {
        var description = dateElement.nextElementSibling; // Assume que a descrição é o próximo elemento irmão

        dateElement.addEventListener('click', function () {
            // Alternar a visibilidade da descrição do calendário
            if (description.style.display === 'block' || description.style.display === '') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        });
    });
});