import React from "react";
import ServerHeader from "./serverHeader";
import ClientHeader from "./clientHeader";

const Header = () => {
  return <ServerHeader>{(data) => <ClientHeader data={data} />}</ServerHeader>;
};

export default Header;
