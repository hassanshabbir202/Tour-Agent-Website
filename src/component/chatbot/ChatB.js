import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const steps = [
  {
    id: "0",
    message: "Welcome to Travel Agent Bot! How can I assist you today?",
    trigger: "options",
  },
  {
    id: "options",
    options: [
      { value: 1, label: "Book a Flight", trigger: "flight" },
      { value: 2, label: "Book a Hotel", trigger: "hotel" },
      { value: 3, label: "Find Vacation Packages", trigger: "packages" },
    ],
  },
  {
    id: "flight",
    message: "Great! Let's book a flight for you.",
    trigger: "end",
  },
  {
    id: "hotel",
    message: "Sure! Let's find you a hotel.",
    trigger: "end",
  },
  {
    id: "packages",
    message: "Awesome! Let's explore some vacation packages.",
    trigger: "end",
  },
  {
    id: "end",
    message: "Thank you for using Travel Agent Bot. Have a great day!",
    end: true,
  },
  {
    id: "user_input",
    message: "Please type your question or request:",
    trigger: "user_response",
  },
  {
    id: "user_response",
    user: true,
    trigger: "end", // Assuming user response ends the conversation
  },
];

const theme = {
  background: "#fff79c",
  fontFamily: "Arial, sans-serif",
  headerBgColor: "#ffa400",
  headerFontColor: "#FFFFFF", // Change header text color to white
  headerTitle: "#FFFFFF", // Change header text color to white
  headerFontSize: "22px",
  botBubbleColor: "#ffa400",
  botFontColor: "#FFFFFF",
  userBubbleColor: "#F4F4F4",
  userFontColor: "#4A4A4A",
};

const config = {
  width: "400px",
  height: "500px",
  botAvatar:
    "https://cdn.dribbble.com/users/587589/screenshots/11244192/carter_2_300_perc.png",
  floating: true,
};

const TravelAgentChatbot = () => {
  return (
    <div className="chatbot">
      <ThemeProvider theme={theme}>
        <ChatBot headerTitle="ADVENTURE EASE" steps={steps} {...config} />
      </ThemeProvider>
    </div>
  );
};

export default TravelAgentChatbot;
