require("dotenv").config();
const Toggl = require("./classes/toggl");
const Kimai = require("./classes/kimai");
const prompt = require("prompt");

prompt.start();

prompt.get(["startDate", "endDate"], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  const startDate = new Date(result.startDate);
  startDate.setHours(0, 0, 0, 0);
  const endDate = new Date(result.endDate);
  endDate.setHours(23, 59, 59);
  main(startDate.toISOString(), endDate.toISOString());
});

const toggl = new Toggl(process.env.TOGGL_API_URL, process.env.TOGGL_API_KEY);
const kimai = new Kimai(
  process.env.KIMAI_API_URL,
  process.env.KIMAI_API_USER,
  process.env.KIMAI_API_KEY
);

const loopThroughTimeSheets = async (timesheets, kimaiProjects) => {
  for (const ts of timesheets) {
    const project = await toggl.getProject(ts.pid);
    const kimaiProject = kimaiProjects.find((k) => k.name === project.name);
    await kimai.createTimesheet(
      ts.start,
      ts.stop,
      kimaiProject.id,
      ts.description
    );
    console.log(`timesheet "${ts.description} de ${ts.start} à ${ts.stop} créée`);
  }
};

const main = async (startDate, endDate) => {
  const kimaiProjects = await kimai.getProjects();
  const timesheets = await toggl.getTimesheets(startDate, endDate);
  await loopThroughTimeSheets(timesheets, kimaiProjects);
};
