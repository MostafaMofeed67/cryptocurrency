import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function BackToTop({ history }) {
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    };
  }, [history]);

  return null;
}

export default withRouter(BackToTop);
