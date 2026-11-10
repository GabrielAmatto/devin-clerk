export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Hügelmänner Plattler",
  description:
    "Um site para o grupo cultural alemão Hügelmänner Plattler: conheça o grupo e veja os itens disponíveis para compra.",
  emoji: "🥨",
  accent: "#1d5fa8",
  upcomingFeatures: [
    {
      title: "Sobre o grupo",
      description:
        "Uma página com a história, os integrantes e a tradição do Plattler.",
    },
    {
      title: "Catálogo de produtos",
      description: "Lista dos itens à venda com foto, preço e descrição.",
    },
    {
      title: "Carrinho de compras",
      description: "Adicione itens ao carrinho e veja o total do pedido.",
    },
    {
      title: "Agenda de apresentações",
      description:
        "Próximas apresentações e eventos do grupo em um calendário simples.",
    },
    {
      title: "Galeria de fotos",
      description: "Fotos e vídeos das apresentações do grupo.",
    },
    {
      title: "Contratar apresentação",
      description:
        "Formulário para pedir uma apresentação do grupo em um evento.",
    },
  ] satisfies Feature[],
};
