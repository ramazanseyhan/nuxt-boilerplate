export default function({ redirect, store }) {
  //TODO Get user and check auth state.
  console.log("Auth middleware");
  const user = Math.random();
  const isAuthenticated = user > 0.5 ? true : false;
  if (!isAuthenticated) {
    redirect("/auth");
  }
}
