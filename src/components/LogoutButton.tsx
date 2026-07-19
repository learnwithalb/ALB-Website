/**
 * Logout button. The Edmingle SDK binds the click via
 * `$('.postLogin.logout').on('click', logoutApp)` and manages visibility of
 * `.postLogin` elements automatically. Hidden initially.
 */
export function LogoutButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`postLogin logout ${className}`}
      style={{ display: "none" }}
    >
      Log out
    </button>
  );
}
