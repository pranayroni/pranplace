let mouseX = 0;
let mouseY = 0;

// Add smooth transition to all layers on page load
document.querySelectorAll('.layer').forEach(layer => {
  layer.style.transition = 'transform 0.05s linear';
});

document.addEventListener("mousemove", (e) => {
  // Use requestAnimationFrame to handle the update in the next frame
  requestAnimationFrame(() => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    
    document.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');
      
      const x = (window.innerWidth - mouseX * speed) / 100;
      const y = (window.innerHeight - mouseY * speed) / 100;
      
      layer.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
});