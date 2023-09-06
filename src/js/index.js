document.addEventListener("DOMContentLoaded", () => {
    function githubUser(callback) {
        const apiUrl = `https://githubresponse.doubleangels.workers.dev`;

        fetch(apiUrl)
            .then(response => response.text())
            .then(data => callback(data))
            .catch(error => console.log(error));
        }

        githubUser(function(data) {
        const repos = data;
        document.getElementById("publicprojects").textContent = repos;
    });
});