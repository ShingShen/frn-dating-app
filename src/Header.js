import React from "react";
import "./Header.css";
import Shemshen from "./images/shemshen.png"
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className='header'>

            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header_iosicon" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize="large" className="header_icon" />
                </IconButton>
            )}

            <Link to="/">
                <img
                    className='header_logo'
                    src={Shemshen}
                    alt='shemshen'
                />
            </Link>

            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header_icon" />
                </IconButton>
            </Link>

        </div>
    );
}

export default Header;
