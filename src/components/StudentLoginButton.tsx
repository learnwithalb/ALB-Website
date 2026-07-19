/**
 * Student Login button. The Edmingle SDK binds the click handler automatically
 * via `$('.loginButton.login').on('click', openLoginModal)` — do NOT add onClick.
 * `className` carries the existing navbar Tailwind styling, unchanged.
 */
export function StudentLoginButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" className={`loginButton login ${className}`}>
      Student Login
    </button>
  );
}
