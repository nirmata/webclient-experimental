import styled from "styled-components";
import NirmataLogo from "../../assets/nirmata-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo loading="lazy" src={NirmataLogo} />
      </Link>
      <LinksContainer>
        <ExternalLink href="https://docs.nirmata.io/">Docs</ExternalLink>
        <ExternalLink href="#">Support</ExternalLink>
        <Link to="/profile">
          <ExternalLink>Himanshu Malviya</ExternalLink>
        </Link>
        <Profile>NPM</Profile>
      </LinksContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  justify-content: space-between;
  box-shadow: 0px -1px 0px 0px #f0f0f0 inset;
  background-color: #29417a;
  display: flex;
  gap: 20px;
  font-weight: 400;
  padding: 0 16px 0 20px;
`;

const Logo = styled.img`
  aspect-ratio: 3.13;
  object-fit: auto;
  object-position: center;
  width: 117px;
  align-self: start;
  margin-top: 5px;
  max-width: 100%;
`;

const LinksContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-top: 4px;
  gap: 16px;
  padding: 4px 0 4px 11px;
`;

const Profile = styled.div`
  justify-content: center;
  border-radius: 16px;
  background-color: #fff;
  align-self: stretch;
  color: #1d39c4;
  white-space: nowrap;
  text-align: center;
  margin: auto 0;
  padding: 4px 8px;
`;

const ExternalLink = styled.a`
  color: #fff;
  margin: auto 0;
  text-decoration: none;
`;

export default Header;
