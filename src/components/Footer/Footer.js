import React from 'react'
import { Link } from 'gatsby';
import { MainImage } from 'gatsby-plugin-image';
import './Footer.scss';

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer__nav__cnt">
        <div className="footer__slogan">
          <span>Ready to hit</span>
          <strong>the barrel?</strong>
        </div>
        <p className="footer__slogan__text">
          Get your gear and we'll meet at the beach. Aloha!
        </p>
        <div className="footer__social">
          <MainImage src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiNmZmZmZmY7Ij4gICAgPHBhdGggZD0iTTE1LDNDOC4zNzMsMywzLDguMzczLDMsMTVjMCw2LjAxNiw0LjQzMiwxMC45ODQsMTAuMjA2LDExLjg1MlYxOC4xOGgtMi45Njl2LTMuMTU0aDIuOTY5di0yLjA5OWMwLTMuNDc1LDEuNjkzLTUsNC41ODEtNSBjMS4zODMsMCwyLjExNSwwLjEwMywyLjQ2MSwwLjE0OXYyLjc1M2gtMS45N2MtMS4yMjYsMC0xLjY1NCwxLjE2My0xLjY1NCwyLjQ3M3YxLjcyNGgzLjU5M0wxOS43MywxOC4xOGgtMy4xMDZ2OC42OTcgQzIyLjQ4MSwyNi4wODMsMjcsMjEuMDc1LDI3LDE1QzI3LDguMzczLDIxLjYyNywzLDE1LDN6Ij48L3BhdGg+PC9zdmc+" alt="logo"/>
          <MainImage
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiNmZmZmZmY7Ij4gICAgPHBhdGggZD0iTSA5Ljk5ODA0NjkgMyBDIDYuMTM5MDQ2OSAzIDMgNi4xNDE5NTMxIDMgMTAuMDAxOTUzIEwgMyAyMC4wMDE5NTMgQyAzIDIzLjg2MDk1MyA2LjE0MTk1MzEgMjcgMTAuMDAxOTUzIDI3IEwgMjAuMDAxOTUzIDI3IEMgMjMuODYwOTUzIDI3IDI3IDIzLjg1ODA0NyAyNyAxOS45OTgwNDcgTCAyNyA5Ljk5ODA0NjkgQyAyNyA2LjEzOTA0NjkgMjMuODU4MDQ3IDMgMTkuOTk4MDQ3IDMgTCA5Ljk5ODA0NjkgMyB6IE0gMjIgNyBDIDIyLjU1MiA3IDIzIDcuNDQ4IDIzIDggQyAyMyA4LjU1MiAyMi41NTIgOSAyMiA5IEMgMjEuNDQ4IDkgMjEgOC41NTIgMjEgOCBDIDIxIDcuNDQ4IDIxLjQ0OCA3IDIyIDcgeiBNIDE1IDkgQyAxOC4zMDkgOSAyMSAxMS42OTEgMjEgMTUgQyAyMSAxOC4zMDkgMTguMzA5IDIxIDE1IDIxIEMgMTEuNjkxIDIxIDkgMTguMzA5IDkgMTUgQyA5IDExLjY5MSAxMS42OTEgOSAxNSA5IHogTSAxNSAxMSBBIDQgNCAwIDAgMCAxMSAxNSBBIDQgNCAwIDAgMCAxNSAxOSBBIDQgNCAwIDAgMCAxOSAxNSBBIDQgNCAwIDAgMCAxNSAxMSB6Ij48L3BhdGg+PC9zdmc+"
          />
          <MainImage
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiNmZmZmZmY7Ij4gICAgPHBhdGggZD0iTSAxNS4wMDM5MDYgMyBDIDguMzc0OTA2MiAzIDMgOC4zNzMgMyAxNSBDIDMgMjEuNjI3IDguMzc0OTA2MiAyNyAxNS4wMDM5MDYgMjcgQyAyNS4wMTM5MDYgMjcgMjcuMjY5MDc4IDE3LjcwNyAyNi4zMzAwNzggMTMgTCAyNSAxMyBMIDIyLjczMjQyMiAxMyBMIDE1IDEzIEwgMTUgMTcgTCAyMi43MzgyODEgMTcgQyAyMS44NDg3MDIgMjAuNDQ4MjUxIDE4LjcyNTk1NSAyMyAxNSAyMyBDIDEwLjU4MiAyMyA3IDE5LjQxOCA3IDE1IEMgNyAxMC41ODIgMTAuNTgyIDcgMTUgNyBDIDE3LjAwOSA3IDE4LjgzOTE0MSA3Ljc0NTc1IDIwLjI0NDE0MSA4Ljk2ODc1IEwgMjMuMDg1OTM4IDYuMTI4OTA2MiBDIDIwLjk1MTkzNyA0LjE4NDkwNjMgMTguMTE2OTA2IDMgMTUuMDAzOTA2IDMgeiI+PC9wYXRoPjwvc3ZnPg=="
          />
        </div>
        <div className="footer__nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/offer">Offer</Link>
          <Link to="/team">Staff</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/credits">Credits</Link>
        </div>
        <div className="footer__cpy">
          <span>&copy;tkmatuszewski 2022</span>
        </div>
        <div className="footer__sign">
          <span>Website by tkmatuszewski</span>
        </div>
      </div>
    </section>
  );
}
