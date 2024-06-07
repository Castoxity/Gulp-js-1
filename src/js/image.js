function displayImage(event, imgId) {
    const input = event.target;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const image = document.getElementById(imgId);
            image.src = e.target.result;
            image.style.display = 'block';
            input.nextElementSibling.style.display = 'none';
        }
        reader.readAsDataURL(input.files[0]);
    }
  }