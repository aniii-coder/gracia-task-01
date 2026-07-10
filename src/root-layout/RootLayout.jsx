import Sidebar from "../componets/side-bar/Sidebar";

function RootLayout({ children }) {
  return (
    <>
      <Sidebar />
      <main style={{marginLeft:'288px'}}>
        {children}
      </main>
    </>
  );
}

export default RootLayout;