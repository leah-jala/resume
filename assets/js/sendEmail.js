function sendMail(contactForm) {
    emailjs.send("service_nd841jg", "template_gc8fyx4", {
        "to_name": "Leah",
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(function() {
        console.log('SUCCESS!');
    }, function(error) {
        console.log('FAILED...', error);
    });
    return false;  // To block from loading a new page
}