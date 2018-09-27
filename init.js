(function($) {

    var cursor = $('.cursor'),
        typerTimer = typerProps.typerTimer,
        typerString,
        timer = 0;

    var visibleY = function(el){
        var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height,
            el = el.parentNode;
        do {
            rect = el.getBoundingClientRect();
            if (top <= rect.bottom === false) return false;
            // Check if the element is out of view due to a container scrolling
            if ((top + height) <= rect.top) return false
            el = el.parentNode;
        } while (el != document.body);
        // Check its within the document viewport
        return top <= document.documentElement.clientHeight;
    };

    var doBack = function () {
        backString.split('\n').forEach(function (line) {
            console.log("line: " + line)
            $('.inside').append("<p data-code-string='");
            line.split('').forEach(function (char) {
                console.log('<p data-code-string=' + char + '></p>')
                setTimeout(function() {
                    $('.inside').append(char);
                }, timer += Math.floor(Math.random() * typerTimer));
            });
        });
    };

    var doTyper = function(string) {
        typerString.split('').forEach(function (char) {
            setTimeout(function() {
                setTyper(char)
            }, timer += Math.floor(Math.random() * typerTimer));
        });
    };

    var setTyper = function(char) {
        // TODO: remove the cursor at the end
        if (char === "~"){
            $('.js-text-typing').text(function(i,v) {
                return v.slice(0,-1);
            });
        } else {
            $('.js-text-typing').append(char);
        }
    };

    doBack();

})(jQuery);