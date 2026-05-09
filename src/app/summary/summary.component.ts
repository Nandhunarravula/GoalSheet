import { Component } from '@angular/core';
import { SummaryResponse } from './summary.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  summaryData: SummaryResponse = {
    goalSheetDetails: {
      settings: {
        goalCreationAllowedDays: 5,
        goalEditAllowedAtMonthEnd: true,
        multipleChildGoalsAllowed: true
      },
      allowedStatuses: ['PENDING', 'APPROVED', 'DENIED', 'IN_PROGRESS']
    },
    parentGoal: {
      parentGoalId: 1001,
      teamCode: 'TEAM_A',
      childGoals: [
        {
          childGoalTitle: 'Accessibility Improvements',
          summary: 'Improve WCAG accessibility issues for web forms and navigation.',
          estimateDate: '2026-05-25',
          approvedStatus: 'PENDING',
          comments: [
            {
              goalId: 9001,
              commentedBy: 'TL1001',
              comment: 'Please add proper estimation details',
              commentType: 'REVIEW_COMMENT',
              commentedDate: '2026-05-09T10:30:00'
            }
          ]
        },
        {
          childGoalTitle: 'Database Schema Design',
          summary: 'Design MongoDB collections for goals and users.',
          estimateDate: '2026-05-28',
          approvedStatus: 'APPROVED',
          comments: []
        },
        {
          childGoalTitle: 'Authentication API',
          summary: 'Create login endpoints with JWT implementation.',
          estimateDate: '2026-06-02',
          approvedStatus: 'IN_PROGRESS',
          comments: [
            {
              goalId: 9002,
              commentedBy: 'QA1002',
              comment: 'Confirm token expiry and refresh handling.',
              commentType: 'REVIEW_COMMENT',
              commentedDate: '2026-05-09T11:15:00'
            }
          ]
        },
        {
          childGoalTitle: 'Reporting Dashboard',
          summary: 'Build a summary dashboard for goal statuses and KPIs.',
          estimateDate: '2026-06-05',
          approvedStatus: 'PENDING',
          comments: []
        },
        {
          childGoalTitle: 'User Training Plan',
          summary: 'Create onboarding guides and training walkthroughs.',
          estimateDate: '2026-06-10',
          approvedStatus: 'DENIED',
          comments: [
            {
              goalId: 9003,
              commentedBy: 'TL1001',
              comment: 'Resubmit with clearer scope and timelines.',
              commentType: 'REVIEW_COMMENT',
              commentedDate: '2026-05-09T13:00:00'
            }
          ]
        }
      ]
    }
  };

  get totalChildGoals(): number {
    return this.summaryData.parentGoal.childGoals.length;
  }

  get totalComments(): number {
    return this.summaryData.parentGoal.childGoals.reduce(
      (count, goal) => count + goal.comments.length,
      0
    );
  }
}
