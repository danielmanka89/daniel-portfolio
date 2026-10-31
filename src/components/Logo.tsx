// "Ligature lockup": DLM mark | divider | name block.
export default function Logo() {
  return (
    <>
      <svg className="site-logo__mark" viewBox="0 0 68 40" width="46" height="27" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4V36H10C19 36 23 29 23 20S19 4 10 4H4Z" />
          <path d="M31 4V36H64" />
          <path d="M40 29V4L48.5 18L57 4V29" />
        </g>
        <circle cx="64" cy="36" r="3.4" fill="#FF0000" />
      </svg>
      <span className="site-logo__bar" />
      <span className="site-logo__name">
        <b>
          Daniel <span className="site-logo__manka">Manka</span>
        </b>
        <em>Livingstone</em>
      </span>
    </>
  );
}
