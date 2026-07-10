type CommandSource =
  | "human"
  | "ai_agent"
  | "system";

interface ExecutiveCommand {
  id: string;
  source: CommandSource;
  action: string;
  entity_id: string;
  payload: Record<string, unknown>;
}