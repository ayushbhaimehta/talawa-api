import type { EventResolvers } from "../../types/generatedGraphQLTypes";
import { attendees } from "./attendees";
import { attendeesCheckInStatus } from "./attendeesCheckInStatus";
import { organization } from "./organization";
import { projects } from "./projects";

export const Event: EventResolvers = {
  attendees,
  attendeesCheckInStatus,
  organization,
  projects,
};
