import { Button } from "../../../../assets/button";


export const NavbarSubsection = (): JSX.Element => {
    const navigationItems = [
        { label: "Our Mission", href: "/movinOnUp/ourmission" },
        { label: "Our Services", href: "/movinOnUp/ourservices" },
        { label: "Our Team", href: "/movinOnUp/ourteam" },
    ];
  return (
      <header className="fixed top-0 z-50 w-full h-[100px] bg-[#d2e7ff] shadow">
        <div 
          className="container mx-auto flex items-center justify-between"
          style={{ height: "15vh" }}
        >
          <a href="/movinOnUp/" className="text-2xl font-bold text-black">
            <img 
              src="/movinOnUp/yellowFill.png" 
              alt="Logo" 
              style = {{height: "12vh", width: "auto"}} 
            /> 
          </a>
          <nav className="flex items-center gap-10">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-['Lexend',Helvetica] font-medium text-black text-xl leading-[30px]"
              >
                {item.label}
              </a>
            ))}
                <a href = "/movinOnUp/ourservices">
                    <Button className="bg-black text-white rounded-lg shadow-button-shadow">
                    Book Now
                    </Button>
                </a>
          </nav>
        </div>
      </header>
  );
};
