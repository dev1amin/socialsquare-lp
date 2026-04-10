import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { BlueWebGLShader } from "@/components/ui/blue-webgl-shader";
import { motion } from "framer-motion";

const SSCanvasShowcase = () => {
  return (
    <section id="produto" className="py-8">
      <ContainerScroll
        behindCard={<BlueWebGLShader />}
        titleComponent={
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">Produto</span>
            <h2 className="text-3xl sm:text-5xl font-bold mt-3 text-foreground">
              Conheça o Canvas
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              O ambiente onde inspiração vira conteúdo. Simples, fluido, poderoso.
            </p>
          </div>
        }
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl">
          <img
            src="https://i.imgur.com/gHsvRkQ.png"
            alt="SocialSquare Canvas"
            className="w-full h-full object-cover rounded-2xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg glass text-xs text-muted-foreground"
          >
            Preview em breve
          </motion.div>
        </div>
      </ContainerScroll>
    </section>
  );
};

export default SSCanvasShowcase;
