const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const serviceSection = document.getElementById('service');
const educationSection = document.getElementById('education');
const contactSection = document.getElementById('contact');

document.getElementById('home-button').addEventListener('click', () => {
  // aboutSection.classList.add('hidden');
  
  if (!aboutSection.classList.contains('hidden')) {
    aboutSection.classList.remove('show');
    aboutSection.classList.add('hidden');
  }

  if (!serviceSection.classList.contains('hidden')) {
    serviceSection.classList.remove('show');
    serviceSection.classList.add('hidden');
  }

  if (!educationSection.classList.contains('hidden')) {
    educationSection.classList.remove('show');
    educationSection.classList.add('hidden');
  }

  if (!contactSection.classList.contains('hidden')) {
    contactSection.classList.remove('show');
    contactSection.classList.add('hidden');
  }

  if (homeSection.classList.contains('hidden')) {
    homeSection.classList.remove('hidden');
    homeSection.classList.add('show');
  }
});

document.getElementById('about-button').addEventListener('click', () => {
  
  if (!homeSection.classList.contains('hidden')) {
    homeSection.classList.remove('show');
    homeSection.classList.add('hidden');
  }

  if (!serviceSection.classList.contains('hidden')) {
    serviceSection.classList.remove('show');
    serviceSection.classList.add('hidden');
  }

  if (!educationSection.classList.contains('hidden')) {
    educationSection.classList.remove('show');
    educationSection.classList.add('hidden');
  }

  if (!contactSection.classList.contains('hidden')) {
    contactSection.classList.remove('show');
    contactSection.classList.add('hidden');
  }

  if (aboutSection.classList.contains('hidden')) {
    aboutSection.classList.remove('hidden');
    aboutSection.classList.add('show');
  }
});

document.getElementById('service-button').addEventListener('click', () => {
  
  if (!homeSection.classList.contains('hidden')) {
    homeSection.classList.remove('show');
    homeSection.classList.add('hidden');
  }

  if (!aboutSection.classList.contains('hidden')) {
    aboutSection.classList.remove('show');
    aboutSection.classList.add('hidden');
  }

  if (!educationSection.classList.contains('hidden')) {
    educationSection.classList.remove('show');
    educationSection.classList.add('hidden');
  }

  if (!contactSection.classList.contains('hidden')) {
    contactSection.classList.remove('show');
    contactSection.classList.add('hidden');
  }

  if (serviceSection.classList.contains('hidden')) {
    serviceSection.classList.remove('hidden');
    serviceSection.classList.add('show');
  }
});

document.getElementById('education-button').addEventListener('click', () => {
  
  if (!homeSection.classList.contains('hidden')) {
    homeSection.classList.remove('show');
    homeSection.classList.add('hidden');
  }

  if (!aboutSection.classList.contains('hidden')) {
    aboutSection.classList.remove('show');
    aboutSection.classList.add('hidden');
  }

  if (!serviceSection.classList.contains('hidden')) {
    serviceSection.classList.remove('show');
    serviceSection.classList.add('hidden');
  }

  if (!contactSection.classList.contains('hidden')) {
    contactSection.classList.remove('show');
    contactSection.classList.add('hidden');
  }

  if (educationSection.classList.contains('hidden')) {
    educationSection.classList.remove('hidden');
    educationSection.classList.add('show');
  }
});

document.getElementById('contact-button').addEventListener('click', () => {
  
  if (!homeSection.classList.contains('hidden')) {
    homeSection.classList.remove('show');
    homeSection.classList.add('hidden');
  }

  if (!aboutSection.classList.contains('hidden')) {
    aboutSection.classList.remove('show');
    aboutSection.classList.add('hidden');
  }

  if (!serviceSection.classList.contains('hidden')) {
    serviceSection.classList.remove('show');
    serviceSection.classList.add('hidden');
  }

  if (!educationSection.classList.contains('hidden')) {
    educationSection.classList.remove('show');
    educationSection.classList.add('hidden');
  }

  if (contactSection.classList.contains('hidden')) {
    contactSection.classList.remove('hidden');
    contactSection.classList.add('show');
  }
});