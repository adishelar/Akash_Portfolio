<<<<<<< HEAD
$(document).ready(function() {
    // Smooth scrolling for nav links
    $("a.nav-link").on("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
            window.location.hash = hash;
        }
    });

    // Contact form validation
    $("form").on("submit", function(e) {
        e.preventDefault();
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else {
            $.ajax({
                type: "POST",
                url: "your-backend-url",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                success: function() {
                    alert("Message sent successfully!");
                    $("form")[0].reset();
                },
                error: function() {
                    alert("There was an error sending the message.");
                }
            });
        }
    });

    // Animate on scroll
    function animateOnScroll() {
        $('.animate-on-scroll').each(function() {
            const rect = this.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                $(this).addClass('animate');
            }
        });
    }
    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on load

    // Portfolio item modals
    $('.portfolio-item').on('click', function() {
        const content = $(this).find('.portfolio-details').html();
        $('#portfolioModal .modal-content').html(content);
        $('#portfolioModal').css('display', 'block');
    });

    // Close modal handler
    function closeModalHandler() {
        $('#portfolioModal').css('display', 'none');
    }

    $('.close-modal').on('click', closeModalHandler);
    $(window).on('click', function(e) {
        if ($(e.target).is('#portfolioModal')) {
            closeModalHandler();
        }
    });

    // Responsive Navigation Toggle
    $('.navbar-toggler').on('click', function() {
        $('.navbar-collapse').toggleClass('show');
    });
});
=======
$(document).ready(function() {
    // Smooth scrolling for nav links
    $("a.nav-link").on("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
            window.location.hash = hash;
        }
    });

    // Contact form validation
    $("form").on("submit", function(e) {
        e.preventDefault();
        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else {
            $.ajax({
                type: "POST",
                url: "your-backend-url",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                success: function() {
                    alert("Message sent successfully!");
                    $("form")[0].reset();
                },
                error: function() {
                    alert("There was an error sending the message.");
                }
            });
        }
    });

    // Animate on scroll
    function animateOnScroll() {
        $('.animate-on-scroll').each(function() {
            const rect = this.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                $(this).addClass('animate');
            }
        });
    }
    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on load

    // Portfolio item modals
    $('.portfolio-item').on('click', function() {
        const content = $(this).find('.portfolio-details').html();
        $('#portfolioModal .modal-content').html(content);
        $('#portfolioModal').css('display', 'block');
    });

    // Close modal handler
    function closeModalHandler() {
        $('#portfolioModal').css('display', 'none');
    }

    $('.close-modal').on('click', closeModalHandler);
    $(window).on('click', function(e) {
        if ($(e.target).is('#portfolioModal')) {
            closeModalHandler();
        }
    });

    // Responsive Navigation Toggle
    $('.navbar-toggler').on('click', function() {
        $('.navbar-collapse').toggleClass('show');
    });
});
>>>>>>> 70e73a18e9d7c32973b43e167f77b2799fe11cbe
