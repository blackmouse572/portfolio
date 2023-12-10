import Navbar from '../../components/Navbar/Navbar';

type Props = {
  children: React.ReactNode;
};

function PreviewLayout({ children }: Props) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default PreviewLayout;
