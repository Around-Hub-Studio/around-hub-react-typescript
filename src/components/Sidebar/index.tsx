import styled from '@emotion/styled';

const Container = styled.aside`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Menu = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
`;

const MenuLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #4285f4;
  }
`;

const Info = styled.div`
  margin-top: 30px;
`;

const InfoTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const InfoText = styled.p`
  font-size: 16px;
`;

export const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <MenuItem>
          <MenuLink href='#'>Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='#'>About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='#'>Services</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href='#'>Contact</MenuLink>
        </MenuItem>
      </Menu>
      <Info>
        <InfoTitle>Follow Us</InfoTitle>
        <InfoText>Stay connected with us</InfoText>
      </Info>
    </Container>
  );
};
