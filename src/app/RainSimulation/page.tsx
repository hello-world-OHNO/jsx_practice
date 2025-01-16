"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

interface Raindrop {
  id: number;
  x: number;
  y: number;
  speed: number;
}

export const RainSimulation = () => {
  const [raindrops, setRaindrops] = useState<Raindrop[]>([]);

  // 定期的に雨粒を動かす
  useEffect(() => {
    const interval = setInterval(() => {
      setRaindrops(
        (drops) =>
          drops
            .map((drop) => ({ ...drop, y: drop.y + drop.speed })) // 雨粒を下に移動
            .filter((drop) => drop.y < window.innerHeight) // 画面外に出た雨粒を削除
      );
    }, 30); // 更新間隔
    return () => clearInterval(interval);
  }, []);

  // 画面をクリックしたら雨粒を追加
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const newRaindrop: Raindrop = {
      id: Date.now(),
      x: event.clientX,
      y: event.clientY,
      speed: Math.random() * 5 + 2,
    };
    setRaindrops((drops) => [...drops, newRaindrop]);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#001f3f",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {raindrops.map((drop) => (
        <Box
          key={drop.id}
          sx={{
            position: "absolute",
            left: drop.x,
            top: drop.y,
            width: "5px",
            height: "10px",
            backgroundColor: "#00aced",
            borderRadius: "50%",
          }}
        />
      ))}
    </Box>
  );
};

export default RainSimulation;
