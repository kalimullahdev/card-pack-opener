// Particle FX Engine for Card Pack Opening & Celebrations

class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.shockwaves = [];
    this.running = false;
    this.resize();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.loop();
    }
  }

  // Foil Shards from tearing open the wrapper
  spawnFoilFlakes(x, y, count = 35) {
    this.start();
    const colors = ['#f8fafc', '#e2e8f0', '#94a3b8', '#38bdf8', '#fbbf24', '#f43f5e'];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * Math.random());
      const speed = 3 + Math.random() * 8;
      this.particles.push({
        type: 'foil',
        x: x + (Math.random() * 120 - 60),
        y: y + (Math.random() * 20 - 10),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: 3 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.3,
        alpha: 1,
        decay: 0.015 + Math.random() * 0.02,
        gravity: 0.15
      });
    }
  }

  // Massive Rarity Reveal Explosion
  spawnRarityBurst(x, y, rarity, theme) {
    this.start();

    // Shockwave ring
    this.shockwaves.push({
      x,
      y,
      radius: 10,
      maxRadius: 280,
      color: theme.primary || '#60a5fa',
      alpha: 1,
      speed: 12
    });

    let count = 70;
    if (rarity === 'epic') count = 110;
    if (rarity === 'legendary') count = 160;
    if (rarity === 'mythic') count = 240;

    const palette = [
      theme.primary,
      theme.secondary,
      theme.accent,
      '#ffffff',
      '#fef08a'
    ];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * (rarity === 'mythic' ? 14 : 10);
      const isStar = Math.random() > 0.4;

      this.particles.push({
        type: isStar ? 'star' : 'spark',
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: (isStar ? 4 : 2.5) + Math.random() * 4,
        color: palette[Math.floor(Math.random() * palette.length)],
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2,
        alpha: 1,
        decay: 0.008 + Math.random() * 0.015,
        gravity: 0.08,
        drag: 0.98
      });
    }
  }

  loop() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update & draw shockwaves
    for (let i = this.shockwaves.length - 1; i >= 0; i--) {
      const sw = this.shockwaves[i];
      sw.radius += sw.speed;
      sw.alpha = Math.max(0, 1 - (sw.radius / sw.maxRadius));

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
      this.ctx.strokeStyle = sw.color;
      this.ctx.lineWidth = 4 * sw.alpha;
      this.ctx.globalAlpha = sw.alpha * 0.8;
      this.ctx.shadowBlur = 15;
      this.ctx.shadowColor = sw.color;
      this.ctx.stroke();
      this.ctx.restore();

      if (sw.radius >= sw.maxRadius || sw.alpha <= 0) {
        this.shockwaves.splice(i, 1);
      }
    }

    // Update & draw particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      if (p.drag) {
        p.vx *= p.drag;
        p.vy *= p.drag;
      }
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > this.height + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.globalAlpha = Math.max(0, p.alpha);
      this.ctx.fillStyle = p.color;

      if (p.type === 'foil') {
        // Metallic foil shard (diamond / polygon)
        this.ctx.beginPath();
        this.ctx.moveTo(-p.size, -p.size * 0.6);
        this.ctx.lineTo(p.size, -p.size * 0.4);
        this.ctx.lineTo(p.size * 0.7, p.size * 0.8);
        this.ctx.lineTo(-p.size * 0.5, p.size * 0.6);
        this.ctx.closePath();
        this.ctx.fill();
      } else if (p.type === 'star') {
        // 4-point sparkle star
        const s = p.size;
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = p.color;
        this.ctx.beginPath();
        this.ctx.moveTo(0, -s * 1.5);
        this.ctx.quadraticCurveTo(0, 0, s * 1.5, 0);
        this.ctx.quadraticCurveTo(0, 0, 0, s * 1.5);
        this.ctx.quadraticCurveTo(0, 0, -s * 1.5, 0);
        this.ctx.quadraticCurveTo(0, 0, 0, -s * 1.5);
        this.ctx.fill();
      } else {
        // Circular glowing spark
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = p.color;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0 || this.shockwaves.length > 0) {
      requestAnimationFrame(() => this.loop());
    } else {
      this.running = false;
    }
  }
}
