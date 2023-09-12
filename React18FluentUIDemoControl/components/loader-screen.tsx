import * as React from "react";
import { Spinner, makeStyles } from "@fluentui/react-components";

export const LoaderScreen: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Spinner />
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
});
