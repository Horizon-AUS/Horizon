import { FaArrowUp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Horizon. All rights reserved.
      </p>

      <a
        href="#home"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        {" "}
        <FaArrowUp size={20} />{" "}
      </a>
    </footer>
  );
};
