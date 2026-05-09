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
      childGoal: {
        childGoalTitle: 'Accessibility Improvements',
        summary: 'Improve WCAG accessibility issues',
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
      }
    }
  };
}
