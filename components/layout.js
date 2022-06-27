import Header from "./header";
import Footer from "./footer";
export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {props.children}

      <Footer />
    </div>
  );
}
