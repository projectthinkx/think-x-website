// Form Submit Alert
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the form from refreshing the page
    alert('Thanks for reaching out! We will get back to you soon.');
});

// Smooth Scroll to Top Button (Optional)
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
