import logoSrc from "@/assets/socialsquare-logo.png";

const SSFooter = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoSrc} alt="SocialSquare" className="w-5 h-5 opacity-40" />
          <span className="text-sm text-muted-foreground/60 font-medium">SocialSquare</span>
        </div>
        <p className="text-xs text-muted-foreground/40">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default SSFooter;
