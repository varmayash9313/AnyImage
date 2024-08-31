function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }




// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('contactForm');

//   form.addEventListener('submit', async (event) => {
//       event.preventDefault(); // Prevent the default form submission

//       const formData = new FormData(form);
//       const data = new URLSearchParams(formData).toString();

//       try {
//           const response = await fetch('http://localhost:4000/submit', { // Updated port
//               method: 'POST',
//               headers: {
//                   'Content-Type': 'application/x-www-form-urlencoded',
//               },
//               body: data,
//           });

//           if (response.ok) {
//               alert('Submitted successfully');
//               form.reset(); // Optional: reset the form fields
//               window.location.reload(); // Reload the page
//           } else {
//               alert('Submission failed. Please try again.');
//           }
//       } catch (error) {
//           console.error('Error:', error);
//           alert('An error occurred. Please try again.');
//       }
//   });
// });



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent the default form submission

      const formData = new FormData(form);
      const data = new URLSearchParams(formData).toString();

      // Check if the app is in production or development
      const baseUrl = window.location.hostname === 'localhost'
          ? 'http://localhost:4000'
          : 'https://yourappname.herokuapp.com'; // Replace with your production URL

      try {
          const response = await fetch(`${baseUrl}/submit`, { 
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: data,
          });

          if (response.ok) {
              alert('Submitted successfully');
              form.reset(); // Optional: reset the form fields
              window.location.reload(); // Reload the page
          } else {
              alert('Submission failed. Please try again.');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
      }
  });
});

