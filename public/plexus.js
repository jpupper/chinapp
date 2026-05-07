// --- EFECTO PLEXUS INTERACTIVO ---

const canvas = document.createElement('canvas');
canvas.id = 'plexus-bg';
// Insertar el canvas al principio del body
document.body.prepend(canvas);

const ctx = canvas.getContext('2d');
let width, height;
let particles = [];

// Configuración de partículas
const colors = ['#C8102E', '#F1C40F']; // Rojo bandera y Dorado chino
const particleCount = 100;
const maxDistance = 150;

// Interacción con el mouse
let mouse = {
    x: null,
    y: null,
    radius: 150
};

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
});

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Velocidad aleatoria lenta
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = (Math.random() - 0.5) * 1.2;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Rebote en los bordes
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interacción: alejarse del mouse
        if (mouse.x != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                // Fuerza inversamente proporcional a la distancia
                const force = (mouse.radius - distance) / mouse.radius;
                
                this.x -= forceDirectionX * force * 3;
                this.y -= forceDirectionY * force * 3;
            }
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function init() {
    resize();
    window.addEventListener('resize', resize);
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    animate();
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Comprobar colisiones para trazar líneas
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                
                const alpha = 1 - dist / maxDistance;
                
                // Si alguna partícula es dorada, la línea es dorada. Si no, roja.
                if (particles[i].color === '#F1C40F' || particles[j].color === '#F1C40F') {
                    ctx.strokeStyle = `rgba(241, 196, 15, ${alpha * 0.4})`; 
                } else {
                    ctx.strokeStyle = `rgba(200, 16, 46, ${alpha * 0.3})`;
                }
                
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}

// Iniciar al cargar
init();