var source = $('#global').html();
var template = Handlebars.compile(source);

// about page global
var about_context = {
    header: "About this Project",
    footer: "2015 Edward Li. All rights reserved."
};

var output = template(about_context);
$('#template-about-begin').html(output);

// contact page global
var contact_context = {
    header: "Meet the Developer",
    footer: "2015 Edward Li. All rights reserved."
};

var output = template(contact_context);
$('#template-contact-begin').html(output);