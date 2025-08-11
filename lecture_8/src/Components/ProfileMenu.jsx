import * as React from "react";   
import { useState } from "react";  
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import PaperGroups from "@mui/material/Paper";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { Typography } from "@mui/material";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Typography variant="h6" color="white">
          Perfil{" "}
        </Typography>
        <AccountBoxOutlinedIcon
          sx={{
            fontSize: "1.5rem",
            color: "White",
            margin: "0 0.5rem",
            padding: "0",
          }}
        />
      </Button>

      <Drawer 
        anchor="right" 
        open={open} 
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "grey.300",
          }
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
