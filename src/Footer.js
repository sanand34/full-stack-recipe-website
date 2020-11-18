import React from "react";
import "./footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { IconButton } from "@material-ui/core";
function Footer() {
  return (
    <div className="footer">
      <IconButton
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100006097277652"
      >
        <FacebookIcon style={{ width: "100px", height: "100px" }} />
      </IconButton>
      <IconButton target="_blank" href="https://www.instagram.com/sanand_22/">
        <InstagramIcon style={{ width: "100px", height: "100px" }} />
      </IconButton>
    </div>
  );
}

export default Footer;
