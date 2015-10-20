(function(document){

    scriptLoader.onScriptLoaded('jquery.min.js', function(e){

        var pElement = document.createElement('p');

        pElement.textContent = 'Jquery is ingeladen.';

        document.querySelector('body').appendChild(pElement);
    });

})(document);