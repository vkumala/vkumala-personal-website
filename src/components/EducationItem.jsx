export default function EducationItem({ education }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-10 py-2">
        <div className="uppercase text-secondary py font-bold">
          {education.start} – {education.end}
        </div>
        <div className="col-span-2 text-dark">
          <div className="text-2xl">{education.college}</div>
          <div className="text-xl">{education.major}</div>
          <div className="italic">{education.role}</div>
        </div>
      </div>
    </>
  );
}
