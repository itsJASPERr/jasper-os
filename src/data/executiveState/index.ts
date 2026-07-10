import protocol from "./protocol.json";
import executive from "./executive.json";
import portfolio from "./portfolio.json";
import operations from "./operations.json";
import knowledge from "./knowledge.json";
import presentation from "./presentation.json";
import generated from "./generated.json";
import user from "./user.json";
import risks from "../executive/risks.json";
import opportunities from "../executive/opportunities.json";
import dependencies from "../executive/dependencies.json";



const state = {
  protocol,
  executive: {
    risks,
    opportunities,
    cross_project_dependencies: dependencies,
    ...executive
  },
  portfolio,
  operations,
  knowledge,
  presentation,
  user,
  generated
};

export const executiveState = state

export default executiveState;