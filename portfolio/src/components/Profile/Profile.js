import { Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import "./Profile.css";
import Button from "../Button/Button";

const CustomTimelineItem = (title, text, link) => (
  <Timeline>
    <TimelineItem className={"timeline_firstline"} />
    <TimelineSeparator />
    <TimelineConnector />
    <TimelineContent>
      <span>{title}</span>
      {link ? (
        <Typography>
          <span>{title}</span> <a href="#">{text}</a>
        </Typography>
      ) : (
        <Typography>
          <span>{title}</span>
        </Typography>
      )}
    </TimelineContent>
  </Timeline>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Andreea Bolea</Typography>
        <Typography className="title">Informatics Student</Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../assets/pfp.jpg").default} alt="Buna zeara" />
      </figure>
      <Button text="See my CV" />
    </div>
  );
};

export default Profile;
