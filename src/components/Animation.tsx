import React, { useEffect } from 'react';

const AnimationComponent: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById("animation") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    const updateCanvasSize = () => {
      const w = canvas.width = window.innerWidth;
      const h = canvas.height = window.innerHeight;
      return { w, h };
    };

    const lines: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      length: number;
      width: number;
      v1: number;
      v2: number;
      half: boolean;
      hue: number;
    }[] = [];
    
    const conf = {
      hue: 5,
      shadow: false,
      width: 1,
      length: 1,
      emitNum: 2,
      speed: 1,
      opacity: 0.6,
      maxLines: 300,
    };

    const bgDots = [
      {
        rad: (updateCanvasSize().w + updateCanvasSize().h) / 2,
        x: updateCanvasSize().w / 2,
        y: 0,
        hue: 0,
      },
      {
        rad: (updateCanvasSize().w + updateCanvasSize().h) / 2,
        x: 0,
        y: updateCanvasSize().h,
        hue: -45,
      },
      {
        rad: (updateCanvasSize().w + updateCanvasSize().h) / 2,
        x: updateCanvasSize().w,
        y: updateCanvasSize().h,
        hue: -90,
      }
    ];

    const emitLine = () => {
      if (conf.maxLines < lines.length) return;
      for (let i = 0; i < conf.emitNum; i++) {
        const rx = Math.random() * updateCanvasSize().w + 100;
        const ry = Math.random() * updateCanvasSize().h - 100;
        lines.push({
          x1: rx,
          y1: ry,
          x2: rx,
          y2: ry,
          length: (Math.random() * (260 - 80) + 80) * conf.length,
          width: (Math.random() * (15 - 5) + 5) * conf.width,
          v1: (Math.random() * (4 - 2) + 2) * conf.speed,
          v2: (Math.random() * (1 - 0.5) + 0.5) * conf.speed,
          half: false,
          hue: Math.random() * 50
        });
      }
    };

    const drawBackground = () => {
      ctx!.globalCompositeOperation = "lighter";
      for (let i = 0; i < bgDots.length; i++) {
        const grd = ctx!.createRadialGradient(bgDots[i].x, bgDots[i].y, 0, bgDots[i].x, bgDots[i].y, bgDots[i].rad);
        grd.addColorStop(0, `hsla(${conf.hue + bgDots[i].hue}, 100%, 60%, 0.3)`);
        grd.addColorStop(1, `hsla(${conf.hue + bgDots[i].hue}, 100%, 50%, 0)`);
        ctx!.beginPath();
        ctx!.arc(bgDots[i].x, bgDots[i].y, bgDots[i].rad, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();
        ctx!.closePath();
      }
    };

    const drawLines = () => {
      ctx!.globalCompositeOperation = "lighter";
      for (let i = 0; i < lines.length; i++) {
        ctx!.lineWidth = lines[i].width;
        ctx!.beginPath();
        ctx!.moveTo(lines[i].x1, lines[i].y1);
        ctx!.lineTo(lines[i].x2, lines[i].y2);
        ctx!.strokeStyle = `hsla(${conf.hue - lines[i].hue}, 100%, 50%, ${conf.opacity})`;
        ctx!.lineCap = "round";
        ctx!.stroke();
        ctx!.closePath();

        if (lines[i].half === false) {
          lines[i].x1 -= lines[i].v1;
          lines[i].y1 += lines[i].v1;
          lines[i].x2 -= lines[i].v2;
          lines[i].y2 += lines[i].v2;
          if (dist(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2) > lines[i].length) {
            lines[i].half = true;
          }
        } else {
          lines[i].x1 -= lines[i].v2;
          lines[i].y1 += lines[i].v2;
          lines[i].x2 -= lines[i].v1;
          lines[i].y2 += lines[i].v1;
        }
      }
    };

    const clear = () => {
      ctx!.globalCompositeOperation = "source-over";
      ctx!.beginPath();
      ctx!.fillStyle = "#000";
      ctx!.fillRect(0, 0, updateCanvasSize().w, updateCanvasSize().h);
      ctx!.closePath();
    };

    const checkLines = () => {
      emitLine();
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].half === true && dist(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2) <= 10) {
          lines[i] = lines[lines.length - 1];
          lines.pop();
        } else if (lines[i].x1 < 0 && lines[i].x2 < 0 && lines[i].y1 > updateCanvasSize().h && lines[i].y2 > updateCanvasSize().h) {
          lines[i] = lines[lines.length - 1];
          lines.pop();
        }
      }
    };

    const generateLines = setInterval(checkLines, 10);

    const dist = (x1: number, y1: number, x2: number, y2: number) => {
      return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    };

    const render = () => {
      clear();
      drawBackground();
      drawLines();
      requestAnimationFrame(render);
    };
    render();

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(generateLines);
    };
  }, []);

  return (
    <canvas id="animation"></canvas>
  );
};

export default AnimationComponent;
