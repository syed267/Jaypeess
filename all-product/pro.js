
// ============================================================
// PRODUCT DATA — one entry per product shown on product.html
// Each product opens at: product-detail.html?id=<key>
// ============================================================
const products = {

  "mild-steel-dcp": {
    title: "Mild Steel DCP Fire Extinguisher For Industrial",
    images: ["ass/can-ball.png"],
    description:
      "The Mild Steel DCP Fire Extinguisher for Industrial use is a reliable and durable safety device designed to tackle Class A, B and C fires quickly and effectively. Built with a sturdy mild steel body, it is engineered for demanding industrial environments and offers dependable performance when it matters most.",
    specifications: {
      Color: "Red",
      Material: "Mild Steel",
      Type: "Dry Chemical Powder (DCP)",
      "Product Capacity": "4 Kg",
      "Automation Grade": "Manual",
      Finish: "Powder Coated",
      Availability: "In Stock"
    }
  },

  "carbon-dioxide": {
    title: "Carbon Dioxide Fire Extinguishers For Industrial",
    images: ["ass/can-fair.png"],
    description:
      "The Carbon Dioxide Fire Extinguisher for Industrial use is an essential safety tool designed to combat Class B and electrical fires. It leaves no residue after discharge, making it ideal for use around sensitive equipment and machinery.",
    specifications: {
      Color: "Red / Black",
      Material: "Steel",
      Type: "Carbon Dioxide (CO2)",
      "Product Capacity": "4.5 Kg",
      "Discharge Range": "1 - 2.5 m",
      Availability: "In Stock"
    }
  },

  "automatic-extinguisher": {
    title: "Automatic Fire Extinguisher For Industrial",
    images: ["ass/can-round.png"],
    description:
      "The Automatic Fire Extinguisher for Industrial use is a self-activating fire safety device designed to detect and suppress fires without manual intervention, making it ideal for unattended or high-risk industrial areas.",
    specifications: {
      Color: "Red",
      Material: "Stainless Steel",
      Type: "Automatic DCP",
      Activation: "Heat Sensitive",
      "Product Capacity": "1 - 2 Kg",
      Availability: "In Stock"
    }
  },

  "extinguisher-grip": {
    title: "Fire Extinguisher Grip For Industrial",
    images: ["ass/handle.png"],
    description:
      "The Fire Extinguisher Grip is a crucial ergonomic feature enhancing the usability of fire safety equipment. Designed for a firm, comfortable hold, it ensures quick and confident operation during emergencies.",
    specifications: {
      Color: "Red / Black",
      Material: "Mild Steel & Plastic",
      Type: "Handle & Trigger Assembly",
      Compatibility: "Universal Fit",
      Availability: "In Stock"
    }
  },

  "fire-alarm-mild-steel": {
    title: "Mild Steel Fully Automatic Fire Alarm System",
    images: ["ass/red-box.png"],
    description:
      "This Mild Steel Fully Automatic Fire Alarm System is built for reliable early fire detection in industrial facilities, offering a robust enclosure and fully automatic operation for continuous protection.",
    specifications: {
      Color: "Red",
      Material: "Mild Steel",
      "Power Supply": "220V AC",
      "Automation Grade": "Fully Automatic",
      "Sound Output": "100 dB",
      Availability: "In Stock"
    }
  },

  "polished-gong-bell": {
    title: "Polished Fire Alarm Gong Bell (Red)",
    images: ["ass/alam-fair.png"],
    description:
      "The Fire Alarm Gong Bell is a reliable alert system for commercial spaces, designed for efficient, loud emergency warning to ensure fast evacuation and response.",
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

  "hybrid-fire-alarm": {
    title: "Hybrid Fire Alarm System For Industrial",
    images: ["ass/gray-box.png"],
    description:
      "A Hybrid Fire Alarm System combines conventional and addressable technologies, offering a flexible and advanced solution for fire detection across large or multi-zone industrial facilities.",
    specifications: {
      Color: "Gray",
      Type: "Hybrid (Conventional + Addressable)",
      "Power Supply": "220V AC",
      Zones: "Multi-Zone",
      Material: "Metal / ABS Casing",
      Availability: "In Stock"
    }
  },

  "gloves-orange": {
    title: "Fire Safety Gloves For Industrial",
    images: ["ass/glouse.png"],
    description:
      "Look no further than the vibrant orange fire safety gloves! These gloves not only provide the much-needed protection for your hands but also stand out for quick identification on any job site.",
    specifications: {
      Color: "Orange",
      Material: "Leather / Kevlar Blend",
      Length: "Elbow Length",
      "Heat Resistance": "Up to 250°C",
      Availability: "In Stock"
    }
  },

  "gloves-yellow": {
    title: "Fire Safety Gloves For Industrial (Yellow)",
    images: ["ass/yellowg.avif"],
    description:
      "When it comes to industrial work and fire safety, having the right gloves is crucial. These yellow fire safety gloves are built for durability and heat resistance in demanding conditions.",
    specifications: {
      Color: "Yellow",
      Material: "Aramid Fabric",
      Length: "Gauntlet",
      "Heat Resistance": "Up to 300°C",
      Availability: "In Stock"
    }
  },

  "carbon-dioxide-fair": {
    title: "Carbon Dioxide Fire Extinguishers For Industrial",
    images: ["ass/fire-alar.png"],
    description:
      "The Carbon Dioxide Fire Extinguisher for Industrial use is an essential safety tool designed to combat Class B and electrical fires, offering clean and residue-free suppression.",
    specifications: {
      Color: "Red / Black",
      Material: "Steel",
      Type: "Carbon Dioxide (CO2)",
      "Product Capacity": "4.5 Kg",
      Availability: "In Stock"
    }
  },

  "smoke-detector-round": {
    title: "Plastic Round Smoke Alarm Detector 5 Ampere",
    images: ["ass/alarm-dect.png"],
    description:
      "The Plastic Round Smoke Alarm Detector in white is a compact and reliable device designed for early smoke detection in residential and light commercial spaces.",
    specifications: {
      Color: "White",
      Material: "ABS Plastic",
      "Sensor Type": "Optical / Ionization",
      "Rated Current": "5 Amp",
      Shape: "Round",
      Availability: "In Stock"
    }
  },

  "smoke-detector-morley": {
    title: "Plastic Morley Smoke Detector For Industrial 20 Amp (White)",
    images: ["ass/smoke-dects.avif"],
    description:
      "The Plastic Morley Smoke Detector for Industrial use, with a 20 Amp rating (White), is a robust safety solution designed for large-scale industrial environments requiring reliable smoke detection.",
    specifications: {
      Color: "White",
      Brand: "Morley",
      "Rated Current": "20 Amp",
      Material: "ABS Plastic",
      "Sensor Type": "Photoelectric",
      Availability: "In Stock"
    }
  },

  "smoke-detector-honeywell": {
    title: "Optical Honeywell Plastic Smoke Alarm Detectors (White)",
    images: ["ass/plastic.png"],
    description:
      "The White Plastic Alarm Detectors are designed for industrial use, offering a reliable and efficient solution for detecting potential fire hazards in demanding environments.",
    specifications: {
      Color: "White",
      Brand: "Honeywell",
      "Sensor Type": "Optical",
      Material: "ABS Plastic",
      Voltage: "24V DC",
      Availability: "In Stock"
    }
  }
};

// ============================================================
// RENDER PRODUCT DETAIL PAGE (runs only when the right elements exist)
// ============================================================
const productTitleEl = document.getElementById("product-title");

if (productTitleEl) {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  const product = products[productId];

  if (product) {
    document.title = product.title + " | Jaypee Safety Systems";
    productTitleEl.textContent = product.title;
    document.getElementById("product-description").textContent = product.description;

    // Gallery
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

    document.getElementById("carousel-images").innerHTML = carousel;
    document.getElementById("carousel-thumbs").innerHTML = thumbs;

    // Hide thumbnail row entirely if there's only one image
    if (product.images.length <= 1) {
      document.getElementById("carousel-thumbs").style.display = "none";
    } else {
      // keep active thumbnail in sync with the carousel
      document.querySelectorAll("#carousel-thumbs button").forEach((btn) => {
        btn.addEventListener("click", () => {
          document.querySelectorAll("#carousel-thumbs button").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
        });
      });
    }

    // Specifications table
    let specs = "";
    for (let key in product.specifications) {
      specs += `
        <tr>
          <td>${key}</td>
          <td>${product.specifications[key]}</td>
        </tr>
      `;
    }
    document.getElementById("spec-table").innerHTML = specs;

    // Enquire Now button
    const enquireBtn = document.getElementById("enquire-btn");
    if (enquireBtn) {
      enquireBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openEnquiry(product.title);
      });
    }
  } else {
    productTitleEl.textContent = "Product not found";
    document.getElementById("product-description").textContent =
      "Sorry, we couldn't find the product you're looking for. Please go back to the products page and try again.";
  }
}
