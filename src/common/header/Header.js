import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, InputBase,
    MenuItem, Menu } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import Profile from '../../screens/profile/Profile';
import { Link } from 'react-router-dom';


const styles = theme => ({
    grow: {
        flexGrow: 1,
    },
    title: {
        color: 'initial',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    search: {
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#c0c0c0',
        marginLeft: '70%',
        width: '300px',
        verticalAlign: 'center',
    },
    searchIcon: {
        height: '100%',
        color: 'black',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },

});

class Header extends Component {

    constructor() {
        super();
        this.state = {
            menuIsOpen: false,
            ownerInfo: [],
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
    }

    profilePageLinkHandler = () => {
        ReactDOM.render(<Profile />, document.getElementById('root'));
    }

    logoutHandler = () => {
        sessionStorage.removeItem("access-token");
        this.setState({
            loggedIn: false
        });
    }

    openMenuHandler = () => {
        this.setState({
            menuIsOpen: true,
        });

    }

    closeMenuHandler = () => {
        this.setState({
            menuIsOpen: false
        });
    }

    //Accessing data from backend API 1
    componentWillMount() {
        this.setState({
            profileInfo: {
                username: 'mayank.upgrad',
                full_name: 'Mayank Yadav',
                profile_picture: 'https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic-300x300.png'
            }
        });
    }

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>

                        <div>
                            <Typography className={{ color: "app-logo" }} variant="h6" noWrap>Image Viewer</Typography>
                        </div>


                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="        Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        {<Avatar className="avatar">
                            <img aria-controls="simpleMenu" onClick={this.openMenuHandler} src={this.state.ownerInfo.profile_picture} alt={"logo"} /></Avatar>}
                        <div>
                            <Menu
                                id="menu-appbar"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={this.state.menuIsOpen}
                                onClose={this.closeMenuHandler}

                            >
                                <Link to='/profile'>
                                    <MenuItem >My Account</MenuItem></Link><hr />
                                <Link to='/'>
                                    <MenuItem onClick={this.logoutHandler}>Logout</MenuItem></Link>
                            </Menu>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);