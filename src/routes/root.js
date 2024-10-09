export default function Root() {
  return (
    <>
      <div>
        <div>
          <a id="logo" href={`/hem`}>
            <img src="/logo.png" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/hem`}>Hem</a>
            </li>
            <li>
              <a href={`/meny`}>Meny</a>
            </li>
            <li>
              <a href={`/kontakt`}>Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
