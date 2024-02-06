import styled from '@emotion/styled';

const Container = styled.header`
  background-color: #4285f4;
  color: #fff;
  padding: 20px;
`;

const Logo = styled.img`
  width: 150px;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <Container>
      <Logo src='https://via.placeholder.com/150' alt='Logo' />
      <Nav>
        <NavLink href='#'>Home</NavLink>
        <NavLink href='#'>About</NavLink>
        <NavLink href='#'>Services</NavLink>
        <NavLink href='#'>Contact</NavLink>
      </Nav>
    </Container>
  );
};
