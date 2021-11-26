import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Contact
          </LinkTitle>
          <LinkItem href="mailto:georgesanchez.diazjr@gmail.com">Email Me
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <CompanyContainer>
          <Slogan> &copy; 2020 Georges Sanchez</Slogan>
        </CompanyContainer>
        <SocialIcons href="">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
