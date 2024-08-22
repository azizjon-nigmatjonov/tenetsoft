export const Team = () => {
  return (
    <div className="bg-[var(--gray20)]">
      <div className="container">
        <div className="py-20 flex justify-between lg:px-20 flex-col md:flow-row">
          <div className="md:w-1/2">
            <h4 className="section-title" style={{ textAlign: "start" }}>
              Team
            </h4>
            <p className="mt-4 text-xl leading-10 text-[var(--black)]">
              For your project, we form a team consisting of a Project Manager,
              UI/UX designer, DevOps specialist, QA engineer, Backend, and
              Frontend developers.
            </p>
          </div>
          <img className="h-[50vh] mt-10 md:mt-0" src="/images/team.png" alt="team" />
        </div>
      </div>
    </div>
  );
};
