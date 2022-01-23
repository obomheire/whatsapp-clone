import styled from "styled-components";
import ContactListComponents from "./Components/ContactListComponents";
import ConversationComponents from "./Components/ConversationComponents";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  wedth: 100%;
  background: #f8f9fb;
`;

function App() {
  return (
    <Container>
    <ContactListComponents />
    <ConversationComponents />
    </Container>
  );
}

export default App;
