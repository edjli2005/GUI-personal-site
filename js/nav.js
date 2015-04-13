var source = $('#nav').html();
var template = Handlebars.compile(source);

var context = {
    links: [
        { link: "index.html", tag: "Main" },
        { link: "about.html", tag: "About" },
        { link: "contact.html", tag: "Contact"},
        { link: "login.html", tag: "Login" }
    ]
};

var output = template(context);
$('#template-begin').html(output);
