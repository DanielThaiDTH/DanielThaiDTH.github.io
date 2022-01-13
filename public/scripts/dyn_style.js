/** Footer styling ************************************************************************************/

/**
 * Applies event listeners that ensure the correct styling for 
 * the footer form.
 * @param {HTMLElement} element 
 */
let applyFooterInputFocusStyle = (element) => {
    element.addEventListener("focusin", (ev) => {
        ev.target.style.backgroundColor = "#404069";
        ev.target.style.color = "white";
    });
    element.addEventListener("focusout", (ev) => {
        ev.target.style.backgroundColor = "#31318d";
        ev.target.style.color = "white";
    });
    
    if (element.id === "msgContent") {
        element.addEventListener("input", (ev) => {
            let sendButton = document.querySelector(".msg-button button");
            if (ev.target.value.length == 0) {
                sendButton.setAttribute('aria-disabled', 'true');
                sendButton.disabled = true;
                sendButton.setAttribute('tabindex', '-1');
            } else {
                sendButton.setAttribute('aria-disabled', 'false');
                sendButton.disabled = false;
                sendButton.setAttribute('tabindex', '0');
            }
        });
    }
};

let footerForms = document.querySelectorAll(".footer-form");
footerForms.forEach(applyFooterInputFocusStyle);


/** Send Message Script ********************************************************************************/

/**
 * Uses the content in the form the pre-fill the email in an email client. Prevents the default submission 
 * event in the form.
 * @param {Event} ev 
 */
let prepareMessage = (ev) => {
    const name = "daniel.thai.can";
    const domain = "gmail.com";
    let action = "mailto:" + name + "@" + domain + "?subject=" + ev.target.subject.value + "&body=" + encodeURIComponent(ev.target.msgContent.value);
    window.location.href = action;
    ev.preventDefault();
};

let sendForm = document.querySelector("#sendMsg");
sendForm.onsubmit = prepareMessage;
// sendButton.addEventListener("submit", prepareMessage);


