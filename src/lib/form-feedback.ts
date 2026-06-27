export function waitForFormFeedback(delay = 600) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, delay);
  });
}
