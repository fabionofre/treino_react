var axios = require('axios');

var GitHubUser = {
    getByUserName: function(username){
        return axios.get('https://api.github.com/users/' + username);
    },

    getReposByUsername: function(username){
        return axios.get('https://api.github.com/users/' + username + '/repos');
    }
};

module.exports = GitHubUser;