/**
 * "My Account" button — takes the logged-in user to the LMS dashboard.
 * The Edmingle SDK binds the click via `$('.goToAccountButton').on('click', ...)`
 * and reveals `.postLogin` elements after a successful login. Hidden initially.
 */
export function MyAccountButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`postLogin goToAccountButton ${className}`}
      style={{ display: "none" }}
    >
      My Account
    </button>
  );
}
