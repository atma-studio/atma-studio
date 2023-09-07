import DesktopNavbar from './DesktopNavbar';
import Logo from './Logo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="absolute z-30 mb-16 w-full md:mb-20">
      <div className="mx-auto max-w-6xl sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="ml-4 mt-8 shrink-0 sm:ml-0" data-aos="fade-right">
            <Logo />
          </div>
          {/* Desktop navigation */}
          <DesktopNavbar />
          <Navbar />
        </div>
      </div>
    </header>
  );
}
