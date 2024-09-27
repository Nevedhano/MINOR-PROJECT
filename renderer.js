/*document.addEventListener("DOMContentLoaded", function() {
    console.log("renderer.js loaded - DOM fully loaded and parsed.");  // Confirm script loaded

    // Doctor Portal button click handler
    const doctorPortalButton = document.getElementById('doctor-portal-button');
    console.log("Doctor Portal Button:", doctorPortalButton);  // Log the button element

    if (doctorPortalButton) {
        doctorPortalButton.addEventListener('click', function () {
            console.log("Doctor Portal button clicked");  // Confirm click
            document.getElementById('portal-selection').style.display = 'none';
            document.getElementById('doctor-portal').style.display = 'block';
        });
    } else {
        console.error("Element with ID 'doctor-portal-button' not found.");
    }

    // Billing form submission handler
    const billingForm = document.getElementById('billing-form');
    console.log("Billing Form:", billingForm);  // Log the form element

    if (billingForm) {
        billingForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission behavior
            console.log("Billing form submitted");

            const patientName = document.getElementById('patientName').value;
            const prescription = document.getElementById('prescription').value;
            const registrationNumber = document.getElementById('registrationNumber').value;

            console.log("Patient Name:", patientName);  // Log inputs
            console.log("Prescription:", prescription);
            console.log("Registration Number:", registrationNumber);

            // Predefined list of valid registration numbers
            const validRegistrationNumbers = [
                'RA2111050010048', 
                'RA211150010052', 
                'RA2111050010351', 
                'RA2111050010348', 
                'RA2111050010021'
            ];

            if (!validRegistrationNumbers.includes(registrationNumber)) {
                console.error("Invalid registration number: ", registrationNumber);  // Log invalid registration
                alert('User ID is not valid');
                return; // Stop form submission
            }

            // If valid, redirect to the confirmation page
            console.log("Valid registration number. Redirecting...");
            window.location.href = "confirmation.html";
        });
    } else {
        console.error("Element with ID 'billing-form' not found.");
    }
});
*/
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed.");

    // Get the Doctor Portal Button
    const doctorPortalButton = document.getElementById('doctor-portal-button');
    console.log("Doctor Portal Button:", doctorPortalButton);

    if (doctorPortalButton) {
        doctorPortalButton.addEventListener('click', function () {
            console.log('Doctor Portal button clicked');
            document.getElementById('doctor-portal').style.display = 'block';
        });
    } else {
        console.error("Element with ID 'doctor-portal-button' not found.");
    }

    // Get the Billing Form
    const billingForm = document.getElementById('billing-form');
    console.log("Billing Form:", billingForm);

    if (billingForm) {
        billingForm.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('Billing form submitted');
            // You can add further form submission handling here.
        });
    } else {
        console.error("Element with ID 'billing-form' not found.");
    }
});
