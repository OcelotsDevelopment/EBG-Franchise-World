import axios from "axios";

{
  /* <div class="rounded-l-2xl md:min-w-[326px] object-cover "
style="background-image: url(./public/assets/formImg.png);">
</div> */
}

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelectorAll(".bap");

  const modal = /*html*/ `
  <div id="partnerModal"
  class="partner-modal fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
  <div id="partnerForm"
    class="flex flex-col lg:flex-row  rounded-2xl overflow-hidden shadow-md p-2 bg-white relative">
    <a id="closePartnerModal" class=" closse-button w-inline-block cursor-pointer absolute top-4 right-10"
      onclick="document.getElementById('partnerModal')?.remove()">
      <svg class="cart-closer" width="16px" height="16px" viewBox="0 0 16 16">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill-rule="nonzero" fill="#333333">
            <polygon
              points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8">
            </polygon>
          </g>
        </g>
      </svg>
    </a>
    <div class="w-full bg-white px-6 py-5 overflow-y-scroll " style="height: calc(100vh - 100px);">
      <form id="partnerForm" class=" bg-white p-6 ">

        <div id="first" class="block space-y-4">
          <!-- Name -->
          <div class="flex flex-col md:flex-row gap-2.5 w-full">
            <div class="w-full md:w-1/2">
              <label class="block font-semibold mb-1 text-[#6C6C6C]">First Name</label>
              <input type="text" id="firstName" placeholder="Enter Your First Name"
                class="w-full shadow rounded-md px-3 py-2 mb-1" />
              <div id="firstName-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>

            <div class="w-full md:w-1/2">
              <label class="block font-semibold mb-1 text-[#6C6C6C]">Last Name</label>
              <input type="text" id="lastName" placeholder="Enter Your Last Name"
                class="w-full shadow rounded-md px-3 py-2 mb-1" />
              <div id="lastName-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>
          </div>

          <!-- Mobile Number & Email -->
          <div class="flex flex-col md:flex-row gap-2.5 w-full">
            <div class="w-full md:w-1/2">
              <label class="block font-semibold mb-1 text-[#6C6C6C]">Mobile Number</label>
              <input type="number" id="mobileNumber" placeholder="Enter Your Number"
                class="w-full shadow rounded-md px-3 py-2 mb-1" />
              <div id="mobileNumber-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>
            <div class="w-full md:w-1/2">
              <label class="block font-semibold mb-1 text-[#6C6C6C]">Email ID</label>
              <input type="email" id="emailId" placeholder="Enter Your Mail Address"
                class="w-full shadow rounded-md px-3 py-2 mb-1" />
              <div id="emailId-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>
          </div>

          <!-- Business Status -->
          <div>
            <label class="block font-semibold mb-2 text-[#6C6C6C]">
              Current business status (Are you currently running a business?)
            </label>
            <div class="flex flex-col gap-2 mb-2">
              <label class="flex items-center gap-2">
                <input type="radio" name="status" value="yes" class="accent-black shadow" id="trueRadio" />
                <span class="text-[#6C6C6C] ">Yes</span>
              </label>
              <label class="flex items-center gap-2">
                <input type="radio" name="status" value="no" class="accent-black shadow" id="falseRadio" />
                <span class="text-[#6C6C6C] ">No</span>
              </label>
              <div id="trueRadio-error" class="text-red-500 text-sm mt-1 hidden"></div>
            </div>
          </div>

          <!-- Conditionally displayed input -->
          <div id="business-details" class="mb-4 hidden">
            <label class="block font-semibold mb-1 text-[#6C6C6C]">What is your business name?</label>
            <input type="text" id="businessName" class="w-full shadow rounded-md px-3 py-2" />
            <div id="businessName-error" class="text-red-500 text-sm mt-1 hidden"></div>
          </div>

          <!-- Sector -->
          <div>
            <label class="block font-semibold mb-1 text-[#6C6C6C]">Sector interest</label>
            <select id="sectorInterest" class="w-full shadow rounded-md px-3 py-2 mb-1">
              <option value="">Select Sector</option>
              <option value="F&B">F&B</option>
              <option value="EV">EV</option>
              <option value="Automobiles">Automobiles</option>
              <option value="Education">Education</option>
              <option value="Others">Others</option>
            </select>
            <div id="sectorInterest-error" class="text-red-500 text-sm mt-1 hidden"></div>
          </div>

          <div>
            <!-- Timeline -->
            <label class="block font-semibold mb-1 text-[#6C6C6C]">Timeline for starting a business</label>
            <select id="timeline" class="w-full px-4 py-3 rounded-md shadow ">
                <option value="">Select Investment Timeline</option>
                <option value="1 to 3" >1 to 3 Month's</option>
                <option value="3 to 6" >3 to 6 Month's</option>
                <option value="6 to 12" >6 to 12 Month's</option>
              </select>
            <div id="timeline-error" class="text-red-500 text-sm mt-1 hidden"></div>
          </div>

          <div>
            <!-- Investment -->
            <label class="block font-semibold mb-1 text-[#6C6C6C]">Investment Capability *</label>
            <select id="investment" class="w-full px-4 py-3 rounded-md shadow ">
              <option value="">Select Investment Range</option>
              <option value="Below ₹25 Lakhs">Below ₹25 Lakhs</option>
              <option value="₹25L - ₹1 Cr">₹25L - ₹1 Cr</option>
              <option value="₹1 Cr - ₹5 Cr">₹1 Cr - ₹5 Cr</option>
              <option value="₹5 Cr and above">₹5 Cr and above</option>
            </select>
            <div id="investment-error" class="text-red-500 text-sm mt-1 hidden"></div>
          </div>
          <!-- Submit button -->
          <button type="button" id="next"
            class="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition">
            Next
          </button>
        </div>

        <div id="second" class="hidden h-[90%] md:min-w-[501px]">
          <div class="flex flex-col justify-between h-full gap-4">
            <div>
              <!-- Date selection -->
              <div>
                <label class="block font-semibold mb-1">Select a Date</label>
                <select id="selectedDate" class="w-full border border-black/50 rounded-md px-3 py-2 mb-4">
                  <option value="">Select Date</option>
                  <option value="02-08-2025">02-08-2025</option>
                  <option value="03-08-2025">03-08-2025</option>
                </select>
              </div>

              <!-- Time slot selection -->
              <div>
                <label class="block font-semibold mb-1">Select a Slot</label>
                <select id="selectedSlot" class="w-full border border-black/50 rounded-md px-3 py-2 mb-4">
                  <option value="">Select Slot</option>
                  <option value="10:00am-12:00pm">10:00am-12:00pm</option>
                  <option value="12:00pm-03:00pm">12:00pm-03:00pm</option>
                  <option value="03:00am-06:00pm">03:00am-06:00pm</option>
                </select>
              </div>

              <div>
                <label class="block font-semibold mb-1 text-[#6C6C6C]">Peoples</label>
                <select id="members" class="w-full px-4 py-3 rounded-md shadow ">
                  <option value="">Select how many members are?</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <div id="members-error" class="text-red-500 text-sm mt-1 hidden"></div>
              </div>
            </div>
            <div>
              <button type="button" id="bookTicket"
                class="w-full bg-black text-white font-semibold py-3 rounded-md hover:bg-gray-900 transition">
                Book Ticket Now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
`;

  // button.forEach((btn) => {
  //   btn.addEventListener("click", function () {
  //     document.body.insertAdjacentHTML("beforeend", modal);

  //     // Add event listener after modal is created
  //     setTimeout(() => {
  //       const form = document.getElementById("partnerForm");
  //       // const trueRadio = document.getElementById("trueRadio");
  //       const falseRadio = document.getElementById("falseRadio");
  //       const first = document.getElementById("first");
  //       const second = document.getElementById("second");
  //       const next = document.getElementById("next");
  //       const bookTicket = document.getElementById("bookTicket");

  //       if (form) {
  //         // trueRadio.addEventListener("change", () => toggleBusinessField(true));
  //         falseRadio.addEventListener("change", () =>
  //           toggleBusinessField(false)
  //         );

  //         // Next button click validation
  //         next.addEventListener("click", (e) => {
  //           e.preventDefault();
  //           if (validateFirstForm()) {
  //             first.style.display = "none";
  //             second.style.display = "block";
  //           }
  //         });

  //         // Book ticket button validation
  //         bookTicket.addEventListener("click", (e) => {
  //           e.preventDefault();
  //           if (validateSecondForm()) {
  //             alert("Ticket booked successfully!");
  //             document.getElementById("partnerModal")?.remove();
  //           }
  //         });

  //         // Close modal when clicking outside
  //         document
  //           .getElementById("partnerModal")
  //           .addEventListener("click", (e) => {
  //             if (e.target.id === "partnerModal") {
  //               document.getElementById("partnerModal")?.remove();
  //             }
  //           });
  //       }
  //     }, 100);
  //   });
  // });

  // function toggleBusinessField(show) {
  //   const field = document.getElementById("business-details");
  //   field.classList.toggle("hidden", !show);
  // }

  // function validateFirstForm() {
  //   const name = document.getElementById("userName").value.trim();
  //   const mobile = document.getElementById("mobileNumber").value.trim();
  //   const email = document.getElementById("emailId").value.trim();
  //   const businessStatus = document.querySelector(
  //     'input[name="status"]:checked'
  //   );
  //   const sector = document.getElementById("sectorInterest").value;
  //   const timeline = document.getElementById("timeline").value.trim();
  //   const investment = document.getElementById("investment").value.trim();

  //   // Check if name is empty
  //   if (!name) {
  //     alert("Please enter your name");
  //     document.getElementById("userName").focus();
  //     return false;
  //   }

  //   // Check if mobile number is empty
  //   if (!mobile) {
  //     alert("Please enter your mobile number");
  //     document.getElementById("mobileNumber").focus();
  //     return false;
  //   }

  //   // Validate mobile number format (basic validation)
  //   if (!/^\d{10}$/.test(mobile)) {
  //     alert("Please enter a valid 10-digit mobile number");
  //     document.getElementById("mobileNumber").focus();
  //     return false;
  //   }

  //   // Check if email is empty
  //   if (!email) {
  //     alert("Please enter your email address");
  //     document.getElementById("emailId").focus();
  //     return false;
  //   }

  //   // Validate email format
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     alert("Please enter a valid email address");
  //     document.getElementById("emailId").focus();
  //     return false;
  //   }

  //   // Check if business status is selected
  //   if (!businessStatus) {
  //     alert("Please select your current business status");
  //     return false;
  //   }

  //   // If business status is "yes", check if business name is provided
  //   if (businessStatus.value === "yes") {
  //     const businessName = document.getElementById("businessName").value.trim();
  //     if (!businessName) {
  //       alert("Please enter your business name");
  //       document.getElementById("businessName").focus();
  //       return false;
  //     }
  //   }

  //   // Check if sector is selected
  //   if (!sector) {
  //     alert("Please select a sector interest");
  //     document.getElementById("sectorInterest").focus();
  //     return false;
  //   }

  //   // Check if timeline is empty
  //   if (!timeline) {
  //     alert("Please enter your timeline for starting a business");
  //     document.getElementById("timeline").focus();
  //     return false;
  //   }

  //   // Check if investment capability is empty
  //   if (!investment) {
  //     alert("Please enter your investment capability");
  //     document.getElementById("investment").focus();
  //     return false;
  //   }

  //   return true;
  // }

  // function validateSecondForm() {
  //   const selectedDate = document.getElementById("selectedDate").value;
  //   const selectedSlot = document.getElementById("selectedSlot").value;

  //   // Check if date is selected
  //   if (!selectedDate) {
  //     alert("Please select a date");
  //     document.getElementById("selectedDate").focus();
  //     return false;
  //   }

  //   // Check if time slot is selected
  //   if (!selectedSlot) {
  //     alert("Please select a time slot");
  //     document.getElementById("selectedSlot").focus();
  //     return false;
  //   }

  //   return true;
  // }

  let mfirstName;
  let mlastName;
  let mmobile;
  let memail;
  let mstatus;
  let mbusinessName;
  let msector;
  let mtimeline;
  let minvestment;
  let mdate;
  let mslot;
  let mmembers;

  button.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (document.getElementById("partnerModal")) return;

      document.body.insertAdjacentHTML("beforeend", modal); // Make sure `modal` variable is already defined.

      setTimeout(() => {
        const first = document.getElementById("first");
        const second = document.getElementById("second");
        const next = document.getElementById("next");
        const bookTicket = document.getElementById("bookTicket");

        const trueRadio = document.getElementById("trueRadio");
        const falseRadio = document.getElementById("falseRadio");

        const businessField = document.getElementById("business-details");

        trueRadio?.addEventListener("change", () =>
          businessField.classList.remove("hidden")
        );
        falseRadio?.addEventListener("change", () =>
          businessField.classList.add("hidden")
        );

        next.addEventListener("click", function () {
          if (validateStepOne()) {
            first.classList.add("hidden");
            second.classList.remove("hidden");
          }
        });

        // razorpay
        function openRazorpayCheckout(data) {
          const razorpayData = {
            key: data.key, // Replace with your actual key
            amount: data.amount, // in paise
            currency: data.currency,
            name: mfirstName,
            description: "EBG Expo 2025",
            order_id: data.orderId, // Generated from your backend
            handler: function (response) {
              console.log("Payment Success!", response);

              // Prepare the payload
              const payload = {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                name: mfirstName + " " + mlastName,
                email: memail,
                members: mmembers, // assuming `members` is defined somewhere
                ticketId: data.ticketId,
                slote: mslot, // assuming `slote` is defined
                sloteDate: mdate, // assuming `sloteDate` is defined
              };

              // Send POST request to your backend
              fetch("https://apiexpo.franchiseworld.com/api/ticket/confirm-payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log("Payment confirmed and data saved!", data);
                  window.location.href = "thank-you.html"
                  // You can redirect the user or show a success message
                })
                .catch((error) => {
                  console.error("Error confirming payment:", error);
                  // Show an error message to user
                });
            },
            prefill: {
              name: mfirstName + " " + mlastName,
              email: memail,
              contact: mmobile,
            },
            notes: {
              ticketId: data.ticketId,
            },
            theme: {
              color: "#000000",
            },
          };

          const rzp = new Razorpay(razorpayData);
          rzp.open();
        }

        bookTicket.addEventListener("click", function () {
          if (validateStepTwo()) {
            // document.getElementById("partnerModal").remove();
            // alert("Ticket booked successfully!");

            // console.log(
            //   mfirstName,
            //   mlastName,
            //   mmobile,
            //   memail,
            //   mstatus,
            //   mbusinessName,
            //   msector,
            //   mtimeline,
            //   minvestment,
            //   mdate,
            //   mslot
            // );

            axios
              .post("https://apiexpo.franchiseworld.com/api/ticket/book", {
                name: mfirstName + " " + mlastName,
                email: memail,
                mobile: mmobile,
                members: Number(mmembers),
                current_business_status: mstatus?.value,
                current_business_name: mbusinessName,
                sector_interest: msector,
                timeline_for_starting_business: mtimeline,
                investment_capability: minvestment,
                slote: mslot,
                sloteDate: mdate,
              })
              .then((res) => {
                console.log(res);
                console.log("Booking done!", res);
                document.getElementById("partnerModal").remove();
                // Trigger Razorpay
                openRazorpayCheckout(res.data);
              });
          }
        });

        // Close modal when clicking background
        document
          .getElementById("partnerModal")
          .addEventListener("click", (e) => {
            if (e.target.id === "partnerModal") {
              document.getElementById("partnerModal").remove();
            }
          });

        // Close modal when clicking close button
        document
          .getElementById("closePartnerModal")
          .addEventListener("click", () => {
            document.getElementById("partnerModal").remove();
          });

        // Real-time validation clearing
        document.querySelectorAll("input, select").forEach((field) => {
          field.addEventListener("input", () => clearError(field.id));
          field.addEventListener("change", () => clearError(field.id));
        });
      }, 100);
    });
  });

  function showError(id, message) {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "-error");

    if (input) {
      input.classList.add("border-red-500");
    }
    if (error) {
      error.innerText = message;
      error.classList.remove("hidden");
    }
  }

  function clearError(id) {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "-error");

    if (input) {
      input.classList.remove("border-red-500");
    }
    if (error) {
      error.innerText = "";
      error.classList.add("hidden");
    }
  }

  function validateStepOne() {
    let isValid = true;

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const mobile = document.getElementById("mobileNumber").value.trim();
    const email = document.getElementById("emailId").value.trim();
    const status = document.querySelector('input[name="status"]:checked');
    const businessName = document.getElementById("businessName").value.trim();
    const sector = document.getElementById("sectorInterest").value;
    const timeline = document.getElementById("timeline").value.trim();
    const investment = document.getElementById("investment").value.trim();

    if (!firstName) {
      showError("firstName", "First name is required");
      isValid = false;
    }
    if (!lastName) {
      showError("lastName", "Last name is required");
      isValid = false;
    }

    if (!mobile) {
      showError("mobileNumber", "Mobile number is required");
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      showError("mobileNumber", "Enter a valid 10-digit number");
      isValid = false;
    }

    if (!email) {
      showError("emailId", "Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("emailId", "Enter a valid email");
      isValid = false;
    }

    if (!status) {
      showError("trueRadio", "Select a business status"); // Attach to first radio
      isValid = false;
    } else if (status.value === "yes" && !businessName) {
      showError("businessName", "Enter your business name");
      isValid = false;
    }

    if (!sector) {
      showError("sectorInterest", "Please select a sector");
      isValid = false;
    }

    if (!timeline) {
      showError("timeline", "Please enter your business start timeline");
      isValid = false;
    }

    if (!investment) {
      showError("investment", "Enter your investment capacity");
      isValid = false;
    }

    mfirstName = firstName;
    mlastName = lastName;
    mmobile = mobile;
    memail = email;
    mstatus = status;
    mbusinessName = businessName;
    msector = sector;
    mtimeline = timeline;
    minvestment = investment;

    return isValid;
  }

  function validateStepTwo() {
    let isValid = true;

    const date = document.getElementById("selectedDate").value;
    const slot = document.getElementById("selectedSlot").value;
    const members = document.getElementById("members").value;

    if (!date) {
      showError("selectedDate", "Please select a date");
      isValid = false;
    }

    if (!slot) {
      showError("selectedSlot", "Please select a slot");
      isValid = false;
    }

    if (!members) {
      showError("selectedSlot", "Please select a members");
      isValid = false;
    }

    mdate = date;
    mslot = slot;
    mmembers = members;

    return isValid;
  }
});
