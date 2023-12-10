import Footer from '@components/Footer';
import Navbar from '@components/Navbar/Navbar';

type Props = {
  children: React.ReactNode;
};

function PreviewLayout({ children }: Props) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default PreviewLayout;
