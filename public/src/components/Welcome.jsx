import React from "react";
import styled from "styled-components";
import Robot from "../assests/robot.gif";
export default function Welcome( {currentUser}) {
 
  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>
        Welcome, {currentUser.username}!
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
 
`; 
