const SSFooter = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} SocialSquare. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default SSFooter;
