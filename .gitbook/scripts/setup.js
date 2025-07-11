// GitBook React Docs - Interactive Features
document.addEventListener('DOMContentLoaded', () => {
  // Copy button functionality for code blocks
  document.querySelectorAll('pre').forEach(pre => {
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.textContent = 'Copy';
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.textContent);
      button.textContent = 'Copied!';
      setTimeout(() => button.textContent = 'Copy', 2000);
    });
    pre.appendChild(button);
  });
});
