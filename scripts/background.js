document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    let animationFrame;

    function initMatrix() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);

        const fontSize = 18;
        const cols = Math.floor(window.innerWidth / fontSize);
        const drops = new Array(cols).fill(1);

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#008CC1';
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((drop, i) => {
                if (drop * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                const char = String.fromCharCode(0x2800 + Math.random() * 256);
                ctx.fillText(char, i * fontSize, drop * fontSize);
                drops[i]++;
            });

            animationFrame = requestAnimationFrame(draw);
        }

        draw();
    }

    function handleResize() {
        cancelAnimationFrame(animationFrame);
        initMatrix();
    }

    window.addEventListener('resize', handleResize);
    initMatrix();
});