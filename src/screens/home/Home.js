import React, { Component } from 'react';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../common/header/Header';
import hearticon from '../../assets/icon/hearticon.svg';
import { getMediaIds, getMediaInfo, getUserProfile } from '../../common/mock-data';
import Constants from '../../common/constants'
import { Typography, Input, Grid, GridList,
    GridListTile, Card, CardHeader, CardContent,
    Avatar, FormControl, FormHelperText, InputLabel,
    Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    card: {
        maxWidth: '100%',
        margin: '8px',
        shadow: '20px',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer',

    },
});

/*Class component Home defined with constructor & it's states */

class Home extends Component {

    constructor() {
        super();
        this.state = {
            profileInfo: null,
            mediaInfo: [],
            anchorEl:null,
            imagecomment:"",
            addComment:"display-content",
        }
    }

    /* Event  Handler Functions Definitions */

    imageCommentOnChangeChangeHandler = (e) => {
        this.setState({imagecomment: e.target.value});
    }

    addCommentOnClickHandler = (e) => {
        this.setState({addedComment :this.state.imagecomment});

    }

    /*Code written to make two API calls as per the definitions provided in problem statement */

    componentWillMount() {

        const profile = getUserProfile(Constants.BASE_URL +
            '?access_token=' + window.sessionStorage.getItem("access-token"));
        this.setState({
            profileInfo: profile
        });

        const mediaIds = getMediaIds(Constants.BASE_URL + Constants.MEDIA_URL 
            + '?access_token=' + window.sessionStorage.getItem("access-token"));
        this.setState({
            mediaInfo: mediaIds.data
        });

    }

    /* Rendering JSX elements on the Login Page as per the design requirements */

    render() {

        const {classes} = this.props;

        return (
            <div>
                <Header/>
                <div className= "cardStyle">
                    <br />
                    <GridList cellHeight={"auto"} className={classes.gridListMain} cols={2}>
                        {this.state.mediaInfo.map(image => (

                            <GridListTile key={"image" + image.id} cols={image.cols || 1}>
                                <Grid container className={classes.root} spacing={16}>
                                    <Grid item>
                                        <Card className={classes.card}>

                                            <CardHeader
                                                avatar={
                                                    <Avatar className={classes.bigAvatar}>
                                                        <img src={image.user.profile_picture} alt={"logo"} /></Avatar>
                                                }
                                                title={image.user.username}
                                                subheader={image.created_time} />


                                            <CardContent>
                                                <img src={image.images.standard_resolution.url} alt={image.text} className="image-properties" />
                                                <hr />
                                                <Typography>{image.text}</Typography>
                                                <Typography><div className="hash-tags">#{image.tags}</div></Typography>
                                                <div className="likesFont">
                                                    <Typography variant="h5" >
                                                        <img src={hearticon} alt={"heartlogoTransparent"}   onClick={() => this.iconClickHandler} />
                                                        {image.likes.count} Likes</Typography></div>
                                                <br /><br />
                                                <FormControl >
                                                    <FormHelperText className={this.state.addComment}><div><Typography>: {this.state.addedComment}</Typography></div></FormHelperText>
                                                </FormControl>
                                                <br/>
                                                <br/>
                                                <FormControl>
                                                    <InputLabel htmlFor="imagecomment">Add a Comment</InputLabel>
                                                    <Input id="imagecomment" type="text" onChange={this.imageCommentOnChangeChangeHandler} />
                                                </FormControl>
                                                <Button id="addedcomment" variant="contained" color="primary" onClick={this.addCommentOnClickHandler}>ADD</Button>
                                            </CardContent>

                                        </Card>

                                    </Grid>
                                </Grid>
                            </GridListTile>
                        ))};

                    </GridList>

                </div>

            </div>

        )
    }
}

export default withStyles(styles)(Home);