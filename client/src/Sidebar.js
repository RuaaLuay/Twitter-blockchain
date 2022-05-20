import React from "react";
import "./Sidebar.css";
//import AiOutlineTwitter from "react-icons/ai";
import SidebarOption from "./SidebarOption.js";
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiMail } from 'react-icons/fi'
import { FiBookmark } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'

function Sidebar() {

  return (
    <div className="sidebar" >
       <AiOutlineTwitter className="sidebar__twitterIcon" />

<SidebarOption Icon={AiFillHome} text=".Home" />
<SidebarOption Icon={AiOutlineSearch} text=".Explore" />
<SidebarOption Icon={IoMdNotificationsOutline} text=".Notifications" />
<SidebarOption Icon={FiMail} text=".Messages" />
<SidebarOption Icon={FiBookmark} text=".Bookmarks" />
<SidebarOption Icon={AiOutlineUnorderedList} text=".Lists"/>
<SidebarOption Icon={CgProfile} text=".Profile"/>
<SidebarOption Icon={FiMoreHorizontal} text=".More" />

{/* Button -> Tweet */}
    </div>
  );
}

export default Sidebar;