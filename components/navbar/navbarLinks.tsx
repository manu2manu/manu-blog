import MenuItemLink from "./MenuItemLink";
import { NavLinksWrapper } from "./navbar.style";

function NavbarLinks() {
  return (
    <NavLinksWrapper>
      <MenuItemLink href="/blog" key="blog">Blog</MenuItemLink>
      <MenuItemLink href="/blog" key="news">News</MenuItemLink>
    </NavLinksWrapper>
  );
}

export default NavbarLinks;