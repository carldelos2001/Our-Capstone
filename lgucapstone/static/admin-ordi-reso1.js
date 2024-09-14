document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function(event) {
      let valid = true;

      // Clear previous errors
      document.querySelectorAll('.error').forEach(error => error.textContent = '');

      // Validate each field
      const title = document.querySelector('#id_title');
      if (!title.value.trim()) {
          document.querySelector('#title-error').textContent = 'Title is required.';
          valid = false;
      }

      const year = document.querySelector('#id_year');
      if (!year.value.trim()) {
          document.querySelector('#year-error').textContent = 'Year is required.';
          valid = false;
      }

      const dateProposed = document.querySelector('#id_dateProposed');
      if (!dateProposed.value) {
          document.querySelector('#dateProposed-error').textContent = 'Date Proposed is required.';
          valid = false;
      }

      const dateApproved = document.querySelector('#id_dateApproved');
      if (!dateApproved.value) {
          document.querySelector('#dateApproved-error').textContent = 'Date Approved is required.';
          valid = false;
      }

      const type = document.querySelector('#id_type');
      if (!type.value.trim()) {
          document.querySelector('#type-error').textContent = 'Type is required.';
          valid = false;
      }

      const file = document.querySelector('#id_file');
      if (!file.files.length) {
          document.querySelector('#file-error').textContent = 'File is required.';
          valid = false;
      }

      if (!valid) {
          event.preventDefault(); // Prevent form submission if validation fails
      }
  });
});
