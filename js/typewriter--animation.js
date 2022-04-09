var TxtType = function(el, rotateText, period) {
    this.rotateText = rotateText;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.rotateText.length;
    var fullTxt = this.rotateText[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="typewrite">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var rotateText = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (rotateText) {
            new TxtType(elements[i], JSON.parse(rotateText), period);
        }
    }
};
// INJECT CSS
/*  var css = document.createElement("style");
 css.type = "text/css";
 css.innerHTML = ".typewrite {z-index:-100;}";
 document.body.appendChild(css); */