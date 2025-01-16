"use client";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Typography
        onClick={() => router.push("/CursorGame")}
        sx={{
          cursor: "pointer",
          color: "blue",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        CursorGame
      </Typography>
      <Typography
        onClick={() => router.push("/RainSimulation")}
        sx={{
          cursor: "pointer",
          color: "blue",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        RainSimulation
      </Typography>
    </>
  );
}
