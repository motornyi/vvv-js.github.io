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

import 'styles/CV';

export default class CV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="CV">
        <AppBar
          title="CV App"
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
          <Paper className="main-info-paper-inner" zDepth={4}>
            <div className="blured-bg"></div>
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
              </div>
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