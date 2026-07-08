import Sidebar from "../componets/side-bar/Sidebar";

function RootLayout({ children }) {
  return (
    <>
    <Sidebar />
      <main>
        {children}
      </main>
    </>
  );
}

export default RootLayout;