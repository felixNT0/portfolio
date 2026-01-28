import { Link } from "react-scroll";
import { useAppContext } from "../../contexts/useAppContext";
import { componentLinks } from "../../routers/componentRoutes";

const ScrollLink = Link as any;

interface MobileDrawerProps {
  nav: boolean;
  setNav: (nav: boolean) => void;
}

function MobileDrawer({ nav, setNav }: MobileDrawerProps) {
  const { changeActiveTab, currentTab } = useAppContext();

  if (!nav) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={() => setNav(false)}
      />
      <ul className="absolute right-0 top-0 h-screen w-[280px] bg-white dark:bg-dark-bg border-l border-slate-200 dark:border-white/10 flex flex-col pt-24 px-6 gap-2">
        {componentLinks.map(({ id, link }) => (
          <li key={id}>
            <ScrollLink
              onClick={() => {
                changeActiveTab(link);
                setNav(false);
              }}
              to={link}
              smooth
              duration={500}
              className={`block px-6 py-4 rounded-xl text-lg font-medium capitalize transition-all ${
                currentTab === link
                  ? "bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"
              }`}
            >
              {link}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileDrawer;
