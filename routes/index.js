var express = require('express');
var router = express.Router();
var username = "";
router.get('/', function(req, res, next) {
    res.render('login', { layout:false });
});

/* GET home page. */
router.post('/sys', function(req, res, next) {
    if(req.body.username)
        username = req.body.username;

    if(username == "guieloi"){
        req.app.locals.template = '<title>Galo partners</title> <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"> <meta name="description" content="Atletico Mineiro is the best team in the world"> <meta property="og:url" content="http://atletico.com.br"> <meta property="og:type" content="website"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:site" content="@galomg"> <meta name="twitter:creator" content="@galomg"> <link rel="icon" type="image/png" href="http://43urj51zk8fr4328pu407mmp.wpengine.netdna-cdn.com/wp-content/themes/wp-galo/assets/favicon/favicon-32x32.png" sizes="32x32"> <link rel="icon" type="image/png" href="http://43urj51zk8fr4328pu407mmp.wpengine.netdna-cdn.com/wp-content/themes/wp-galo/assets/favicon/favicon-16x16.png"> <link rel="stylesheet" href="stylesheets/vendor.min.css">  <link rel="stylesheet" href="stylesheets/elephant.min.css"> <link rel="stylesheet" href="stylesheets/application.min.css">';
        req.app.locals.userPic = "img/users/gui.jpg";
        req.app.locals.username = "Guilherme Eloi";
        req.app.locals.formatedUsername = "gui.eloi";
        req.app.locals.logo = '<img class="navbar-brand-logo" src="img/icons/mineiro.png" alt="Galo">';
        req.app.locals.footer = '<small class="copyright">2016 &copy; Galo Mineiro System <a href="http://leadchat.com/"></a></small>';
        res.render('index', { title: 'Express' });
    }else if(username == "lexchat"){
        req.app.locals.template = '<title>LeadChat partners</title> <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"> <meta name="description" content="This is an plataform that allows ours partners to see their results"> <meta property="og:url" content="http://leadchat.com"> <meta property="og:type" content="website"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:site" content="@leadchat"> <meta name="twitter:creator" content="@leadchat"> <link rel="icon" type="image/png" href="http://www.leadchat.com/wp-content/uploads/2014/05/favicon.png" sizes="32x32"> <link rel="icon" type="image/png" href="http://www.leadchat.com/wp-content/uploads/2014/05/favicon.png" sizes="16x16"> <meta name="theme-color" content="#ffffff"> <link rel="stylesheet" href="stylesheets/vendor-green.min.css"> <link rel="stylesheet" href="stylesheets/elephant-green.min.css"> <link rel="stylesheet" href="stylesheets/application-green.min.css">';
        req.app.locals.userPic = "img/users/lex.jpg";
        req.app.locals.username = "Lex Stanley";
        req.app.locals.formatedUsername = "lex.chat";
        req.app.locals.logo = '<img class="navbar-brand-logo" src="https://chatsystem.io/new/images/wblogo.png" alt="Leadchat">';
        req.app.locals.footer = '<small class="copyright">2016 &copy; Leadchat System <a href="http://leadchat.com/"></a></small>';
        res.render('index', { title: 'Express' });
    }else{
        res.render('login', { layout:false });
    }
});

/* GET home page. */
router.get('/sys', function(req, res, next) {

    if(username == "guieloi"){
        req.app.locals.template = '<title>Galo partners</title> <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"> <meta name="description" content="Atletico Mineiro is the best team in the world"> <meta property="og:url" content="http://atletico.com.br"> <meta property="og:type" content="website"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:site" content="@galomg"> <meta name="twitter:creator" content="@galomg"> <link rel="icon" type="image/png" href="http://43urj51zk8fr4328pu407mmp.wpengine.netdna-cdn.com/wp-content/themes/wp-galo/assets/favicon/favicon-32x32.png" sizes="32x32"> <link rel="icon" type="image/png" href="http://43urj51zk8fr4328pu407mmp.wpengine.netdna-cdn.com/wp-content/themes/wp-galo/assets/favicon/favicon-16x16.png"> <link rel="stylesheet" href="stylesheets/vendor.min.css">  <link rel="stylesheet" href="stylesheets/elephant.min.css"> <link rel="stylesheet" href="stylesheets/application.min.css">';
        req.app.locals.userPic = "img/users/gui.jpg";
        req.app.locals.username = "Guilherme Eloi";
        req.app.locals.formatedUsername = "gui.eloi";
        req.app.locals.logo = '<img class="navbar-brand-logo" src="img/icons/mineiro.png" alt="Galo">';
        req.app.locals.footer = '<small class="copyright">2016 &copy; Galo Mineiro System <a href="http://leadchat.com/"></a></small>';
        res.render('index', { title: 'Express' });
    }else if(username == "lexchat"){
        req.app.locals.template = '<title>LeadChat partners</title> <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"> <meta name="description" content="This is an plataform that allows ours partners to see their results"> <meta property="og:url" content="http://leadchat.com"> <meta property="og:type" content="website"> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:site" content="@leadchat"> <meta name="twitter:creator" content="@leadchat"> <link rel="icon" type="image/png" href="http://www.leadchat.com/wp-content/uploads/2014/05/favicon.png" sizes="32x32"> <link rel="icon" type="image/png" href="http://www.leadchat.com/wp-content/uploads/2014/05/favicon.png" sizes="16x16"> <meta name="theme-color" content="#ffffff"> <link rel="stylesheet" href="stylesheets/vendor-green.min.css"> <link rel="stylesheet" href="stylesheets/elephant-green.min.css"> <link rel="stylesheet" href="stylesheets/application-green.min.css">';
        req.app.locals.userPic = "img/users/lex.jpg";
        req.app.locals.username = "Lex Stanley";
        req.app.locals.formatedUsername = "lex.chat";
        req.app.locals.logo = '<img class="navbar-brand-logo" src="https://chatsystem.io/new/images/wblogo.png" alt="Leadchat">';
        req.app.locals.footer = '<small class="copyright">2016 &copy; Leadchat System <a href="http://leadchat.com/"></a></small>';
        res.render('index', { title: 'Express' });
    }else{
        res.render('login', { layout:false });
    }
});


module.exports = router;
