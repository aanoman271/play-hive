import { useEffect } from "react";

const PageTitle = ({ title = "PlayHive" }) => {
  useEffect(() => {
    document.title = `${title} | PlayHive`;
  }, [title]);

  return null;
};

export default PageTitle;
