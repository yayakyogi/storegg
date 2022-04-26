import { CSSProperties } from "react";
import {
  IcCard,
  IcLogout,
  IcMessage,
  IcOverview,
  IcReward,
  IcSetting,
  IcTransaction,
} from "../../../utils";
import { Button, Text } from "../../atom";

interface SidebarMenuProps {
  href: string;
  text: string;
  className: string;
  onClick: Function;
  style?: CSSProperties;
}

const SidebarMenu = ({
  href,
  className,
  text,
  style,
  onClick,
}: SidebarMenuProps) => {
  const classNames = [
    "w-full flex justify-start items-center px-2 py-4 mb-1",
    className,
  ];

  const Icon: any = () => {
    switch (text) {
      case "Overview":
        return <IcOverview />;
      case "Transactions":
        return <IcTransaction />;
      case "Messages":
        return <IcMessage />;
      case "Card":
        return <IcCard />;
      case "Rewards":
        return <IcReward />;
      case "Settings":
        return <IcSetting />;
      case "Log Out":
        return <IcLogout />;
      default:
        return <IcOverview />;
    }
  };

  return (
    <>
      <Button
        type="link"
        href={href}
        className={classNames.join(" ")}
        style={style}
        onClickAction={onClick}
      >
        <Icon />
        {text}
      </Button>
    </>
  );
};

export default SidebarMenu;
