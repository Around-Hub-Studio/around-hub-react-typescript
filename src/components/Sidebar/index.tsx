import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

const MenuLink = styled(Link)`
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
          <MenuLink to='/'>Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/about'>About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/example1'>Example1</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/example2'>Example2</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/blog-posts'>Blog Posts</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/photo'>Photo</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/todo'>TodoList</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to='/counter'>Counter</MenuLink>
        </MenuItem>
      </Menu>
      <Info>
        <InfoTitle>Follow Us</InfoTitle>
        <InfoText>Stay connected with us</InfoText>
      </Info>
    </Container>
  );
};
