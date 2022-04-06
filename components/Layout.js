import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className='bg-brand-500 pt-8'>
      <Header />
      {children}
    </div>
  );
}
