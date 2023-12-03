const fragment = new URLSearchParams(window.location.hash.slice(1));
const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
let secretsUser = `${tokenType} ${accessToken}`;


fetch('https://discord.com/api/users/@me', {
    headers: {
        authorization: `${secretsUser}`
    }
})
    .then((res) => res.json())
    .then(response => {
        const { username, avatar, id } = response;
        const dashboardButton = document.getElementById(`username`)
        const cashButton = document.getElementById("cash")
        if (username === undefined) return;
        if (dashboardButton) {
            dashboardButton.innerText = `${username}`;
            cashButton.innerText = `Portefeuille : ${Math.floor(Math.random() * 210)}€`


        }
    });
