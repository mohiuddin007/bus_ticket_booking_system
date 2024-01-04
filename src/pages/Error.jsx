import { useRouteError } from "react-router-dom";
import Typography from "../components/core/typography";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="body">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body">
        <i>{error?.statusText || error?.message}</i>
      </Typography>
    </div>
  );
};

export default ErrorPage;
