import { z } from "zod";


const ProtocolSchema = z.object({
  name: z.literal("ExecutiveStateProtocol"),
  version: z.literal("3.0.0"),
});


const GeneratedSchema = z.object({
  timestamp: z.string(),
  timezone: z.string(),
  executive_office_version: z.string(),
});


const UserSchema = z.object({
  name: z.string(),
  mode: z.string(),
});


const BriefingSchema = z.object({
  headline: z.string(),
  summary: z.string(),
  today_focus: z.string(),
  energy_level: z.string(),
  confidence: z.number(),
});


const StrategicPrioritySchema = z.object({
  id: z.string(),
  title: z.string(),
  priority: z.number(),
  status: z.string(),
  progress: z.number(),
  next_action: z.string(),
});


const DecisionSchema = z.object({
  id: z.string(),
  title: z.string(),
  decision: z.string(),
  reasoning: z.string(),
  impact: z.string(),
  date: z.string(),
});


const WaitingOnSchema = z.object({
  owner: z.string(),
  dependency: z.string(),
  blocks: z.array(z.string()),
  priority: z.string(),
  last_follow_up: z.string().nullable(),
  next_follow_up: z.string().nullable(),
});


const RiskSchema = z.object({
  title: z.string(),
  severity: z.string(),
  mitigation: z.string(),
});


const OpportunitySchema = z.object({
  title: z.string(),
  description: z.string(),
  potential_value: z.string(),
  recommended_action: z.string(),
});


const CrossProjectDependencySchema = z.object({
  from: z.string(),
  to: z.string(),
  relationship: z.string(),
});


const ExecutiveActionSchema = z.object({
  title: z.string(),
  reason: z.string(),
  estimated_time: z.string(),
  priority: z.string(),
});


const ReviewSchema = z.object({
  status: z.string().optional(),
});


const ExecutiveReviewsSchema = z.object({
  daily: ReviewSchema,
  weekly: z.record(z.string(), z.unknown()),
  monthly: z.record(z.string(), z.unknown()),
  quarterly: z.record(z.string(), z.unknown()),
});


const ExecutiveSchema = z.object({

  briefing: BriefingSchema,

  strategic_priorities:
    z.array(StrategicPrioritySchema),

  decisions:
    z.array(DecisionSchema),

  waiting_on_register:
    z.array(WaitingOnSchema),

  risks:
    z.array(RiskSchema),

  opportunities:
    z.array(OpportunitySchema),

  cross_project_dependencies:
    z.array(CrossProjectDependencySchema),

  executive_actions:
    z.array(ExecutiveActionSchema),

  executive_reviews:
    ExecutiveReviewsSchema,

});


const ProjectSchema = z.object({

  id: z.string(),
  name: z.string(),
  status: z.string(),
  health: z.string(),
  progress: z.number(),

  blockers:
    z.array(z.string()),

  waiting_on:
    z.array(z.string()),

  repositories:
    z.array(z.string()),

  next_actions:
    z.array(z.string()),

  recent_decisions:
    z.array(z.string()),

});


const ProductSchema = z.object({
  name: z.string(),
  stage: z.string(),
  priority: z.string(),
});


const PortfolioSchema = z.object({

  domains: z.object({

    mission:
      z.array(z.string()),

    technology:
      z.array(z.string()),

    land:
      z.array(z.string()),

    income:
      z.array(z.string()),

    personal:
      z.array(z.string()),

  }),


  projects:
    z.array(ProjectSchema),


  products:
    z.array(ProductSchema),


  repositories:
    z.array(z.string()),


  consulting_pipeline:
    z.object({

      leads:
        z.array(z.unknown()),

      active_proposals:
        z.array(z.unknown()),

      active_clients:
        z.array(z.unknown()),

      completed_projects:
        z.array(z.unknown()),

    }),

});


const OperationsSchema = z.object({

  tasks: z.object({

    today:
      z.array(z.object({
        title: z.string(),
        tag: z.string(),
        time: z.string(),
      })),

    this_week:
      z.array(z.unknown()),

    delegated:
      z.array(z.unknown()),

    blocked:
      z.array(z.string()),

    completed_recently:
      z.array(z.string()),

  }),


  calendar: z.object({
    today:
      z.array(z.unknown()),

    upcoming:
      z.array(z.unknown()),
  }),


  meetings:
    z.array(z.unknown()),


  github_workspace: z.object({

    organizations:
      z.array(z.string()),

    repositories:
      z.array(z.string()),

    issues:
      z.array(z.unknown()),

    pull_requests:
      z.array(z.unknown()),

    deployments:
      z.array(z.unknown()),

    actions:
      z.array(z.unknown()),

    alerts:
      z.array(z.unknown()),

  }),


  metrics: z.object({

    projects_active:
      z.number(),

    blocked_items:
      z.number(),

    focus_score:
      z.number(),

    weekly_progress:
      z.number(),

  }),

});


const KnowledgeSchema = z.object({

  new_insights:
    z.array(z.string()),

  open_questions:
    z.array(z.string()),

  ideas:
    z.array(z.string()),

  personal: z.object({

    learning:
      z.array(z.string()),

  }),

});


const PresentationSchema = z.object({

  notifications:
    z.array(
      z.object({
        type: z.string(),
        message: z.string(),
      })
    ),


  dashboard:
    z.object({

      hero_project:
        z.string(),

      hero_metric:
        z.string(),

      highlight:
        z.string(),

      alert:
        z.string(),

    }),

});


export const ExecutiveStateSchema = z.object({

  protocol:
    ProtocolSchema,

  generated:
    GeneratedSchema,

  user:
    UserSchema,

  executive:
    ExecutiveSchema,

  portfolio:
    PortfolioSchema,

  operations:
    OperationsSchema,

  knowledge:
    KnowledgeSchema,

  presentation:
    PresentationSchema,

});


export type ExecutiveState =
  z.infer<typeof ExecutiveStateSchema>;


export type ExecutiveDecision =
  ExecutiveState["executive"]["decisions"][number];


export type PortfolioProject =
  ExecutiveState["portfolio"]["projects"][number];


export type StrategicPriority =
  ExecutiveState["executive"]["strategic_priorities"][number];

export type Generated = z.infer<typeof GeneratedSchema>;

export type ExecutiveUser = z.infer<typeof UserSchema>;

export type ExecutiveProtocol = z.infer<typeof ProtocolSchema>;

export type ExecutiveGenerated = z.infer<typeof GeneratedSchema>;

export type ExecutiveBriefing = z.infer<typeof BriefingSchema>;

export type ExecutiveRisk = z.infer<typeof RiskSchema>;

export type ExecutiveOpportunity = z.infer<typeof OpportunitySchema>;

export type ExecutiveNotification = z.infer<
  typeof PresentationSchema
>["notifications"][number];

export type DashboardPresentation = z.infer<
  typeof PresentationSchema
>["dashboard"];

export type ExecutiveAction = z.infer<typeof ExecutiveActionSchema>;

export type ExecutiveReviews = z.infer<typeof ExecutiveReviewsSchema>;

export type WaitingOnItem = z.infer<typeof WaitingOnSchema>;

export type CrossProjectDependency = z.infer<
  typeof CrossProjectDependencySchema
>;

export type OperationsMetrics = z.infer<typeof OperationsSchema>["metrics"];

export type OperationsTasks = z.infer<typeof OperationsSchema>["tasks"];

export type Portfolio = z.infer<typeof PortfolioSchema>;

export type PortfolioProduct = z.infer<typeof ProductSchema>;