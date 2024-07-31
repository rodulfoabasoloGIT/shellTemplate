import { fcFunction } from "./functions.js";
import { templateValueFunct, newIssueFunct } from "./templates.js";


const templateSelect = document.getElementById("templateSelector")


document.addEventListener("DOMContentLoaded", () => {
  templateValueFunct()
  newIssueFunct()

  const newIssueBtn = document.getElementById("newIssue")
  if(newIssueBtn) {
    newIssueBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
        newIssueFunct()
    })
  }
})

if(templateSelect) {
  templateSelect.addEventListener("change", (e) => {
    const selectedTemplate = e.currentTarget.value
    setTimeout(() => {
      document.getElementById("testButton").addEventListener("click", () => {
        switch (selectedTemplate) {
          case "fcTemplate":
            fcFunction()
            break;
          default:
            break;
        }
        Swal.fire({
          title: "Good job!",
          text: "Template copied!",
          icon: "success"
        });
      })
    }, 0);
  })
}


