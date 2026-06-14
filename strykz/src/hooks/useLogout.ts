export default function useLogout() {
  return async () => {
    await fetch("https://api.strykz.net/logout", {
      method: "POST",
      credentials: "include",
    });
  };
}
