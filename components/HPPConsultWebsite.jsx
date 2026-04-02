export default function HPPConsultWebsite() {
  const services = [
    {
      title: "HPP System Audits",
      description:
        "On-site evaluations focused on reliability, downtime reduction, maintenance gaps, operator workflow, and throughput opportunities.",
      bullets: ["Equipment walkthrough", "Downtime analysis", "Action plan report"],
    },
    {
      title: "PM Structure & CMMS Optimization",
      description:
        "Preventive maintenance program design, PM frequency planning, and critical spare-parts structure built from industry best practices and client data.",
      bullets: ["PM development", "CMMS structure", "Critical parts strategy"],
    },
    {
      title: "Training & Skill Development",
      description:
        "Hands-on and classroom-based training for maintenance teams and operators to improve troubleshooting capability, ownership, and consistency.",
      bullets: ["Operator fundamentals", "Maintenance training", "Skill-gap focus"],
    },
    {
      title: "Efficiency Improvements",
      description:
        "Throughput-focused support to identify bottlenecks, improve production flow, and strengthen loading, unloading, and maintenance coordination.",
      bullets: ["Bottleneck review", "Cycle-time focus", "Workflow improvement"],
    },
    {
      title: "Startup & Commissioning Support",
      description:
        "Support for new or expanding HPP operations that need structure, maintenance planning, spare-parts readiness, and team preparation.",
      bullets: ["Startup readiness", "Maintenance setup", "Team preparation"],
    },
    {
      title: "Inventory & Spare Parts Strategy",
      description:
        "Assessment of critical components, stocking logic, and spare-parts planning to reduce downtime risk while avoiding unnecessary inventory spend.",
      bullets: ["Criticality review", "Stocking strategy", "Downtime risk reduction"],
    },
  ];

  const principles = [
    "Independent consulting performed outside of primary employment responsibilities",
    "No use of proprietary employer data, internal processes, or confidential documents",
    "Client confidentiality and conflict-of-interest boundaries taken seriously",
    "Recommendations focused on safety, compliance, reliability, and measurable operational value",
  ];

  const process = [
    {
      step: "01",
      title: "Discovery Call",
      text: "We discuss your HPP operation, current challenges, goals, and where support is needed most.",
    },
    {
      step: "02",
      title: "On-Site or Remote Assessment",
      text: "We review systems, maintenance structure, bottlenecks, inventory, and team needs based on the selected scope.",
    },
    {
      step: "03",
      title: "Action Plan",
      text: "You receive practical recommendations prioritized by operational impact, implementation difficulty, and return on value.",
    },
    {
      step: "04",
      title: "Implementation Support",
      text: "Follow-up support is available for training, PM rollout, inventory planning, and progress tracking.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-cyan-400/5 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28 relative">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200">
                HPP CONSULT
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Technical consulting for High-Pressure Processing operations.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I help HPP facilities improve reliability, reduce downtime, strengthen maintenance systems, and prepare teams for long-term operational success.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:scale-[1.02]"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Request a Consultation
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {["Maintenance Systems", "Downtime Reduction", "Operational Readiness"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Focused Support</p>
                <h2 className="mt-3 text-2xl font-semibold">Built for HPP facilities that need structure, performance, and practical execution.</h2>
                <div className="mt-6 space-y-4 text-sm text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    On-site audits and maintenance evaluations
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    PM, CMMS, inventory, and training support
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    Recommendations grounded in measurable operational value
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Consulting designed around the real needs of HPP operations.</h2>
          <p className="mt-4 text-slate-300">
            Each engagement is tailored to the client's current equipment, maintenance maturity, production needs, and team capability.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">How I Work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A practical process centered on execution.</h2>
            <div className="mt-8 space-y-5">
              {process.map((item) => (
                <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-400/10 text-sm font-bold text-cyan-200">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-300">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Code of Ethics</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Built on trust, boundaries, and professionalism.</h2>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/50 p-6">
              <ul className="space-y-4 text-sm leading-7 text-slate-300">
                {principles.map((principle) => (
                  <li key={principle} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Why HPP Consult</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Support that is technical, practical, and operations-focused.</h2>
            <p className="mt-4 text-slate-300">
              HPP Consult is built for facilities that want more than generic advice. The focus is on real maintenance systems, stronger team capability, improved reliability, and practical results that matter to your operation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["Reliability", "Reduce avoidable downtime through stronger maintenance structure and better planning."],
              ["Team Development", "Improve operator and technician confidence with targeted training and clearer expectations."],
              ["Inventory Control", "Stock smarter by identifying what is truly critical versus what ties up cash unnecessarily."],
              ["Operational Readiness", "Prepare new or evolving HPP operations with systems that support long-term success."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-gradient-to-b from-transparent to-cyan-400/5">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let's talk about your HPP operation.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Whether you need an on-site audit, help structuring preventive maintenance, better training, or support preparing a new system, HPP Consult can help you create a more reliable and efficient operation.
          </p>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-left shadow-xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-slate-400">Business Name</p>
                <p className="mt-1 text-lg font-semibold">HPP Consult</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Prepared By</p>
                <p className="mt-1 text-lg font-semibold">Samuel Galler</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-1 text-lg font-semibold">samuel@hppconsult.com</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="mt-1 text-lg font-semibold">San Diego, California</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:samuel@hppconsult.com"
                className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Email HPP Consult
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Review Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}