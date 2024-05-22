<<<<<<< HEAD
var client = null;

function connect(url, callback){
    if (client == null){
        client = new MongoClient(url);

        client.connect((erreur)=> {

            if(erreur){
                client = null;
                callback(erreur);
            }else{
                callback();
            }
        });
    }else{
        callback();
    };
    function bd(){
        return new Db(client, "bddjdr");
    };
    function closeConnection(){
        if (client){
            client.close();
            client = null;
    };
};

};

=======
var client = null;

function connect(url, callback){
    if (client == null){
        client = new MongoClient(url);

        client.connect((erreur)=> {

            if(erreur){
                client = null;
                callback(erreur);
            }else{
                callback();
            }
        });
    }else{
        callback();
    };
    function bd(){
        return new Db(client, "bddjdr");
    };
    function closeConnection(){
        if (client){
            client.close();
            client = null;
    };
};

};

>>>>>>> e87d2061a4521c03d4dd8d318fd8fb257754b307
module.exports = {connect, bd, closeConnection}