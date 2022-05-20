import React, { forwardRef } from "react";
import "./Post.css";
import Avatar from 'avataaars';
import { generateRandomAvatarOptions } from './avatar';
//import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { AiOutlineSearch } from 'react-icons/ai'

import { BsChatDots} from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
import {MdFavoriteBorder} from "react-icons/md";
import {MdPublish} from "react-icons/md";
import {AiOutlineDelete} from 'react-icons/ai';

const Post = forwardRef(
  ({ displayName, text, personal, onClick }, ref) => {

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar
            style={{ width: '100px', height: '100px' }}
            avatarStyle='Circle'
            {...generateRandomAvatarOptions() }
          />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <div className="post__footer">
            <BsChatDots fontSize="small" />
            <FiRepeat fontSize="small" />
            <MdFavoriteBorder fontSize="small" />
            <MdPublish fontSize="small" />
            {personal ? (
              <AiOutlineDelete fontSize="small" onClick={onClick}/>
            ) : ("")}
          </div>
        </div>
      </div>
    );
  }
);

export default Post;