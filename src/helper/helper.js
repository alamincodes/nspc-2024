export const handleDropdown = (e) => {
  const target = e.currentTarget;
  const arrow = target.lastElementChild;
  const parent = target.parentElement;
  const dropdown = parent.lastElementChild;

  if (target.dataset.dropdown === "active") {
    target.classList.remove(
      "border-y-[1px]",
      "text-primary",
      "relative",
      "border-r-4",
      "border-r-primary"
    );
    dropdown.style.height = "0px";
    target.dataset.dropdown = "inactive";
    arrow.style.transform = "rotate(-90deg)";
  } else {
    target.classList.add(
      "border-y-[1px]",
      "text-primary",
      "relative",
      "border-r-4",
      "border-r-primary"
    );
    dropdown.style.height = dropdown.scrollHeight + "px";
    target.dataset.dropdown = "active";
    arrow.style.transform = "rotate(0deg)";
  }
};
