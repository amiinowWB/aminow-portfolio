// Galaxy 3D Background
const canvas = document.getElementById("galaxy");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: canvas, alpha:true});
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Galaxy points
const geometry = new THREE.BufferGeometry();
const vertices = [];
for(let i=0;i<5000;i++){
    const x=(Math.random()-0.5)*50;
    const y=(Math.random()-0.5)*50;
    const z=(Math.random()-0.5)*50;
    vertices.push(x,y,z);
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices,3));

const material = new THREE.PointsMaterial({color:0x3a86ff, size:0.05});
const points = new THREE.Points(geometry, material);
scene.add(points);

function animate(){
    requestAnimationFrame(animate);
    points.rotation.x += 0.0005;
    points.rotation.y += 0.001;
    renderer.render(scene,camera);
}
animate();

// Cursor with trail
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{
cursor.style.left = e.pageX + "px";
cursor.style.top = e.pageY + "px";
});

// Scroll to Portfolio
function scrollPortfolio(){
document.getElementById("portfolio").scrollIntoView({
behavior:"smooth"
});

// Animate skill bars
document.querySelectorAll('.skill-fill').forEach(bar=>{
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
});
}