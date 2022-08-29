import styled from 'styled-components/native';

export const Container = styled.View`
  height: 85px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  padding: 0px 15px;
  margin: 3px 10px;
`;

export const MessageDetails = styled.View`
  flex: 3;
  padding-left: 5px;
`;

export const MessageInfo = styled.View`
  flex: 1;
  height: 100%;
  align-items: flex-end;
  padding: 15px 0px;
  justify-content: space-between;
`;

export const Username = styled.Text`
  font-size: 15px;
`;

export const MessagePreview = styled.Text`
  font-size: 11px;
  margin-top: 3px;
  text-overflow: ellipsis;
`;

export const MessageHour = styled.Text`
  font-size: 12px;
  color: #d1d1d1;
  font-weight: 700;
`;

export const MessageBadge = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #2b3fec;
  align-items: center;
  justify-content: center;
`;

export const BadgeText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
`
