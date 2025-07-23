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
    class="flex flex-col lg:flex-row  rounded-2xl shadow-md overflow-hidden bg-[#eaedf3] w-[500px] relative">
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
    <div class="bg-white w-full" style="height: calc(100vh - 100px);">
     <iframe aria-label='Franchise world expo-2025' frameborder="0" style="height:100%;width:100%;border:none;" src='https://forms.zohopublic.com/ebikegohyd1/form/Franchiseworldexpo2025/formperma/rnKWqcbWOPrf4K7TCX-D4vdYnLRSX3LKxneQpXJWhqU'></iframe>
    </div>
  </div>
</div>
`;

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
        const spinner = document.querySelector(".loading-spinner");
        const btnText = document.querySelector(".btn-text");

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
              fetch(
                "https://apiexpo.franchiseworld.com/api/ticket/confirm-payment",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(payload),
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log("Payment confirmed and data saved!", data);
                  window.location.href = "thank-you.html";
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

        function getQueryParam(name) {
          name = name.replace(/[\[\]]/g, "\\$&");
          let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(window.location.href);
          if (!results) return null;
          if (!results[2]) return '';
          return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        bookTicket.addEventListener("click", function () {
          if (validateStepTwo()) {
            bookTicket.disabled = true;
            spinner.classList.remove("hidden");
            btnText.style.display = "none";
            axios
              .post("https://apiexpo.franchiseworld.com/api/ticket/book", {
                name: mfirstName + " " + mlastName,
                email: memail,
                mobile: `+91-${mmobile}`,
                members: 1,
                current_business_status: mstatus?.value,
                current_business_name: mbusinessName,
                sector_interest: msector,
                timeline_for_starting_business: mtimeline,
                investment_capability: minvestment,
                slote: mslot,
                sloteDate: mdate,
                SingleLine10: getQueryParam('utm_campaign'),
                SingleLine9: getQueryParam('utm_source'),
                SingleLine11: getQueryParam('utm_content'),
                SingleLine12: getQueryParam('utm_medium'),

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
    // const members = document.getElementById("members").value;

    if (!date) {
      showError("selectedDate", "Please select a date");
      isValid = false;
    }

    if (!slot) {
      showError("selectedSlot", "Please select a slot");
      isValid = false;
    }

    // if (!members) {
    //   showError("selectedSlot", "Please select a members");
    //   isValid = false;
    // }

    mdate = date;
    mslot = slot;
    // mmembers = members;

    return isValid;
  }
});
