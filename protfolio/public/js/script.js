window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("model-container");
  if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();

    const canvas = document.createElement('canvas');
    canvas.width = 556;
    canvas.height = 556;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 556, 556);
    gradient.addColorStop(0, '#00ffcc');
    gradient.addColorStop(1, '#6600ff');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 556, 556);
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.MeshBasicMaterial({ map: texture });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 3;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();
  }
});