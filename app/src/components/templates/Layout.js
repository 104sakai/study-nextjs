export const Layout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>
        <article>
          {children}
        </article>
      </main>
      <footer></footer>
    </>
  )
}