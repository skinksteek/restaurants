import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Hoppsan!</h1>
      <p>Denna sida finns inte.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
