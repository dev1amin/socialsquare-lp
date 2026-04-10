import { N8nWorkflowBlock } from "@/components/ui/n8n-workflow-block";
import { motion } from "framer-motion";

const SSWorkflowSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary tracking-wider uppercase">Por dentro do sistema</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-foreground">
            Veja o fluxo em ação
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Cada conteúdo que você cria no SocialSquare passa por um fluxo inteligente —
            da ideia bruta até o post publicável. Interaja com o fluxo abaixo.
          </p>
        </motion.div>

        <N8nWorkflowBlock />

        <p className="text-center text-sm text-muted-foreground mt-8">
          Cada etapa é automática. Você só precisa dar o primeiro passo:{" "}
          <strong className="text-foreground">capturar a inspiração</strong>. O resto, o sistema resolve.
        </p>
      </div>
    </section>
  );
};

export default SSWorkflowSection;
