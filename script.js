document.addEventListener("DOMContentLoaded", function () {
    const options = {
        root: null, // uses the viewport as the bounding box
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    // The callback function that runs when an element is observed
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting the viewport
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the animation
                entry.target.classList.add('visible');

                // Stop observing the element so the animation doesn't re-trigger
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    // Select all the elements you want to animate
    const targets = document.querySelectorAll('.featurette, .serviceContainer');

    targets.forEach(target => {
        observer.observe(target);
    });

    // Use Apple Maps for Apple ecosystem users, and Google Maps for everyone else.
    var mapLink = document.getElementById("map-link");
    if (mapLink) {
        // Check if the user is on an Apple mobile device
        var isIOS = /iPad|iPhone|Macintosh/.test(navigator.userAgent);
        if (isIOS) {
            // If iOS, set the link to use Apple Maps
            mapLink.href = "http://maps.apple.com/?q=11036+Rockcastle+Dr,+Colorado+Springs,+CO+80925";
        } else {
            // For all other devices, set the link to use Google Maps
            mapLink.href = "https://maps.app.goo.gl/tajKUgeH9gJGsEUn7";
        }
    }
});