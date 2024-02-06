import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SocialMediaLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Around Hub Studio. All rights reserved.</FooterText>
      <div>
        <SocialMediaLink href='#'>Facebook</SocialMediaLink>
        <SocialMediaLink href='#'>Twitter</SocialMediaLink>
        <SocialMediaLink href='#'>Instagram</SocialMediaLink>
      </div>
    </FooterContainer>
  );
};
