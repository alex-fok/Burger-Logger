const addBurger = document.querySelector(".add-burger");

addBurger.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("bName").value.trim();
    if (!name) return;
    fetch("/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    }).then(() => {
        location.reload();
    })
})

const devourBurgerList = document.querySelectorAll(".change-devour");

devourBurgerList.forEach(el => {
    el.addEventListener("click", (event) => {
        const data = {id: event.target.dataset.id};
        fetch("/devour", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(() => {
            location.reload();
        });
    });
})