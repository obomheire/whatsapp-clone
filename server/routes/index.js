/**
 * Created by AyushK on 26/07/21.
 */
// import * as Controller from "../app/controllers";
// import * as Validation from "../utility/validator";

const applyRoutes = (app) => {

    app.get('/', (req, res) => res.send(`API running fine`));

    app.post('/user', (req, res) => res.send(`create-user`));

    app.post('/login',  (req, res) => res.send(`login`));

    app.post('/channel',  (req, res) => res.send(`channel`));

    app.get('/search-user',  (req, res) => res.send(`search-user`));

    app.get('/channel-list',  (req, res) => res.send(`channel-list`));

    app.post('/message',  (req, res) => res.send(`message`)); 
};

export default applyRoutes
/*
const applyRoutes = (app) => {

    app.get('/', (req, res) => res.send(`API running fine`));

    app.post('/user', Validation.validateCreateUser,  Controller.createUser);

    app.post('/login', Validation.validateLogin, Controller.loginUser);

    app.post('/channel', Validation.validateCreateChannel, Controller.createChannel);

    app.get('/channel-list', Validation.validateGetChannelList, Controller.getChannelList);

    app.get('/search-user', Validation.validateSearchUser, Controller.searchUser);

    app.post('/message', Validation.validateAddMessage, Controller.sendMessage);
};
*/