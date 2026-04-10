import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BlueWebGLShader } from "@/components/ui/blue-webgl-shader";

const SSCanvasShowcase = () => {
  return (
    <section id="produto" className="py-8 overflow-hidden">
      <ContainerScroll
        behindCard={<BlueWebGLShader />}
        titleComponent={
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Produto</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Conheça o <span className="font-serif italic text-primary">Canvas</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-lg">
              O ambiente onde inspiração vira conteúdo.
            </p>
          </div>
        }
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-secondary">
          <img
            src="https://i.imgur.com/gHsvRkQ.png"
            alt="SocialSquare Canvas"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </ContainerScroll>
    </section>
  );
};

export default SSCanvasShowcase;
