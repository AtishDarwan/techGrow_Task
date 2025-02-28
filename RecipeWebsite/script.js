
    document.addEventListener("DOMContentLoaded", function () {
        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {
            let startValue = 0;
            let endValue = parseInt(counter.getAttribute("data-count"));
            let duration = Math.floor(2000 / endValue); // Adjust speed

            let countInterval = setInterval(() => {
                startValue += 1;
                counter.textContent = startValue;

                if (startValue >= endValue) {
                    clearInterval(countInterval);
                }
            }, duration);
        });
    });

