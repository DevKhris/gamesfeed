export function themeToggle(mode, setMode) {
  const html = document.querySelector("html");
  if (mode === "dark") {
    html.classList.remove("dark");
    setMode("light");
  } else {
    html.classList.add("dark");
    setMode("dark");
  }
}
