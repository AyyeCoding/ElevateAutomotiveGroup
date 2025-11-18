document.addEventListener("DOMContentLoaded", function () {

    // 1. Select elements FIRST
    const targets = document.querySelectorAll('.featurette, .serviceContainer');

    // 2. IMMEDIATE HIDE: Apply the hiding class via JS
    // If script fails, this never runs, and CSS keeps them visible.
    targets.forEach(target => {
        target.classList.add('js-hidden');
    });

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.12 
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 3. SWAP CLASSES: Remove hidden, add visible
                entry.target.classList.remove('js-hidden');
                entry.target.classList.add('visible');

                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    targets.forEach(target => {
        observer.observe(target);
    });

    // --- Map Logic (Unchanged) ---
    var mapLink = document.getElementById("map-link");
    if (mapLink) {
        // Check if the user is on an Apple mobile device
        var isIOS = /iPad|iPhone|Macintosh/.test(navigator.userAgent);
        if (isIOS) {
            mapLink.href = "http://maps.apple.com/?q=11036+Rockcastle+Dr,+Colorado+Springs,+CO+80925";
        } else {
            mapLink.href = "https://maps.app.goo.gl/tajKUgeH9gJGsEUn7";
        }
    }
});