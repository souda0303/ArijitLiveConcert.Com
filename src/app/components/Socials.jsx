import Link from "next/link";

import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";

const socials = [
  {
    path: "#",
    icons: <RiYoutubeFill />,
  },
  {
    path: "#",
    icons: <RiInstagramFill />,
  },
  {
    path: "#",
    icons: <RiSpotifyFill />,
  },
  {
    path: "#",
    icons: <RiSoundcloudFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index}>
            <div className={`${iconStyles}`}>{item.icons}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
