'use client'

import Image from "next/image";
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material"
import { Content } from "next/font/google";

export default function Home() {
  const [chatMessages, setChatMessages] = useState([{
    role: "assistant",
    content: "Hi, I am  a career advisor chat bot and am here to provide advice on various career-related topics."
  }, {
    role: "user",
    content: "hello there"
  }]);
  const [userMessage, setUserMessage] = useState("");

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        height="700px"
        width="600px"
        direction="column"
        border="1px solid #ccc"
        borderRadius="8px"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        overflowY="auto"
        spacing={2}
      >
        <Box
          height="100px"
          width="100%"
          borderRadius="8px 8px 0 0"
          borderBottomRadius
          backgroundColor="#64B5F6"
          color="#fff"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom="5px">
          <Typography
            variant="h6"
          >
            AI Career Advisor Bot
          </Typography>
        </Box>
        {chatMessages.map((message, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent={message.role === "assistant" ? "flex-start" : "flex-end"}
            marginBottom="16px"
          >
            <Box
              maxWidth="70%"
              padding="16px"
              borderRadius="16px"
              marginRight={message.role === "user" ? "5px" : "0px"}
              marginLeft={message.role === "assistant" ? "5px" : "0px"}
              bgcolor={message.role === "assistant" ? "#fff" : "#90CAF9"}
              boxShadow={message.role = "assistant" ? '2px 2px 4px rgba(0, 0, 0, 0.1)' : '0 -2px 4px rgba(0, 0, 0, 0.1)'}>
              <Typography variant="body1">{message.content}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
