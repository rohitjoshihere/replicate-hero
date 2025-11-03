const CompanyLogos = () => {
  const companies = [
    { name: "Qualcomm", opacity: 0.4 },
    { name: "Walmart", opacity: 0.3 },
    { name: "Amazon", opacity: 0.5 },
    { name: "Adobe", opacity: 0.4 },
    { name: "Deloitte", opacity: 0.3 },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-12">
          Trusted by Founders from
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="text-2xl md:text-3xl font-bold tracking-tight transition-opacity hover:opacity-100"
              style={{ opacity: company.opacity, color: 'hsl(var(--muted-foreground))' }}
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
