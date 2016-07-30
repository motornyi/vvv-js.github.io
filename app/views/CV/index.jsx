import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import Description from 'material-ui/svg-icons/action/description';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Facebook from 'images/facebook-logo.svg';
import Linkedin from 'images/linkedin-logo.svg';
import Github from 'images/github-logo.svg';
import LinearProgress from 'material-ui/LinearProgress';
import Chip from 'material-ui/Chip';

import {indigo600, indigo900, grey800} from 'material-ui/styles/colors';

import 'styles/CV';

export default class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.styles = {
      chip: {
        margin: 4
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      }
    };

  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});



  render() {
    return (
      <div className="CV">
        <AppBar
          title="CV App"
          zDepth={0}
          iconElementRight={
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
          }
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <span className="background-blue"></span>
        <div className="main-info-paper">
          <Paper style={{backgroundColor: '#f1f1f1'}} className="main-info-paper-inner" zDepth={2}>
            <div className="title-box">
              <Avatar size={80} src="/app/images/Avatar.jpeg" />
              <h1>Vuchkan V.V.</h1>
              <h2> JavaScript and Front-end Developer </h2>
              <Divider />
              <div className="main-info-contact">
                <div className="contact-list">
                  <div><span>Age</span> 18</div>
                  <div><span>Email</span> vuchkan.vladimir@gmail.com</div>
                  <div><span>Phone</span> +38 (066) 0375-901</div>
                  <div><span>Возраст</span> 18</div>
                </div>
                <div className="download-cv"> <RaisedButton
                  label="Download CV"
                  labelPosition="before"
                  primary={true}
                  icon={<Description />}
                /></div>
              </div>

            </div>
            <div className="social-button-box">
                <FlatButton
                  className="social-button"
                  rippleColor={indigo900}
                  style={{height: 60}}
                  href="https://www.facebook.com/vuchkan.vladimir.9"
                  secondary={true}
                  icon={<div className="social-icon" dangerouslySetInnerHTML={{__html: Facebook}}></div>}
                />
                <FlatButton
                  className="social-button"
                  rippleColor={indigo600}
                  style={{height: 60}}
                  href="https://linkedin.com/in/vladimir-vuchkan-318907119"
                  secondary={true}
                  icon={<div className="social-icon" dangerouslySetInnerHTML={{__html: Linkedin}}></div>}
                />
              <FlatButton
                className="social-button"
                rippleColor={grey800}
                style={{height: 60}}
                href="https://github.com/vvv-js"
                secondary={true}
                icon={<div className="social-icon" dangerouslySetInnerHTML={{__html: Github}}></div>}
              />
            </div>
          </Paper>
        </div>

        <div className="skill-list-wrapper">
          <Paper style={{backgroundColor: '#f1f1f1'}} className="skill-list" zDepth={2}>
           <h1>Skills</h1>
            <div className="skill-progress-bar-list">
              <div className="skill-item">
                <p>React JS <span>90%</span></p>
                <LinearProgress mode="determinate" value={90} />
              </div>
              <div className="skill-item">
                <p>JavaScript <span>95%</span></p>
                <LinearProgress mode="determinate" value={95} />
              </div>
              <div className="skill-item">
                <p>ECMAScript  <span>80%</span></p>
                <LinearProgress mode="determinate" value={80} />
              </div>
              <div className="skill-item">
                <p>WebPack <span>75%</span></p>
                <LinearProgress mode="determinate" value={75} />
              </div>
              <div className="skill-item">
                <p>Asynchronous JavaScript<span>80%</span></p>
                <LinearProgress mode="determinate" value={80} />
              </div>
            </div>
            <div className="skill-image">
              <img src="/app/images/SkillImage.jpg" alt=""/>
            </div>
            <div className="additional-skills" style={this.styles.wrapper}>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>HTML5</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>CSS3</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Illustrator</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>PhotoShop</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>SASS</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>LESS</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Bootstrap3</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>GIT</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Angular2</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Angular</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>Scrum</Chip>
              <Chip style={this.styles.chip} onTouchTap={()=>{}}>SQL</Chip>
            </div>
          </Paper>
        </div>

        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}