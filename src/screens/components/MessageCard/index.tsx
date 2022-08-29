import React from "react";
import { Avatar } from "../Avatar";
import { BadgeText, Container, MessageBadge, MessageDetails, MessageHour, MessageInfo, MessagePreview, Username } from "./styles";

export const MessageCard = () => {
  return (
    <Container>
      <Avatar size='large' />

      <MessageDetails>
        <Username>
          Gabriel Silva
        </Username>
        <MessagePreview>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </MessagePreview>
      </MessageDetails>

      <MessageInfo>
        <MessageHour>12:48 PM</MessageHour>
        <MessageBadge>
          <BadgeText>2</BadgeText>
        </MessageBadge>
      </MessageInfo>
    </Container>
  );
}