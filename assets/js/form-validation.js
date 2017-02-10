$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='contact']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      message: {
        required: true,
        minlength: 20
      }
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid e-mail address",
      message: "Please enter your message (must be at least 20 characters)"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
