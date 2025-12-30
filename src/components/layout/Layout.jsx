import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <div className="content__container">{children}</div>
        </main>
      </div>
    </>
  );
}
