export default function ({ redirect, store }) {
  // TODO Get user and check auth state.
  console.log('middleware auth')
  const user = Math.random()
  const isAuthenticated = user > 0.5
  if (!isAuthenticated) {
    redirect('/auth')
  }
}
