const enquiryModal = document.getElementById('enquiryModal');
const enquiryForm = document.getElementById('enquiryForm');
const productInput = document.getElementById('productInput');
const modalProductName = document.getElementById('modalProductName');

// OPEN MODAL - Call this from your product button
// Example: <button onclick="openEnquiry('Cotton Saree')">Enquire</button>
function openEnquiry(productName = 'Product enquiry') {
  modalProductName.textContent = productName;
  productInput.value = productName;
  enquiryModal.classList.add('active');
  document.body.classList.add('modal-open');
}

// CLOSE MODAL
function closeEnquiry() {
  enquiryModal.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && enquiryModal.classList.contains('active')) {
    closeEnquiry();
  }
});

// FORM SUBMIT
enquiryForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const product = productInput.value;

  // Phone validation - exactly 10 digits
  if (!/^[0-9]{10}$/.test(phone)) {
    alert('Please enter a valid 10-digit phone number');
    return;
  }

  // You can send this data to your backend / WhatsApp / API
  console.log({ product, name, phone, message });

  // Example: WhatsApp integration
  // const waText = `Enquiry for: ${product}%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
  // window.open(`https://wa.me/919999999999?text=${waText}`, '_blank');

  // Success
  alert('Thank you! We will contact you soon.');
  enquiryForm.reset();
  closeEnquiry();
});



// multi products

const products = {

  "alarm-bell": {
    title: "Polished Fire Alarm Gong Bell (Red",

    images: [
      "alam-fair.png",
      "fireto.png",
      "fair-alamtoo.webp"
    ],

    description:
      "The Fire Alarm Gong Bell is a reliable alert system for commercial spaces designed for emergency warning and safety.",

    specifications: {
      Color: "Red",
      Material: "Mild Steel",
      "Power Consumption": "20 Watts",
      Type: "Fire Alarm",
      "Automation Grade": "Fully Automatic",
      Finish: "Color Coated",
      Availability: "In Stock"
    }
  },

  "smoke-detector": {
    title: "Smoke Detector",

    images: [
      "smoke1.webp",
      "smoke2.webp",
      "smoke3.webp"
    ],

    description:
      "High performance smoke detector suitable for residential and commercial buildings.",

    specifications: {
      Color: "White",
      Sensor: "Photoelectric",
      Voltage: "24V DC",
      Material: "ABS Plastic",
      Availability: "In Stock"
    }
  },

  "fire-extinguisher": {
    title: "ABC Fire Extinguisher",

    images: [
      "ext1.webp",
      "ext2.webp",
      "ext3.webp"
    ],

    description:
      "Multipurpose ABC fire extinguisher suitable for Class A, B and C fires.",

    specifications: {
      Capacity: "6 Kg",
      Type: "ABC Powder",
      Material: "Steel",
      Color: "Red",
      Availability: "In Stock"
    }
  }
};

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products[productId];

if (product) {

  document.getElementById("product-title").textContent =
    product.title;

  document.getElementById("product-description").textContent =
    product.description;

  let carousel = "";
  let thumbs = "";

  product.images.forEach((img, index) => {

    carousel += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <img src="${img}" class="d-block w-100">
      </div>
    `;

    thumbs += `
      <button type="button"
        data-bs-target="#carouselExampleSlidesOnly"
        data-bs-slide-to="${index}"
        class="${index === 0 ? "active" : ""}">
        <img src="${img}">
      </button>
    `;
  });

  document.getElementById("carousel-images").innerHTML =
    carousel;

  document.getElementById("carousel-thumbs").innerHTML =
    thumbs;

  let specs = "";

  for (let key in product.specifications) {
    specs += `
      <tr>
        <td>${key}</td>
        <td>${product.specifications[key]}</td>
      </tr>
    `;
  }

  document.getElementById("spec-table").innerHTML =
    specs;
}