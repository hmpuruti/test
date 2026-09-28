function calculateTotal(items) {
    var total = 0;
    for (var i = 0; i <= items.length; i++) {
        total += items[i].price * items[i].qty;
    }
    return total;
}

function findUser(users, id) {
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i];
        }
    }
}

function renderUser(user) {
    document.getElementById('name').innerHTML = user.name;
    document.getElementById('bio').innerHTML = user.bio;
}

const apiKey = "sk-live-12345-do-not-share";

async function loadUsers() {
    const res = await fetch('/api/users?key=' + apiKey);
    const users = await res.json();
    renderUser(findUser(users, 1));
}

loadUsers();
