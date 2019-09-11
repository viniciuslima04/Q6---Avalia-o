const getFotoGithub = function (username) {
    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();

     ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let foto = JSON.parse(this.responseText);
            username.querySelector("github-avatar").innerText += foto.articles[0].title;
        }
    };

    const teste ='https://api.github.com/users/' + username;

    ajax.open('GET', url, false);
    ajax.send();

    var data = ajax.responseText;

    console.log(username);
};