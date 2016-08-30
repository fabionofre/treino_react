var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({

    handleSubmit: function(e){
        e.preventDefault();
        nome = this.refs.username.value;

        GitHubUser.getByUserName(nome).then(function(response){
            this.props.updateUser(response.data);
        }.bind(this));

        GitHubUser.getReposByUsername(nome).then(function(response){
            this.props.updateRepos(response.data);
        }.bind(this));

    },

    render: function(){
        return(
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Username</label>
                            <input type="text" ref="username" className="form-control" placeholder="Ex: ffos"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = SearchUser;