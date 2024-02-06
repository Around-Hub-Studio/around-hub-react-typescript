import styled from '@emotion/styled';

const Container = styled.section`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
`;

export const Example2 = () => {
  return (
    <Container>
      <Title>Example 2</Title>
      <Content>
        <Card>
          <Image
            src='https://via.placeholder.com/250'
            alt='Placeholder Image'
          />
          <Text>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Text>
        </Card>
        <Card>
          <Image
            src='https://via.placeholder.com/250'
            alt='Placeholder Image'
          />
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Text>
        </Card>
      </Content>
    </Container>
  );
};
