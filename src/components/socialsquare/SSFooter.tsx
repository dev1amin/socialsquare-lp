import logoSrc from "@/assets/socialsquare-logo.png";

const SSFooter = () => {
  return (
    <footer className="border-t border-border/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img src={logoSrc} alt="SocialSquare" className="h-9 w-9 rounded-2xl border border-border/80 bg-white/75 p-1.5" />
          <div>
            <p className="text-sm font-semibold text-foreground">SocialSquare</p>
            <p className="text-xs text-muted-foreground">Seu conteúdo a um clique de distância.</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground/70">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default SSFooter;
