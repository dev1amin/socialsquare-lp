import { N8nWorkflowBlock } from "@/components/ui/n8n-workflow-block";
import { motion } from "framer-motion";

const SSWorkflowSection = () => {
  return (
    <section className="py-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-primary tracking-wide uppercase mb-3">Por dentro do sistema</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Veja o fluxo em <span className="font-serif italic text-primary">ação</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Da ideia bruta até o post publicável. Interaja com o fluxo abaixo.
          </p>
        </motion.div>

        <N8nWorkflowBlock />

        <p className="text-center text-sm text-muted-foreground mt-6">
          Cada etapa é automática. Só <strong className="text-foreground">capture a inspiração</strong>.
        </p>
      </div>
    </section>
  );
};

export default SSWorkflowSection;
