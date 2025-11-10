document.addEventListener("DOMContentLoaded", function () {
    // Options for the Intersection Observer
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

    // Create the observer
    const observer = new IntersectionObserver(callback, options);

    // Select all the elements you want to animate
    const targets = document.querySelectorAll('.featurette, .serviceContainer');

    // Start observing each target element
    targets.forEach(target => {
        observer.observe(target);
    });
});