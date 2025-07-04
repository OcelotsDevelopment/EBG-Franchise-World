document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelectorAll(".bap");
    console.log(button);
    
  
    const modal = /*html*/ `
    <div id="partnerModal" class="partner-modal fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
    <form class="w-full max-w-xl bg-white rounded-3xl p-6 md:p-10 border border-black/10">
                            <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Buy Tickets Now</h2>
                        
                            <!-- Name -->
                            <label class="block font-semibold mb-1">Name</label>
                            <input type="text" class="w-full border border-black/50 rounded-md px-4 py-2 mb-4" />
                        
                            <!-- Mobile Number -->
                            <label class="block font-semibold mb-1">Mobile Number</label>
                            <input type="text" class="w-full border border-black/50 rounded-md px-4 py-2 mb-4" />
                        
                            <!-- Email ID -->
                            <label class="block font-semibold mb-1">Email ID</label>
                            <input type="email" class="w-full border border-black/50 rounded-md px-4 py-2 mb-4" />
                        
                            <!-- Business Status -->
                            <label class="block font-semibold mb-2">
                              Current business status (Are you currently running a business?)
                            </label>
                            <div class="flex flex-col gap-2 mb-4">
                              <label class="flex items-center gap-2">
                                <input type="radio" name="status" class="accent-black" />
                                <span>Yes</span>
                              </label>
                              <label class="flex items-center gap-2">
                                <input type="radio" name="status" class="accent-black" />
                                <span>No</span>
                              </label>
                            </div>
                        
                            <!-- Sector Interest -->
                            <label class="block font-semibold mb-1">Sector interest</label>
                            <select class="w-full border border-black/50 rounded-md px-4 py-2 mb-4">
                              <option value="">Select Sector</option>
                              <option value="F&B">F&B</option>
                              <option value="EV">EV</option>
                              <option value="Automobiles">Automobiles</option>
                              <option value="Education">Education</option>
                              <option value="Others">Others</option>
                              <!-- Add options dynamically here -->
                            </select>
                        
                            <!-- Timeline -->
                            <label class="block font-semibold mb-1">Timeline for starting a business</label>
                            <input type="text" class="w-full border border-black/50 rounded-md px-4 py-2 mb-4" />
                        
                            <!-- Investment -->
                            <label class="block font-semibold mb-1">Investment capability</label>
                            <input type="text" class="w-full border border-black/50 rounded-md px-4 py-2 mb-6" />
                        
                            <!-- Button -->
                            <button type="submit" class="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition">
                              Book Ticket Now
                            </button>
                          </form>
  </div>
  `;
  
    button.forEach((btn) => {
      btn.addEventListener("click", function () {
        document.body.insertAdjacentHTML("beforeend", modal);
  
        // Add event listener after modal is created
        setTimeout(() => {
          const form = document.getElementById("partnerForm");
          if (form) {
            form.addEventListener("submit", handleFormSubmit);
          }
        }, 100);
      });
    });
  
    async function handleFormSubmit(e) {
      e.preventDefault();
  
      const form = e.target;
      const submitBtn = document.querySelector("#modal-submit-btn");
      const spinner = document.querySelector(".modal-loading-spinner");
      const btnText = document.querySelector(".modal-btn-text");
  
      // Show loading state
      submitBtn.disabled = true;
      spinner.classList.remove("hidden");
      btnText.style.display = "none";
  
      // Get form data with correct field names
      const formData = {
        name: form.name.value + " " + form.lastname.value,
        email: form.email.value,
        phone: form.mobileno.value,
        product_category: form.productcategory.value,
        state: form.state.value,
        investment: form.investment.value,
      };
  
      // console.log("Submitting form data:", formData);
  
      try {
        const response = await fetch(
          "https://partner-network.theebg.com/submit-to-zoho.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
  
        // console.log("Response status:", response.status);
  
        if (!response.ok) {
          // throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        form.reset();
  
        const result = await response.json();
        console.log("Result:", result);
  
        // if (result.status === "success") {
        //   // alert("Form submitted successfully! Our team will contact you soon.");
        //   document.getElementById("partnerModal")?.remove();
        // } else {
        //   throw new Error(result.message || "Failed to submit form");
        // }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("There was an error submitting the form. Please try again.");
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        spinner.classList.add("hidden");
        btnText.style.display = "block";
      }
    }
  });
