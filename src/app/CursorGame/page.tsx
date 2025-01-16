"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export const CursorGame = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCirclePosition((prevPosition) => ({
        x: prevPosition.x + (mousePosition.x - prevPosition.x) * 0.1,
        y: prevPosition.y + (mousePosition.y - prevPosition.y) * 0.1,
      }));
    }, 16);

    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
        overflow: "hidden",
        position: "relative",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          top: "20px",
        }}
      >
        追従する赤い丸
      </Typography>
      <Box
        sx={{
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          left: circlePosition.x,
          top: circlePosition.y,
        }}
      />
    </Box>
  );
};

export default CursorGame;
