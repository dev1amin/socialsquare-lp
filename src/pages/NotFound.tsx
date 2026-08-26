import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logoSrc from "@/assets/socialsquare-logo.png";
import { Button } from "@/components/landing/primitives";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota inexistente ->", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-5">
      <div className="w-full max-w-lg">
        <div className="flex items-center gap-2.5">
          <img src={logoSrc} alt="" className="h-8 w-8" />
          <span className="text-[17px] font-bold tracking-[-0.03em]">
            SocialSquare
          </span>
        </div>

        <h1 className="h1 mt-10">
          Esse slide <span className="sticker">não existe</span>.
        </h1>

        <p className="lead">
          O endereço <span className="font-semibold text-ink">{location.pathname}</span>{" "}
          não leva a lugar nenhum. A página inicial continua onde estava.
        </p>

        <div className="mt-10">
          <Button href="/">Voltar para o início</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
