import Container from "@/components/ui/Container";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({ children, className = "", id }: Props) {
  return (
    <section
      id={id}
      className={`border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
