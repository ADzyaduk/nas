export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('reveal', {
        mounted(el, binding) {
            // Set initial state before animation starts
            el.style.opacity = '0';

            const observer = new IntersectionObserver((entries) => {
                if (entries[0] && entries[0].isIntersecting) {
                    // If there's a delay passed to the directive (e.g., v-reveal="{ delay: 200 }")
                    if (binding.value && binding.value.delay) {
                        el.style.animationDelay = `${binding.value.delay}ms`;
                    }

                    // Trigger the animation defined in CSS
                    el.classList.add('animate-fade-in-up');

                    // Stop observing once animated
                    observer.unobserve(el);
                }
            }, {
                // Trigger when 10% of the element is visible
                threshold: 0.1,
                // Wait until it crosses slightly into the viewport
                rootMargin: '0px 0px -50px 0px'
            });

            observer.observe(el);
        }
    });
});
