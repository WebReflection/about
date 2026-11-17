const canvas = document.querySelector('.site-backdrop');
const context = canvas instanceof HTMLCanvasElement ? canvas.getContext('2d') : null;

if (context) {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const slowUpdates = matchMedia('(update: slow)');
  const darkScheme = matchMedia('(prefers-color-scheme: dark)');
  const frameTime = 1000 / 30;
  const dotAlpha = 0.4;
  const lineAlpha = 0.13;
  const margin = 20;

  let width = 0;
  let height = 0;
  let points = [];
  let raf = 0;
  let last = 0;
  let resizeRaf = 0;
  let started = false;
  let current = { r: 88, g: 166, b: 255 };
  const target = { r: 88, g: 166, b: 255 };

  const parseColor = (value) => {
    const color = value.trim();

    if (color.startsWith('#')) {
      const hex = color.slice(1);
      const expanded = hex.length === 3
        ? hex.split('').map((char) => char + char).join('')
        : hex;
      const number = parseInt(expanded, 16);

      return Number.isNaN(number) ? null : {
        r: (number >> 16) & 255,
        g: (number >> 8) & 255,
        b: number & 255
      };
    }

    const [r, g, b] = (color.match(/\d+(?:\.\d+)?/g) || []).map(Number);

    return r === undefined ? null : { r: r | 0, g: g | 0, b: b | 0 };
  };

  const readColors = () => {
    const color = parseColor(
      getComputedStyle(document.documentElement).getPropertyValue('--link')
    );

    if (!color) return;

    target.r = color.r;
    target.g = color.g;
    target.b = color.b;

    if (started && isStatic()) {
      current = { ...target };
      draw(0, false);
    }
  };

  const isStatic = () => reduceMotion.matches || slowUpdates.matches;

  const resize = () => {
    width = canvas.clientWidth || innerWidth;
    height = canvas.clientHeight || innerHeight;

    const dpr = Math.min(devicePixelRatio || 1, width < 700 ? 1.25 : 1.5);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(12, Math.min(36, Math.round((width * height) / 34000)));

    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.5) * 14,
      radius: Math.random() * 1.1 + 0.7
    }));
  };

  const draw = (elapsed, animate) => {
    context.clearRect(0, 0, width, height);

    if (animate) {
      for (const point of points) {
        point.x += point.vx * elapsed;
        point.y += point.vy * elapsed;

        if (point.x < -margin) point.x = width + margin;
        else if (point.x > width + margin) point.x = -margin;

        if (point.y < -margin) point.y = height + margin;
        else if (point.y > height + margin) point.y = -margin;
      }

      current.r += (target.r - current.r) * 0.1;
      current.g += (target.g - current.g) * 0.1;
      current.b += (target.b - current.b) * 0.1;
    }

    const limit = Math.min(145, Math.max(95, Math.hypot(width, height) * 0.09));
    const limitSquared = limit * limit;
    const red = Math.round(current.r);
    const green = Math.round(current.g);
    const blue = Math.round(current.b);

    context.lineWidth = 1;

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const from = points[i];
        const to = points[j];
        const dx = from.x - to.x;
        const dy = from.y - to.y;
        const distanceSquared = dx * dx + dy * dy;

        if (distanceSquared > limitSquared) continue;

        const alpha = (1 - Math.sqrt(distanceSquared) / limit) * lineAlpha;

        context.strokeStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        context.beginPath();
        context.moveTo(from.x, from.y);
        context.lineTo(to.x, to.y);
        context.stroke();
      }
    }

    context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${dotAlpha})`;
    context.beginPath();

    for (const point of points) {
      context.moveTo(point.x + point.radius, point.y);
      context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
    }

    context.fill();
  };

  const stop = () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };

  const frame = (now) => {
    if (document.visibilityState === 'hidden') {
      raf = 0;
      return;
    }

    if (now - last < frameTime) {
      raf = requestAnimationFrame(frame);
      return;
    }

    const elapsed = Math.min((now - last) / 1000, 0.1);

    last = now;
    draw(elapsed, true);
    raf = requestAnimationFrame(frame);
  };

  const start = () => {
    if (!started || raf || document.visibilityState === 'hidden') return;

    if (isStatic()) {
      draw(0, false);
      return;
    }

    last = performance.now();
    raf = requestAnimationFrame(frame);
  };

  const restart = () => {
    stop();
    start();
  };

  addEventListener('resize', () => {
    if (resizeRaf) return;

    resizeRaf = requestAnimationFrame(() => {
      resizeRaf = 0;

      if (!started) return;

      resize();
      draw(0, false);
      restart();
    });
  }, { passive: true });

  addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') stop();
    else start();
  });

  reduceMotion.addEventListener('change', restart);
  slowUpdates.addEventListener('change', restart);
  darkScheme.addEventListener('change', readColors);

  new MutationObserver(readColors).observe(document.documentElement, {
    attributeFilter: ['data-theme'],
    attributes: true
  });

  readColors();
  current = { ...target };
  resize();
  draw(0, false);
  started = true;
  start();
}
