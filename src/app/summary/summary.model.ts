export interface GoalSettings {
  goalCreationAllowedDays: number;
  goalEditAllowedAtMonthEnd: boolean;
  multipleChildGoalsAllowed: boolean;
}

export interface CommentItem {
  goalId: number;
  commentedBy: string;
  comment: string;
  commentType: string;
  commentedDate: string;
}

export interface ChildGoal {
  childGoalTitle: string;
  summary: string;
  estimateDate: string;
  approvedStatus: string;
  comments: CommentItem[];
}

export interface ParentGoal {
  parentGoalId: number;
  teamCode: string;
  childGoals: ChildGoal[];
}

export interface GoalSheetDetails {
  settings: GoalSettings;
  allowedStatuses: string[];
}

export interface SummaryResponse {
  goalSheetDetails: GoalSheetDetails;
  parentGoal: ParentGoal;
}
