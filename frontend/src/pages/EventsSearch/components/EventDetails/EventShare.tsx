import React from "react";
import {
  TwitterIcon,
  TwitterShareButton,
  FacebookIcon,
  FacebookShareButton,
} from "react-share";

import useEventDetails from "../../services/useEventDetails";
import { useParams } from "react-router-dom";

export default function EventShare() {
  const { id } = useParams();
  const { data } = useEventDetails(id as string);
  const url = data?.ticket_link
  const title = `Check ${data?.name} on Ticketmaster`
  return (
    <div className="flex gap-2 items-center">
      <span className="text-white text-xl">Share On:</span>
      <TwitterShareButton title={title} url={url as string}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <FacebookShareButton title={title} url={url as string}>
        <FacebookIcon size={32} round={true}/>
      </FacebookShareButton>
    </div>
  );
}
