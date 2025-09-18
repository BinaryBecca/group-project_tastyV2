import Searchbar from "../searchbar/Searchbar"

export default function Header() {
  return (
    <header className="px-46.5 py-11.5">
      <div className="flex justify-center mb-22">
        <img src="/img/logo.svg" alt="tasty-logo" />
      </div>
      <Searchbar />
    </header>
  )
}
