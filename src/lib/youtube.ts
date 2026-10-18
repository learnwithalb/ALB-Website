/** Commands understood by a YouTube embed's postMessage API. */
type YTCommand = "playVideo" | "pauseVideo" | "mute" | "unMute";

/**
 * Send a command to a youtube-nocookie.com embed loaded with `enablejsapi=1`.
 * Commands sent before the player has initialised are silently dropped.
 */
export function ytCommand(iframe: HTMLIFrameElement | null, func: YTCommand) {
  iframe?.contentWindow?.postMessage(
    JSON.stringify({ event: "command", func, args: "" }),
    "https://www.youtube-nocookie.com"
  );
}
