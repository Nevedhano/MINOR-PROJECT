window.onload = function() {
    const patientName = localStorage.getItem('patientName');
    const prescription = localStorage.getItem('prescription');

    if (patientName && prescription) {
        // Display the retrieved data (you should have an element to show this)
        document.getElementById('patient-info').textContent = 
            `Patient Name: ${patientName}, Prescription: ${prescription}`;
        
        // Optionally, clear localStorage after use
        localStorage.removeItem('patientName');
        localStorage.removeItem('prescription');
    } else {
        console.log('No patient information found.');
    }
}


function goBack() {
    window.history.back(); // This takes the user to the previous page in the browser's history
}
