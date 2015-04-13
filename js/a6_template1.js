var source = $('#a6_template1').html();
var template = Handlebars.compile(source);

var context = {
    subtitle: "Voice Actors for Characters in Spongebob Squarepants",
    characters: [
        { firstName: "Spongebob", lastName: "Squarepants", voicedBy: "Tom Kenny" },
        { firstName: "Patrick", lastName: "Star", voicedBy: "Bill Fagerbakke" },
        { firstName: "Squidward", lastName: "Tentacles", voicedBy: "Rodger Bumpass" },
        { firstName: "Eugene", lastName: "Krabs", voicedBy: "Clancy Brown" },
        { firstName: "Sandy", lastName: "Cheeks", voicedBy: "Carolyn Lawrence" },
        { firstName: "Gary", lastName: "the Snail", voicedBy: "Tom Kenny" },
    ]
};

var output = template(context);
$('#template-begin').html(output);
