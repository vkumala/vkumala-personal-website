export default function ExperienceItem({ experience }) {
  return (
    <div className="grid grid-cols-3 gap-10 py-2">
      <div className="uppercase text-secondary py font-bold">
        {experience.start} – {experience.end}
      </div>
      <div className="col-span-2 text-dark">
        <div className="text-xl">{experience.company}</div>
        <div className="italic">{experience.role}</div>
      </div>
    </div>
  );
}
