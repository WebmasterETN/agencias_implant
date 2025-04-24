export function toggleVisibility() {
  const iconMx = document.getElementById("Lanaguage-Icon-Mx");
  const iconUs = document.getElementById("Lanaguage-Icon-US");

  if (iconMx.classList.contains("d-none")) {
      iconMx.classList.remove("d-none");
      iconMx.classList.add("d-inline-block");
      iconUs.classList.remove("d-inline-block");
      iconUs.classList.add("d-none");
  } else {
      iconMx.classList.remove("d-inline-block");
      iconMx.classList.add("d-none");
      iconUs.classList.remove("d-none");
      iconUs.classList.add("d-inline-block");
  }
}
